import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import test from "node:test";

test("Org profile binds CONTROL v0.2.8 rootless fanout backlink closure", () => {
  const result = spawnSync(process.execPath, ["scripts/verify-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-backlink.mjs"], {
    cwd: process.cwd(),
    encoding: "utf8"
  });

  assert.equal(result.status, 0, result.stderr);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=21cbb4667e5e883e9b66a60b158fb6d7f65a42d566836e27d14ff8e2181081dc/);
});
