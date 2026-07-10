import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 99 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move99-control-v0247-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE99_CONTROL_V0247_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE99_CONTROL_V0247_BACKLINK_ID=3aa39959e3a7b7e4d53ba8eae3d164d22532de1a892e8a5d28705476170d61b1/);
});
