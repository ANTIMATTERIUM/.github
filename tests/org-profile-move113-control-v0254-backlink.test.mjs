import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 113 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move113-control-v0254-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /MOVE113_CONTROL_V0254_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /42a0e1c8e43944b904e21f71365e55365f270b62832999c8cb0e99242d71d6fa/);
});
