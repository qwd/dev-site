import assert from "node:assert/strict";
import { normalizeDocument } from "./generate.mjs";

const model = await normalizeDocument({
  lang: "fixture",
  path: "scripts/openapi/fixtures/compatibility.yml"
});
const fields = model.operations[0].response.fields.children;
const byName = Object.fromEntries(fields.map((field) => [field.name, field]));

assert.deepEqual(fields.map((field) => field.name), [
  "all",
  "one",
  "any",
  "arrayChoice",
  "map",
  "external",
  "constrained",
  "secret",
  "discriminated",
  "recursive"
]);
assert.equal(byName.all.allOf.length, 2);
assert.deepEqual(byName.all.allOf[0].children.map((field) => field.name), ["first"]);
assert.deepEqual(byName.all.allOf[1].children.map((field) => field.name), ["second"]);
assert.equal(byName.one.oneOf.length, 2);
assert.equal(byName.any.anyOf.length, 2);
assert.equal(byName.arrayChoice.items.oneOf.length, 2);
assert.equal(byName.map.additionalProperties.type, "string");
assert.deepEqual(byName.external.children.map((field) => field.name), ["externalFirst", "externalSecond"]);
assert.equal(byName.constrained.nullable, true);
assert.equal(byName.constrained.readOnly, true);
assert.equal(byName.constrained.deprecated, true);
assert.ok(byName.constrained.not);
assert.equal(byName.secret.writeOnly, true);
assert.equal(byName.discriminated.discriminator.propertyName, "kind");
assert.equal(byName.discriminated.oneOf.length, 2);
assert.equal(byName.recursive.recursiveRef, "#/components/schemas/Fixture");

await assert.rejects(
  normalizeDocument({
    lang: "fixture",
    path: "scripts/openapi/fixtures/unsupported-request-body.yml"
  }),
  (error) => [
    "language=fixture",
    "operationId=postUnsupportedFixture",
    "schema=paths./fixture.post",
    "keyword=requestBody"
  ].every((part) => error.message.includes(part))
);

console.log("OpenAPI compatibility fixture normalizes without losing ordered composition data");
