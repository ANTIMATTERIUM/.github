import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 105 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move105-control-v0250-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE105_CONTROL_V0250_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /dffc4da67ad1c81c45dbf42d3c5828def70160784fd4febb203762f744d23220/);
});
