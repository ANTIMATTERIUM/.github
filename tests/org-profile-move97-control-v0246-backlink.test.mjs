import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 97 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move97-control-v0246-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE97_CONTROL_V0246_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE97_CONTROL_V0246_BACKLINK_ID=ff1268359260e2e4e336eb5f26f861bd83446179b9ab68a8c5134ce37d3e27ce/);
});
