import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../public/receipts/ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('Org profile binds CONTROL v0.2.16 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/org-profile');
  assert.equal(pkg.version, '0.0.25');
  assert.equal(receipt.package_name, '@antimatterium/org-profile');
  assert.equal(receipt.package_version, '0.0.25');
  assert.equal(receipt.control_version, '0.2.16');
  assert.equal(receipt.control_tag, 'v0.2.16-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.16-antimatterium-control-rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure');
  assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28518517865');
  assert.equal(receipt.control_closure_id, 'e9f48278e811786b35f9939f982d502a7b0eacc4aff47e03e9257095190c6d26');
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, '6e5fcd8333be67c3a707210b384a9b78aac416f19d285879533f46e291248f27');
  assert.equal(receipt.ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_ID, '6e5fcd8333be67c3a707210b384a9b78aac416f19d285879533f46e291248f27');

  console.log('ANTIMATTERIUM_ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0216_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0216_MEMBER=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('ORG_PROFILE_ROOTLESS_FANOUT_BACKLINK_CLOSURE_BACKPROPAGATION_CLOSURE_FANOUT_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_FANOUT_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_CLOSURE_BACKLINK_ID=6e5fcd8333be67c3a707210b384a9b78aac416f19d285879533f46e291248f27');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
