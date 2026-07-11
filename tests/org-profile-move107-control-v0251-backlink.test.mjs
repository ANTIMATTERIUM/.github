import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 107 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move107-control-v0251-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE107_CONTROL_V0251_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /67c60e824889be73002b529048bb530363c0923004b4d3debf6db0518e9880ba/);
});
