import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_CONTROL_CI_EVIDENCE_BACKLINK.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_CONTROL_CI_EVIDENCE_BACKLINK", "schema mismatch");
assert(receipt.surface === "org_profile", "surface mismatch");
assert(receipt.surface_version === "0.0.6", "surface version mismatch");

assert(receipt.control_authority.repo === "https://github.com/ANTIMATTERIUM/CONTROL", "control repo mismatch");
assert(receipt.control_authority.release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.2-antimatterium-control-ci-evidence-seal", "control release mismatch");
assert(receipt.control_authority.prior_ci_gate_release === "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.1.1-antimatterium-control-public-ci-replay-gate", "prior control release mismatch");

assert(receipt.github_actions_evidence.verify_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28054724647", "verify run mismatch");
assert(receipt.github_actions_evidence.cold_replay_run === "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28054726218", "cold replay run mismatch");

assert(receipt.bound_identifiers.ci_evidence_seal_id === "402681ceb54a72fc8c6681e1f46840ad8426ca08dac660484cc3a92b86a212ee", "ci evidence seal mismatch");
assert(receipt.bound_identifiers.ci_replay_gate_id === "11ab5ba82c3333386871508827f12ab6c614c973934f99f3d878d3c2ebaba673", "ci replay gate mismatch");
assert(receipt.bound_identifiers.control_cold_replay_id === "d6d5816e7346b5e663a8c9d1cebff94853a6fcc9c756697d861271180be7de55", "control cold replay mismatch");
assert(receipt.bound_identifiers.root_controller_id === "d2813e2a241a8a95dc7790174ba4522f9c2a4e66face80bf76acaa4363575663", "root controller mismatch");
assert(receipt.bound_identifiers.core_chain_os_id === "d0f3271f3808297cc8459bc0e19f0df5b5bce60c32bad87c56fb96b7b72cb577", "core chain mismatch");
assert(receipt.bound_identifiers.www_chain_os_surface_id === "15f958d4cc1c6cc8bc279f4c77eb2e2a8fd387b2451c40415703f640d610b404", "www chain mismatch");
assert(receipt.bound_identifiers.profile_chain_os_surface_id === "13026b98a28d76d78d1ccdebe85013e0c9f87855fa59d27328dd298e3e4a2575", "profile chain mismatch");

for (const [key, value] of Object.entries(receipt.acceptance)) {
  assert(value === true, "acceptance not true: " + key);
}

assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(receipt.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_CI_EVIDENCE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CI_EVIDENCE_SEAL_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_VERIFY_RUN_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_COLD_REPLAY_RUN_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_BIDIRECTIONAL_PUBLIC_CHAIN_BOUND=true");
console.log("ORG_PROFILE_CONTROL_BACKLINK_ID=" + receipt.org_profile_control_backlink_id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
