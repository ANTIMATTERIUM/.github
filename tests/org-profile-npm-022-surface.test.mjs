import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("org profile npm 0.2.2 surface binds core and WWW surfaces", () => {
const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_NPM_022_PUBLICATION_SURFACE.json", "utf8"));

assert.equal(receipt.org_profile_version, "0.0.4");
assert.equal(receipt.public_surfaces.npm_version, "0.2.2");
assert.equal(receipt.bound_identifiers.www_surface_receipt_id, "652a71c7a591d9c99e5781d154f5d3ff7fd5a78ed6d4529e220f50c902adf321");
assert.equal(receipt.bound_identifiers.npm_receipt_id, "780244fd953ed99fb20cd7cebade4c73b3dc5ade4f070bb37753281c5ca2e7aa");
assert.equal(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM, true);
assert.equal(receipt.boundaries.NO_STARSHIP_CLAIM, true);
assert.equal(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS, true);
});
