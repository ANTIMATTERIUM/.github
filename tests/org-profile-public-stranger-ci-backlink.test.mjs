import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

test("Org profile binds public stranger CI proof", () => {
  const out = execFileSync(process.execPath, ["scripts/verify-org-profile-public-stranger-ci-backlink.mjs"], { encoding: "utf8" });
  assert.match(out, /ANTIMATTERIUM_ORG_PROFILE_PUBLIC_STRANGER_CI_BACKLINK_VERIFY_PASS=true/);
  assert.match(out, /ANTIMATTERIUM_ORG_PROFILE_CONTROL_V016_RELEASE_BOUND=true/);
});
