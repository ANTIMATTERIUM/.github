import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";

test("org profile public chain OS surface binds Core and WWW chain OS", () => {
  const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_PUBLIC_CHAIN_OS_SURFACE.json", "utf8"));
  assert.equal(receipt.org_profile_version, "0.0.5");
  assert.ok(receipt.bound_identifiers.core_chain_os_id);
  assert.ok(receipt.bound_identifiers.www_chain_os_surface_id);
  assert.equal(receipt.public_surfaces.npm_version, "0.2.2");
  assert.equal(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM, true);
});
