import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("ORG PROFILE v0.0.15 binds CONTROL v0.2.6 rootless fanout backlink closure backpropagation closure", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_BACKLINK_ID=/);
});
