import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";

test("Org profile Move 115 verifier receipt is stable", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-move115-control-v0255-backlink.mjs"], { encoding: "utf8" });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE115_CONTROL_V0255_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /10252b4d19d3477e3ff415f43a942ec764c78d1da0775f643e55327d0b46ec52/);
});
