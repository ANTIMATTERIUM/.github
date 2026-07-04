import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Org profile Move 59 verifier receipt is stable", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE59_CONTROL_V0227_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 59);
  assert.equal(receipt.surface, "org_profile");
  assert.equal(receipt.surface_version, "0.0.36");
  assert.equal(receipt.control.version, "0.2.27");
  assert.equal(receipt.control.closure_id, "a2641f70f738ae3e5959f8f1c46f4c8328a938b59a8112afbbff6702758691ba");
  assert.equal(receipt.backlink_id, "a0fcf65320c2a2ef628f148d07fa4a44b3904557323df877f240c15988a18428");
});
