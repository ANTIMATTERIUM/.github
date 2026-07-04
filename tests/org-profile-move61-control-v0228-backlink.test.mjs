import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Org profile Move 61 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE61_CONTROL_V0228_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 61);
  assert.equal(receipt.surface.version, "0.0.37");
  assert.equal(receipt.control.version, "0.2.28");
  assert.equal(receipt.control.closure_id, "0baab5144c52e311f9f2c75b41198fd36c5ea512a861be374cddc8452f378671");
  assert.equal(receipt.backlink_id, "2c351b5159bd5bcd1f5d3180ef51ec1ae06457978690061755729c748337bbe8");
});
