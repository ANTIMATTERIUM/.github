import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_ORG_PROFILE", "object mismatch");
assert(r.org_profile_version === "0.0.12", "version mismatch");
assert(r.binds_control.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.3-antimatterium-control-rootless-fanout-backpropagation-echo-closure", "control v023 release mismatch");
assert(r.binds_control.ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28267965467", "control v023 ci mismatch");
assert(r.binds_control.rootless_fanout_backpropagation_echo_closure_id === "01ac56b5b2f42077580d464d5053ea3ae5860f3a2f05a46d68ca1c1805215649", "v023 echo closure id mismatch");
assert(r.inherited.org_profile_rootless_fanout_backlink_closure_backlink_id === "f598566988b058e7ad4eba1c5fce7b4cdc8518f53ecbee56c840cdfb93345feb", "prior org profile id mismatch");

for (const [k, v] of Object.entries(r.acceptance)) assert(v === true, "acceptance not true: " + k);
for (const [k, v] of Object.entries(r.boundaries)) assert(v === true, "boundary not true: " + k);

console.log("ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_V023_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_MEMBER=true");
console.log("ORG_PROFILE_ROOTLESS_FANOUT_BACKPROPAGATION_ECHO_BACKLINK_ID=" + r.org_profile_rootless_fanout_backpropagation_echo_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
