import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const r = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_PUBLIC_STRANGER_CI_BACKLINK.json", "utf8"));

assert(r.schema === "ANTIMATTERIUM_ORG_PROFILE_PUBLIC_STRANGER_CI_BACKLINK", "schema mismatch");
assert(r.object === "ANTIMATTERIUM_ORG_PROFILE", "object mismatch");
assert(r.org_profile_version === "0.0.7", "version mismatch");
assert(r.control_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.6-antimatterium-control-public-stranger-ci", "control release mismatch");
assert(r.public_stranger_ci_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28130879044", "public stranger ci run mismatch");

assert(r.bound_identifiers.public_stranger_ci_id === "6130ca7749ec3f79bdde19e47374f7dfb6d7ae5334d025e996a8d7593bcaa4ca", "public stranger ci id mismatch");
assert(r.bound_identifiers.public_release_matrix_id === "c062a81788d930fe0924526b94d5b6dbadc027337d2ab416c86710771d8c27c1", "matrix id mismatch");
assert(r.bound_identifiers.stranger_final_audit_id === "95b03e5adbaad27eafa524a020c83de0bf590d7bf9a9a92e89b967b48a0ff9e7", "audit id mismatch");
assert(r.bound_identifiers.bidirectional_public_closure_id === "1c4226ae9e5ed6b50d3f2ec97b0e43ca19f1800949bdca8f745ae5845e5d851e", "closure id mismatch");
assert(r.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence id mismatch");
assert(r.bound_identifiers.prior_org_profile_control_backlink_id === "716789cafa328f3dafa27115ad2e81bd512d16a237c05cd8a52a0d1d3650d084", "prior backlink id mismatch");

for (const [key, value] of Object.entries(r.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(r.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(r.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(r.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(r.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_STRANGER_CI_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_STRANGER_CI_RUN_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_V016_RELEASE_BOUND=true");
console.log("ORG_PROFILE_PUBLIC_STRANGER_CI_BACKLINK_ID=" + r.org_profile_public_stranger_ci_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
