import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Org profile binds CONTROL v0.2.2 rootless fanout backlink closure", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-org-profile-rootless-fanout-backlink-closure-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true/);
});
