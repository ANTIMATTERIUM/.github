import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("public/releases/ANTIMATTERIUM_PUBLIC_CLOSURE.json", "utf8"));
const readme = fs.readFileSync("profile/README.md", "utf8");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

assert(receipt.surface === "ANTIMATTERIUM_ORG_PROFILE_PUBLIC_CLOSURE", "surface mismatch");
assert(receipt.organization === "ANTIMATTERIUM", "org mismatch");

assert(receipt.public_object.core_release.includes("v0.2.2-antimatterium-npm-021-publication-receipt"), "core release missing");
assert(receipt.public_object.npm_version === "0.2.1", "npm version missing");
assert(receipt.public_object.npm_install === "npm i @antimatterium/antimatterium", "npm install missing");
assert(receipt.public_object.public_site === "https://antimatterium.github.io/WWW/", "public site missing");

assert(receipt.public_recognition_chain.invocorder_profile.includes("v2.0.1-antimatterium-evidence-profile"), "INVOCORDER missing");
assert(receipt.public_recognition_chain.qvra_lab.includes("v0.1.0-qvra-antimatterium-lab-object"), "qvra lab missing");
assert(receipt.public_recognition_chain.qvra_index.includes("v0.1.0-qvra-index-antimatterium-runnable-object"), "qvra index missing");
assert(receipt.public_recognition_chain.qvra_launch.includes("v0.1.0-qvra-launch-antimatterium-runnable-object"), "qvra launch missing");
assert(receipt.public_recognition_chain.qvra_meta.includes("v0.1.0-qvra-meta-antimatterium-recognition"), "qvra meta missing");
assert(receipt.public_recognition_chain.qvra_profile.includes("v0.1.0-qvra-profile-antimatterium-recognition"), "qvra profile missing");

assert(receipt.privacy_boundary.contains_local_machine_paths === false, "local path leak");
assert(receipt.privacy_boundary.contains_private_folder_inventory === false, "private folder leak");
assert(receipt.privacy_boundary.contains_personal_stack_inventory === false, "personal stack inventory leak");
assert(receipt.privacy_boundary.contains_unrelated_namespace_inventory === false, "unrelated namespace leak");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.contains_physical_production_instructions === false, "physical instruction leak");
assert(receipt.claim_boundary.claims_unverified_external_adoption === false, "external adoption overclaim");

assert(receipt.completion.ANTIMATTERIUM_ORG_PROFILE_BOUND === true, "org profile not bound");
assert(receipt.completion.PRIVATE_INFORMATION_EXCLUDED === true, "private info not excluded");

assert(!readme.includes("/Users/"), "README leaks local macOS path");
assert(!readme.includes("Downloads/Apps"), "README leaks local folder path");
assert(!readme.includes("SOVEREIGN-STACK-INDEX"), "README includes wrong personal index");
assert(!readme.includes("VATFix"), "README includes unrelated namespace");
assert(!readme.includes("kaaffilm"), "README includes unrelated namespace");
assert(!readme.includes("TRUTHFRAMER"), "README includes unrelated namespace");
assert(!readme.includes("CINEMATICUM"), "README includes unrelated namespace");

console.log("ANTIMATTERIUM_ORG_PROFILE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_BOUND=true");
console.log("PRIVATE_INFORMATION_EXCLUDED=true");
console.log("NO_LOCAL_MACHINE_PATHS=true");
console.log("NO_PRIVATE_FOLDER_INVENTORY=true");
console.log("NO_PERSONAL_STACK_INVENTORY=true");
console.log("NO_UNRELATED_NAMESPACE_INVENTORY=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
