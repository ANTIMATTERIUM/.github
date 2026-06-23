import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const receipt = JSON.parse(fs.readFileSync("public/receipts/ANTIMATTERIUM_ORG_PROFILE_PUBLIC_CHAIN_OS_SURFACE.json", "utf8"));

assert(receipt.schema === "ANTIMATTERIUM_ORG_PROFILE_PUBLIC_CHAIN_OS_SURFACE", "schema mismatch");
assert(receipt.org_profile_version === "0.0.5", "profile version mismatch");
assert(receipt.release_chain.core_public_chain_os === "https://github.com/ANTIMATTERIUM/ANTIMATTERIUM/releases/tag/v0.2.11-antimatterium-public-chain-os", "core chain release mismatch");
assert(receipt.release_chain.www_public_chain_os_surface === "https://github.com/ANTIMATTERIUM/WWW/releases/tag/v0.1.7-antimatterium-www-public-chain-os-surface", "www chain surface mismatch");
assert(receipt.public_surfaces.npm_version === "0.2.2", "npm version mismatch");
assert(receipt.bound_identifiers.core_chain_os_id, "core chain os id missing");
assert(receipt.bound_identifiers.www_chain_os_surface_id, "www chain os surface id missing");
assert(receipt.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(receipt.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(receipt.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");

console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_CHAIN_OS_SURFACE_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CORE_CHAIN_OS_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_WWW_CHAIN_OS_SURFACE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_NPM_022_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_PUBLIC_IDENTIFIERS_BOUND=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
