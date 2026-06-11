import fs from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import SwaggerParser from "@apidevtools/swagger-parser";
import YAML from "yaml";

const root = process.cwd();
const sourceDir = path.join(root, "assets/openapi");
const outputDir = path.join(sourceDir, "generated");
const sources = [
  { lang: "zh", file: "qweather-apis-zh.yml" },
  { lang: "en", file: "qweather-apis-en.yml" }
];
const methods = ["get", "post", "put", "patch", "delete", "options", "head", "trace"];
const constraintKeys = [
  "default", "enum", "example", "multipleOf", "maximum", "exclusiveMaximum",
  "minimum", "exclusiveMinimum", "maxLength", "minLength", "pattern",
  "maxItems", "minItems", "uniqueItems", "maxProperties", "minProperties"
];

class OpenAPIDiagnostic extends Error {
  constructor(context, keyword, message) {
    const detail = [
      `language=${context.lang}`,
      `operationId=${context.operationId || "<unknown>"}`,
      `response=${context.responseStatus || "<none>"}`,
      `schema=${context.schemaPath || "<none>"}`,
      `keyword=${keyword}`
    ].join(" ");
    super(`${message} (${detail})`);
  }
}

const cloneContext = (context, values = {}) => ({ ...context, ...values });

class Resolver {
  constructor(entryFile, lang) {
    this.entryFile = entryFile;
    this.lang = lang;
    this.documents = new Map();
  }

  async load(file) {
    const absolute = path.resolve(file);
    if (!this.documents.has(absolute)) {
      const raw = await fs.readFile(absolute, "utf8");
      this.documents.set(absolute, YAML.parse(raw));
    }
    return this.documents.get(absolute);
  }

