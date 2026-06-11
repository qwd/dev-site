# OpenAPI intermediate model

`generate.mjs` validates the Chinese and English OpenAPI documents, then
normalizes them into ignored JSON files under `assets/openapi/generated/`.
Hugo reads only this intermediate model; it does not resolve OpenAPI references.

Ordered OpenAPI collections are represented as arrays. In particular, response
fields use this recursive shape:

```json
{
  "name": "now",
  "type": "object",
  "description": "Current weather data.",
  "children": [],
  "allOf": [],
  "oneOf": [],
  "anyOf": [],
  "recursiveRef": null,
  "additionalProperties": null
}
```

Composition rules:

- `allOf` members contribute ordered fields and remain visible in `allOf`.
- `oneOf` and `anyOf` alternatives remain separate; the generator never picks
  an arbitrary alternative.
- circular references produce `recursiveRef` instead of recursing forever.
- unsupported or ambiguous constructs fail with language, operation ID,
  response status, schema path, and keyword context.

Compatibility policy:

- Preserved and rendered: local/internal references, local external references,
  nested references, circular-reference markers, `allOf`, `oneOf`, `anyOf`,
  `not`, discriminator metadata, nullable/readOnly/writeOnly/deprecated flags,
  additional properties, and arrays containing composed schemas.
- Preserved as intermediate metadata: schema constraints, extensions, security,
  servers, parameter examples, and multiple response examples.
- Explicit build failures until implemented: remote HTTP references/examples,
  request bodies, callbacks, header/cookie parameters, custom parameter
  serialization, external parameter examples, response headers, and response
  links. These failures are intentional so valid OpenAPI features never
  silently disappear from the generated documentation.

Run:

```sh
npm run openapi:test
npm run openapi:generate
npm run build
```

For local development, run:

```sh
npm run dev
```

This generates the intermediate model once, then runs the OpenAPI watcher and
Hugo server together. Changes to either OpenAPI YAML document or any external
response example JSON regenerate the ignored intermediate files; Hugo detects
those changes and reloads the affected generated pages.

The local preview is available at `http://localhost:1313/`. Stop both processes
with `Ctrl+C`.
