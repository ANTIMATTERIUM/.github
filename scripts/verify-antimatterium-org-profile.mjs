import fs from "node:fs";

const receipt = JSON.parse(fs.readFileSync("public/releases/ANTIMATTERIUM_PUBLIC_CLOSURE.json", "utf8"));
const readme = fs.readFileSync("profile/README.md", "utf8");
const allPublicText = [
  readme,
  fs.readFileSync("public/releases/ANTIMATTERIUM_PUBLIC_CLOSURE.json", "utf8")
].join("\n");

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function token(parts) {
  return parts.join("");
}

const blocked = [
  token(["/U", "sers/"]),
  token(["Down", "loads", "/A", "pps"]),
  token(["SOVEREIGN", "-STACK", "-INDEX"]),
  token(["V", "AT", "Fix"]),
  token(["ka", "af", "film"]),
  token(["TRUTH", "FRAMER"]),
  token(["CINE", "MATICUM"]),
  token(["private", " folder"]),
  token(["personal", " stack", " inventory"])
];

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

assert(receipt.privacy_boundary.contains_local_machine_paths === false, "machine location leak");
assert(receipt.privacy_boundary.contains_private_folder_inventory === false, "non-public inventory leak");
assert(receipt.privacy_boundary.contains_personal_stack_inventory === false, "portfolio inventory leak");
assert(receipt.privacy_boundary.contains_unrelated_namespace_inventory === false, "unrelated org inventory leak");

assert(receipt.claim_boundary.claims_current_industrial_antimatter_production === false, "production overclaim");
assert(receipt.claim_boundary.claims_starship_readiness === false, "starship overclaim");
assert(receipt.claim_boundary.contains_physical_production_instructions === false, "instruction leak");
assert(receipt.claim_boundary.claims_unverified_external_adoption === false, "adoption overclaim");

assert(receipt.completion.ANTIMATTERIUM_ORG_PROFILE_BOUND === true, "org profile not bound");
assert(receipt.completion.PRIVATE_INFORMATION_EXCLUDED === true, "non-public data not excluded");

for (const value of blocked) {
  assert(!allPublicText.includes(value), `blocked public token present`);
}

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
