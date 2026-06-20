import fs from "node:fs";

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const surface = JSON.parse(fs.readFileSync("public/ANTIMATTERIUM_ORG_PROFILE_EXTERNAL_REPLAY_SURFACE.json", "utf8"));
const readme = fs.readFileSync("profile/README.md", "utf8");

assert(surface.object === "ANTIMATTERIUM_ORG_PROFILE", "profile object mismatch");
assert(surface.surface === "github_org_profile", "profile surface mismatch");
assert(surface.release === "v0.0.3-antimatterium-org-profile-external-replay-surface", "profile release mismatch");

assert(surface.core.tag === "v0.2.7-antimatterium-external-replay-runner", "core tag mismatch");
assert(surface.www.tag === "v0.1.5-antimatterium-www-external-replay-surface", "www tag mismatch");
assert(surface.npm.version === "0.2.1", "npm version mismatch");

assert(surface.core.control_plane_digest, "control digest missing");
assert(surface.core.runtime_event_id, "runtime event id missing");
assert(surface.core.replay_id, "replay id missing");

assert(surface.release_chain.includes("v0.2.7-antimatterium-external-replay-runner"), "core v0.2.7 missing");
assert(surface.release_chain.includes("v0.2.6-antimatterium-runtime-kernel"), "core v0.2.6 missing");
assert(surface.release_chain.includes("v0.2.5-antimatterium-control-plane"), "core v0.2.5 missing");
assert(surface.release_chain.includes("v0.1.5-antimatterium-www-external-replay-surface"), "www v0.1.5 missing");

assert(surface.boundaries.NO_CURRENT_PRODUCTION_CLAIM === true, "current production boundary missing");
assert(surface.boundaries.NO_STARSHIP_CLAIM === true, "starship boundary missing");
assert(surface.boundaries.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS === true, "physical instruction boundary missing");
assert(surface.boundaries.NON_PUBLIC_INFORMATION_EXCLUDED === true, "non-public exclusion missing");

assert(readme.includes("ANTIMATTERIUM_ORG_PROFILE_V003_EXTERNAL_REPLAY_START"), "profile marker missing");
assert(readme.includes(surface.core.control_plane_digest), "control digest not in profile");
assert(readme.includes(surface.core.runtime_event_id), "runtime event id not in profile");
assert(readme.includes(surface.core.replay_id), "replay id not in profile");
assert(readme.includes(surface.www.site), "site not in profile");
assert(readme.includes(surface.npm.package), "npm package not in profile");

console.log("ANTIMATTERIUM_ORG_PROFILE_V003_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CORE_V027_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_WWW_V015_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_DIGEST_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_RUNTIME_EVENT_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_REPLAY_ID_BOUND=true");
console.log("NON_PUBLIC_INFORMATION_EXCLUDED=true");
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
