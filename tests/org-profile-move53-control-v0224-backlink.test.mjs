import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("Org profile binds CONTROL v0.2.24 public closure", () => {
  const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE53_CONTROL_V0224_BACKLINK.json", import.meta.url), "utf8"));
  assert.equal(receipt.move, 53);
  assert.equal(receipt.control_version, "0.2.24");
  assert.equal(receipt.control_release, "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.24-antimatterium-control-move51-surface-closure");
  assert.equal(receipt.control_closure_id, "fd4abe2ef7ad043517e9d065310b4ededeb625d4e0937e8b5d57eff7b85a2872");
  assert.equal(receipt.surface_public_tag, "v0.0.33-antimatterium-org-profile-control-v0224-backlink");
  assert.equal(receipt.backlink_id, "e587609ef1185666dd0074a06f877582ab7df86cd2a4daa3444184b4e647ed91");
});
