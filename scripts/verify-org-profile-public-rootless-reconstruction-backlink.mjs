import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_ORG_PROFILE", "object mismatch");
assert(r.org_profile_version === "0.0.9", "version mismatch");
assert(r.control_public_rootless_reconstruction_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.0-antimatterium-control-public-rootless-reconstruction-index", "control rootless release mismatch");
assert(r.control_public_rootless_reconstruction_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28149722481", "control rootless ci run mismatch");
assert(r.bound_identifiers.public_rootless_reconstruction_index_id === "7cab442dcb14c223ffe740cd1c1c9c5f107e7bd6ee48957db775d493e93e5e8e", "rootless id mismatch");
assert(r.bound_identifiers.public_ecosystem_index_echo_closure_id === "57965b352d283bd06ff513e8d3e30cfa9578cedb4fb55eea5b2ce2962ae26172", "echo id mismatch");
assert(r.bound_identifiers.public_ecosystem_closure_index_id === "85f56c676d2c9bffff66cd59978b8bfcfffb6e8afae91258a71509f0531ba4ea", "ecosystem index id mismatch");
assert(r.bound_identifiers.prior_org_profile_public_ecosystem_index_backlink_id === "d6eb675cf08baa8af13652dce164b01b3d2ac5d46245e6767a7752162f8e5d43", "prior profile id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_NO_LOCAL_ROOT_REQUIRED_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_RELEASES_SUFFICIENT_BOUND=true");
console.log("ORG_PROFILE_PUBLIC_ROOTLESS_RECONSTRUCTION_BACKLINK_ID=" + r.org_profile_public_rootless_reconstruction_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
