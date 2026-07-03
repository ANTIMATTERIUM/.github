import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import test from "node:test";

const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
const receipt = JSON.parse(readFileSync(new URL("../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE51_CONTROL_V0223_BACKLINK.json", import.meta.url), "utf8"));

const expected = {
  packageVersion: "0.0.32",
  controlVersion: "0.2.23",
  controlRelease: "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.23-antimatterium-control-move49-surface-closure",
  controlCiRun: "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28641499317",
  controlClosureId: "35f989768e72c5d856cc79bf1d84dac2c950ffd2552c81133f470637d441dd0e",
  surfacePublicTag: "v0.0.32-antimatterium-org-profile-control-v0223-backlink",
  backlinkId: "864c8239ea2c14446bbe81f14c89170ac8891134e12e593a47968073407af826"
};

function canonicalHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

test("Org profile binds CONTROL v0.2.23 public closure", () => {
  assert.equal(pkg.version, expected.packageVersion);
  assert.equal(receipt.schema, "antimatterium.public_surface_control_backlink_receipt.v1");
  assert.equal(receipt.move, 51);
  assert.equal(receipt.surface, "ORG_PROFILE");
  assert.equal(receipt.package_name, "@antimatterium/org-profile");
  assert.equal(receipt.package_version, expected.packageVersion);
  assert.equal(receipt.control_version, expected.controlVersion);
  assert.equal(receipt.control_release, expected.controlRelease);
  assert.equal(receipt.control_ci_run, expected.controlCiRun);
  assert.equal(receipt.control_closure_id, expected.controlClosureId);
  assert.equal(receipt.surface_public_tag, expected.surfacePublicTag);
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.safety.no_current_production_claim, true);
  assert.equal(receipt.safety.no_starship_claim, true);
  assert.equal(receipt.safety.no_physical_production_instructions, true);

  const { backlink_id, ...payload } = receipt;
  assert.equal(backlink_id, expected.backlinkId);
  assert.equal(canonicalHash(payload), expected.backlinkId);

  console.log("ANTIMATTERIUM_ORG_PROFILE_MOVE51_CONTROL_V0223_BACKLINK_VERIFY_PASS=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0223_RELEASE_BOUND=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0223_MEMBER=true");
  console.log("ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true");
  console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
  console.log("ANTIMATTERIUM_ORG_PROFILE_MOVE51_CONTROL_V0223_BACKLINK_ID=" + backlink_id);
  console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
  console.log("NO_STARSHIP_CLAIM=true");
  console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
});
