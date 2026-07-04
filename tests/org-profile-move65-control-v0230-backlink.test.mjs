import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Org profile Move 65 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE65_CONTROL_V0230_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 63);
  assert.equal(receipt.surface_key, "org_profile");
  assert.equal(receipt.surface_version, "0.0.39");
  assert.equal(receipt.control.version, "0.2.30");
  assert.equal(receipt.control.closure_id, "f36f9955746671dcb6a799939c27c6b579dd10be6dc939714feb06d5872a27ea");
  assert.equal(receipt.backlink_id, "d71a04c6391e04b0674d3cdc78955255611b11ee85ebdf8bc34ef1b4b712adf3");
});