  async resolve(ref, fromFile, context) {
    if (/^https?:\/\//.test(ref)) {
      throw new OpenAPIDiagnostic(context, "$ref", `Remote external references are not supported by the documentation normalizer: ${ref}`);
    }
    const [filePart, fragment = ""] = ref.split("#", 2);
    const targetFile = filePart ? path.resolve(path.dirname(fromFile), filePart) : fromFile;
    let value = await this.load(targetFile);
    if (fragment) {
      for (const rawPart of fragment.replace(/^\//, "").split("/")) {
        const part = rawPart.replace(/~1/g, "/").replace(/~0/g, "~");
        value = value?.[part];
        if (value === undefined) {
          throw new OpenAPIDiagnostic(context, "$ref", `Unresolved reference: ${ref}`);
        }
      }
    }
    return { value, file: targetFile, key: `${targetFile}#${fragment}` };
  }
}

function schemaType(schema) {
  if (!schema) return "";
  if (schema.format) return schema.format;
  if (schema.type) return Array.isArray(schema.type) ? schema.type.join("|") : schema.type;
  if (schema.properties || schema.allOf || schema.oneOf || schema.anyOf) return "object";
  return "";
}

function scalarExample(schema) {
  if (schema.example !== undefined) return schema.example;
  if (schema.default !== undefined) return schema.default;
  if (schema.enum?.length) return schema.enum[0];
  if (schema.type === "boolean") return false;
  if (schema.type === "integer" || schema.type === "number") return 0;
  if (schema.type === "array") return [];
  if (schema.type === "object") return {};
  return "string";
}

async function normalizeSchema(schema, resolver, file, context, stack = []) {
  if (!schema) return emptySchemaNode();
  if (schema.$ref) {
    const resolved = await resolver.resolve(schema.$ref, file, context);
    if (stack.includes(resolved.key)) {
      return { ...emptySchemaNode(), recursiveRef: schema.$ref };
    }
    const normalized = await normalizeSchema(resolved.value, resolver, resolved.file, context, [...stack, resolved.key]);
    return {
      ...normalized,
      description: schema.description || normalized.description
    };
  }

  const node = {
    ...emptySchemaNode(),
    type: schemaType(schema),
    description: schema.description || "",
    nullable: Boolean(schema.nullable),
    readOnly: Boolean(schema.readOnly),
    writeOnly: Boolean(schema.writeOnly),
    deprecated: Boolean(schema.deprecated),
    discriminator: schema.discriminator || null
  };
  node.constraints = Object.fromEntries(
    constraintKeys.filter((key) => schema[key] !== undefined).map((key) => [key, schema[key]])
  );
  node.externalDocs = schema.externalDocs || null;
  node.extensions = Object.fromEntries(Object.entries(schema).filter(([key]) => key.startsWith("x-")));

  if (schema.properties) {
    for (const [name, property] of Object.entries(schema.properties)) {
      const childContext = cloneContext(context, { schemaPath: `${context.schemaPath}.properties.${name}` });
      const normalized = await normalizeSchema(property, resolver, file, childContext, stack);
      node.children.push({ name, required: schema.required?.includes(name) || false, ...normalized });
    }
  }

  for (const keyword of ["allOf", "oneOf", "anyOf"]) {
    if (!schema[keyword]) continue;
    for (const [index, member] of schema[keyword].entries()) {
      const memberContext = cloneContext(context, { schemaPath: `${context.schemaPath}.${keyword}[${index}]` });
      node[keyword].push(await normalizeSchema(member, resolver, file, memberContext, stack));
    }
  }

  if (schema.items) {
    const itemsContext = cloneContext(context, { schemaPath: `${context.schemaPath}.items` });
    node.items = await normalizeSchema(schema.items, resolver, file, itemsContext, stack);
  }

  if (schema.additionalProperties === true) {
    node.additionalProperties = { ...emptySchemaNode(), type: "any" };
  } else if (schema.additionalProperties && typeof schema.additionalProperties === "object") {
    const additionalContext = cloneContext(context, { schemaPath: `${context.schemaPath}.additionalProperties` });
    node.additionalProperties = await normalizeSchema(schema.additionalProperties, resolver, file, additionalContext, stack);
  }

  if (schema.not) {
    const notContext = cloneContext(context, { schemaPath: `${context.schemaPath}.not` });
    node.not = await normalizeSchema(schema.not, resolver, file, notContext, stack);
  }

  return node;
}

function emptySchemaNode() {
  return {
    type: "",
    description: "",
    children: [],
    items: null,
    allOf: [],
    oneOf: [],
    anyOf: [],
    not: null,
    additionalProperties: null,
    recursiveRef: null,
    nullable: false,
    readOnly: false,
    writeOnly: false,
    deprecated: false,
    discriminator: null,
    constraints: {},
    externalDocs: null,
    extensions: {}
  };
}

function fallbackExample(node, depth = 0) {
  if (!node || depth > 12 || node.oneOf.length || node.anyOf.length || node.recursiveRef) return null;
  if (node.type === "array" || node.items) {
    const item = fallbackExample(node.items, depth + 1);
    return item === null ? [] : [item];
  }
  const object = {};
  for (const field of node.children) {
    const value = fallbackExample(field, depth + 1);
    if (value !== null) object[field.name] = value;
  }
  for (const member of node.allOf) {
    const value = fallbackExample(member, depth + 1);
    if (value && typeof value === "object" && !Array.isArray(value)) Object.assign(object, value);
  }
  if (Object.keys(object).length) return object;
  if (node.type === "boolean") return false;
  if (node.type === "integer" || node.type === "number") return 0;
  if (node.type === "object") return {};
  return "string";
}

async function resolveObject(value, resolver, file, context) {
  if (!value?.$ref) return { value, file };
  return resolver.resolve(value.$ref, file, context);
}

function selectSuccessResponse(responses, context) {
  if (responses["200"]) return ["200", responses["200"]];
  const candidate = Object.entries(responses).find(([status]) => /^2\d\d$/.test(status));
  if (candidate) return candidate;
  throw new OpenAPIDiagnostic(context, "responses", "No successful response found");
}

async function loadExamples(mediaType, file, context) {
  const normalized = [];
  const examples = mediaType?.examples || {};
  for (const [name, exampleRef] of Object.entries(examples)) {
    const resolved = await resolveObject(exampleRef, new Resolver(file, context.lang), file, context);
    const example = resolved.value;
    if (example.externalValue) {
      if (/^https?:\/\//.test(example.externalValue)) {
        throw new OpenAPIDiagnostic(context, "externalValue", `Remote response examples are not supported: ${example.externalValue}`);
      }
      const absolute = path.resolve(path.dirname(resolved.file), example.externalValue);
      JSON.parse(await fs.readFile(absolute, "utf8"));
      normalized.push({
        name,
        summary: example.summary || "",
        description: example.description || "",
        externalPath: path.relative(root, absolute).split(path.sep).join("/")
      });
      continue;
    }
    if (example.value !== undefined) {
      normalized.push({ name, summary: example.summary || "", description: example.description || "", value: example.value });
    }
  }
  if (mediaType?.example !== undefined) normalized.push({ name: "default", summary: "", description: "", value: mediaType.example });
  return normalized;
}

async function normalizeParameter(parameterRef, resolver, file, context) {
  const resolved = await resolveObject(parameterRef, resolver, file, context);
  const parameter = resolved.value;
  const schemaResolved = await resolveObject(parameter.schema || {}, resolver, resolved.file, context);
  const schema = schemaResolved.value || {};
  if (!["path", "query"].includes(parameter.in)) {
    throw new OpenAPIDiagnostic(context, "parameters", `Parameter location is not rendered yet: ${parameter.in}`);
  }
  if (parameter.style || parameter.explode !== undefined || parameter.content) {
    throw new OpenAPIDiagnostic(context, "parameters", `Parameter serialization is not rendered yet: ${parameter.name}`);
  }
  const examples = [];
  if (parameter.example !== undefined) examples.push({ name: "default", value: parameter.example });
  for (const [name, exampleRef] of Object.entries(parameter.examples || {})) {
    const exampleResolved = await resolveObject(exampleRef, resolver, resolved.file, context);
    if (exampleResolved.value.externalValue) {
      throw new OpenAPIDiagnostic(context, "externalValue", `External parameter examples are not rendered yet: ${parameter.name}`);
    }
    if (exampleResolved.value.value !== undefined) examples.push({ name, value: exampleResolved.value.value });
  }
  return {
    name: parameter.name,
    in: parameter.in,
    required: Boolean(parameter.required),
    description: parameter.description || "",
    type: schemaType(schema),
    example: examples[0]?.value ?? scalarExample(schema),
    examples
  };
}

function requestExample(method, endpoint, parameters) {
  let requestPath = endpoint;
  const query = [];
  for (const parameter of parameters) {
    const value = String(parameter.example);
    if (parameter.in === "path") requestPath = requestPath.replace(`{${parameter.name}}`, encodeURIComponent(value));
    if (parameter.in === "query") query.push(`${parameter.name}=${encodeURIComponent(value)}`);
  }
  const url = `https://your-api-host${requestPath}${query.length ? `?${query.join("&")}` : ""}`;
  return `curl -X ${method.toUpperCase()} --compressed \\\n-H 'Authorization: Bearer your_token' \\\n'${url}'`;
}

export async function normalizeDocument(source) {
  const entryFile = source.path ? path.resolve(root, source.path) : path.join(sourceDir, source.file);
  try {
    await SwaggerParser.validate(entryFile);
  } catch (error) {
    throw new Error(`OpenAPI validation failed language=${source.lang} source=${entryFile}: ${error.message}`, { cause: error });
  }
  const resolver = new Resolver(entryFile, source.lang);
  const document = await resolver.load(entryFile);
  const operations = [];

  for (const [endpoint, pathItem] of Object.entries(document.paths || {})) {
    for (const method of methods) {
      const operation = pathItem[method];
      if (!operation?.operationId || !operation.externalDocs?.url) continue;
      const baseContext = {
        lang: source.lang,
        operationId: operation.operationId,
        responseStatus: "",
        schemaPath: `paths.${endpoint}.${method}`
      };
      const parameters = [];
      if (operation.requestBody) {
        throw new OpenAPIDiagnostic(baseContext, "requestBody", "Request bodies are valid OpenAPI but not rendered by the current endpoint template");
      }
      if (operation.callbacks && Object.keys(operation.callbacks).length) {
        throw new OpenAPIDiagnostic(baseContext, "callbacks", "Callbacks are valid OpenAPI but not rendered by the current endpoint template");
      }
      for (const parameter of [...(pathItem.parameters || []), ...(operation.parameters || [])]) {
        parameters.push(await normalizeParameter(parameter, resolver, entryFile, baseContext));
      }

      const [responseStatus, responseRef] = selectSuccessResponse(operation.responses || {}, baseContext);
      const responseContext = cloneContext(baseContext, {
        responseStatus,
        schemaPath: `paths.${endpoint}.${method}.responses.${responseStatus}`
      });
      const responseResolved = await resolveObject(responseRef, resolver, entryFile, responseContext);
      if (responseResolved.value?.headers && Object.keys(responseResolved.value.headers).length) {
        throw new OpenAPIDiagnostic(responseContext, "headers", "Response headers are valid OpenAPI but not rendered by the current endpoint template");
      }
      if (responseResolved.value?.links && Object.keys(responseResolved.value.links).length) {
        throw new OpenAPIDiagnostic(responseContext, "links", "Response links are valid OpenAPI but not rendered by the current endpoint template");
      }
      const mediaType = responseResolved.value?.content?.["application/json"];
      if (!mediaType?.schema) {
        throw new OpenAPIDiagnostic(responseContext, "content", "Successful response has no application/json schema");
      }
      const fields = await normalizeSchema(
        mediaType.schema,
        resolver,
        responseResolved.file,
        cloneContext(responseContext, { schemaPath: `${responseContext.schemaPath}.content.application/json.schema` })
      );
      const examples = await loadExamples(mediaType, responseResolved.file, responseContext);
      const pagePath = operation.externalDocs.url
        .replace(/^https:\/\/dev\.qweather\.com\/(?:en\/)?docs\/api\//, "")
        .replace(/^\/|\/$/g, "");

      operations.push({
        lang: source.lang,
        operationId: operation.operationId,
        summary: operation.summary || operation.operationId,
        description: operation.description || "",
        tags: operation.tags || [],
        aliases: operation["x-aliases"] || [],
        security: operation.security ?? document.security ?? [],
        servers: operation.servers ?? pathItem.servers ?? document.servers ?? [],
        pagePath,
        method: method.toUpperCase(),
        endpoint,
        parameters,
        requestExample: requestExample(method, endpoint, parameters),
        response: {
          status: responseStatus,
          description: responseResolved.value.description || "",
          examples,
          fallbackExample: fallbackExample(fields),
          fields
        }
      });
    }
  }

  return { version: 1, lang: source.lang, operations };
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  await fs.mkdir(outputDir, { recursive: true });
  for (const source of sources) {
    const model = await normalizeDocument(source);
    const output = `${JSON.stringify(model, null, 2)}\n`;
    await fs.writeFile(path.join(outputDir, `${source.lang}.json`), output);
    console.log(`${source.lang}: generated ${model.operations.length} operations`);
  }
}
