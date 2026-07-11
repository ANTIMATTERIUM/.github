import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 103 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move103-control-v0249-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /VERIFY_PASS=true/);
  assert.match(result.stdout, /9138f0c926065906b07dec873f74ee00bd5c787e5cfbd0ffaaec104814bf565f/);
});
