import fs from "node:fs";
import crypto from "node:crypto";

const receiptPath = "public/receipts/ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK.json";
const packagePath = "package.json";

function fail(message) {
  console.error(message);
  process.exit(1);
}

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  }
  return value;
}

function expectedId(payload) {
  const clone = { ...payload };
  delete clone.id;
  return crypto.createHash("sha256").update(JSON.stringify(stable(clone))).digest("hex");
}

const receipt = JSON.parse(fs.readFileSync(receiptPath, "utf8"));
const pkg = JSON.parse(fs.readFileSync(packagePath, "utf8"));

if (pkg.name !== "@antimatterium/org-profile") fail("PACKAGE_NAME_MISMATCH");
if (pkg.version !== "0.0.17") fail("PACKAGE_VERSION_MISMATCH");
if (receipt.package !== "@antimatterium/org-profile") fail("RECEIPT_PACKAGE_MISMATCH");
if (receipt.package_version !== "0.0.17") fail("RECEIPT_PACKAGE_VERSION_MISMATCH");
if (receipt.surface !== "org_profile") fail("SURFACE_KIND_MISMATCH");
if (receipt.control_release !== "https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.8-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure") fail("CONTROL_RELEASE_MISMATCH");
if (receipt.control_ci_run !== "https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28334484888") fail("CONTROL_CI_RUN_MISMATCH");
if (receipt.control_closure_id !== "be4ae8df12eb897733590e1732b9e539447cb16e2b1de6018f62c4d41e4cd3ff") fail("CONTROL_CLOSURE_ID_MISMATCH");
if (receipt.previous_surface_release !== "https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.16-antimatterium-org-profile-rootless-fanout-backlink-closure-backpropagation-closure-fanout-closure-backlink") fail("PREVIOUS_SURFACE_RELEASE_MISMATCH");
if (receipt.previous_surface_backlink_id !== "03e405c1d7d240f63225dfb09e1c27e8c35959e1ccc3e86cc1db269aabab10cd") fail("PREVIOUS_SURFACE_BACKLINK_ID_MISMATCH");
if (receipt.binding !== "rootless_fanout_backlink_closure_backpropagation_closure_fanout_backlink_closure_backlink") fail("BINDING_MISMATCH");
if (receipt.no_local_root_required !== true) fail("NO_LOCAL_ROOT_REQUIRED_MISMATCH");
if (!receipt.boundary || receipt.boundary.NO_CURRENT_PRODUCTION_CLAIM !== true) fail("NO_CURRENT_PRODUCTION_CLAIM_MISSING");
if (receipt.boundary.NO_STARSHIP_CLAIM !== true) fail("NO_STARSHIP_CLAIM_MISSING");
if (receipt.boundary.NO_PHYSICAL_PRODUCTION_INSTRUCTIONS !== true) fail("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS_MISSING");

const computed = expectedId(receipt);
if (receipt.id !== computed) fail("RECEIPT_ID_MISMATCH");

console.log("ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_CONTROL_V028_RELEASE_BOUND=true");
console.log("ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_MEMBER=true");
console.log("ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true");
console.log("ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_BACKLINK_ID=" + receipt.id);
console.log("NO_CURRENT_PRODUCTION_CLAIM=true");
console.log("NO_STARSHIP_CLAIM=true");
console.log("NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true");
