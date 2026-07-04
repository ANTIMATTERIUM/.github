import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Org profile Move 63 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE63_CONTROL_V0229_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "org_profile");
  assert.equal(receipt.surface_version, "0.0.38");
  assert.equal(receipt.control.version, "0.2.29");
  assert.equal(receipt.control.closure_id, "cc3254bf684790e5b5e88b947b35ef1ff5796cba9dcf827234ec08114d40d67c");
  assert.equal(receipt.backlink_id, "f2119453983e2812b87c9b0821d8fd71ca728f8d1007039e83dd1fb5b20d51d4");
});
