import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 109 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move109-control-v0252-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /7e13161fecd4f3f64332e96aa1efd73704d5b4fdfb85b5f2083837b65da180ad/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE109_CONTROL_V0252_BACKLINK_VERIFY_PASS=true/);
});
