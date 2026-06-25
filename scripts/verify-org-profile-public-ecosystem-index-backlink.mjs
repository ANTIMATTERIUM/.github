import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ECOSYSTEM_INDEX_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ECOSYSTEM_INDEX_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_ORG_PROFILE", "object mismatch");
assert(r.org_profile_version === "0.0.8", "version mismatch");
assert(r.control_public_ecosystem_index_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.8-antimatterium-control-public-ecosystem-index", "control ecosystem release mismatch");
assert(r.control_public_ecosystem_index_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28148611545", "control ecosystem ci run mismatch");
assert(r.bound_identifiers.public_ecosystem_closure_index_id === "85f56c676d2c9bffff66cd59978b8bfcfffb6e8afae91258a71509f0531ba4ea", "ecosystem index id mismatch");
assert(r.bound_identifiers.second_order_public_stranger_ci_closure_id === "16b259a7d2eb063a5a3c7b6e072c7cbed22f59b9642960f154d099581f157ee8", "second-order id mismatch");
assert(r.bound_identifiers.public_stranger_ci_id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");
assert(r.bound_identifiers.prior_org_profile_public_stranger_ci_backlink_id === "7e79534e6263db41aea2bfe96720a87a68aac3008f596e3db1f19dd558ecccc5", "prior profile backlink id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) assert(value === true, "acceptance not true: " + key);

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ECOSYSTEM_INDEX_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ECOSYSTEM_INDEX_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_ECOSYSTEM_GRAPH_MEMBER=true");
console.log("ORG_PROFILE_PUBLIC_ECOSYSTEM_INDEX_BACKLINK_ID=" + r.org_profile_public_ecosystem_index_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
