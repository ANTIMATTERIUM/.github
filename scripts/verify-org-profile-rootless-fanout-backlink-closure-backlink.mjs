import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_ORG_PROFILE", "object mismatch");
assert(r.org_profile_version === "0.0.11", "version mismatch");
assert(r.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.2-antimatterium-control-rootless-fanout-backlink-closure", "control release mismatch");
assert(r.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28265584824", "control ci mismatch");
assert(r.binds_control.rootless_fanout_backlink_closure_id === "9d411e38f3dd5a7f97bd33e4d8955a4646c6bcd346ffed2c97f6176b32d17922", "closure id mismatch");
assert(r.inherited.org_profile_rootless_fanout_echo_backlink_id === "ef72ad681fa8c3d050f238d9976e637902277ed3b54daa6df3f7f6b573fd82e3", "prior org profile id mismatch");

for (const [k, v] of Object.entries(r.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(r.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_V022_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKPROPAGATION_MEMBER=true");
console.log("ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=" + r.org_profile_rootless_fanout_backlink_closure_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
