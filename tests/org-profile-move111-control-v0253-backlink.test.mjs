import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 111 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move111-control-v0253-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE111_CONTROL_V0253_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /22bed1a287b290fc0219a40e0ac9aea349b9752b6210daa54064b467123ae2e3/);
});
