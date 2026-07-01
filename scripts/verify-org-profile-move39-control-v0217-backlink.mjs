import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE39_CONTROL_V0217_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('Org profile binds CONTROL v0.2.17 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/org-profile');
  assert.equal(pkg.version, '0.0.26');
  assert.equal(receipt.package_name, '@antimatterium/org-profile');
  assert.equal(receipt.package_version, '0.0.26');
  assert.equal(receipt.control_version, '0.2.17');
  assert.equal(receipt.control_tag, 'v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.17-antimatterium-control-v0216-surface-backlink-closure');
  assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28520105839');
  assert.equal(receipt.control_closure_id, '7be5acda41a87a01a436239de422e56c6384746bb873ef3d521284ee9c46513e');
  assert.equal(receipt.control_long_closure_slug, 'rootless-fanout-backlink-closure-backpropagation-closure-fanout-backlink-closure-fanout-closure-backlink-closure-fanout-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure-backlink-closure');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, 'e83d51a84b4098da43fa5e7101e3795e610b59bec7ce9fd53f7d642118bda7e1');
  assert.equal(receipt.ORG_PROFILE_MOVE39_CONTROL_V0217_BACKLINK_ID, 'e83d51a84b4098da43fa5e7101e3795e610b59bec7ce9fd53f7d642118bda7e1');

  console.log('ANTIMATTERIUM_ORG_PROFILE_MOVE39_CONTROL_V0217_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0217_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0217_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('ORG_PROFILE_MOVE39_CONTROL_V0217_BACKLINK_ID=e83d51a84b4098da43fa5e7101e3795e610b59bec7ce9fd53f7d642118bda7e1');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
