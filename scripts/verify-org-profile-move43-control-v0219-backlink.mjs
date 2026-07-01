import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const receipt = JSON.parse(fs.readFileSync(new URL('../public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE43_CONTROL_V0219_BACKLINK.json', import.meta.url), 'utf8'));
const pkg = JSON.parse(fs.readFileSync(new URL('../package.json', import.meta.url), 'utf8'));

test('Org profile binds CONTROL v0.2.19 public closure', () => {
  assert.equal(pkg.name, '@antimatterium/org-profile');
  assert.equal(pkg.version, '0.0.28');
  assert.equal(receipt.package_name, '@antimatterium/org-profile');
  assert.equal(receipt.package_version, '0.0.28');
  assert.equal(receipt.control_version, '0.2.19');
  assert.equal(receipt.control_tag, 'v0.2.19-antimatterium-control-move41-surface-closure');
  assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.19-antimatterium-control-move41-surface-closure');
  assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28525061736');
  assert.equal(receipt.control_closure_id, '9ae0cf352d7062356e02b964d517a9321f0c0743d2eba695fb0d6adc6a702f08');
  assert.equal(receipt.short_public_tag_required, true);
  assert.equal(receipt.no_local_root_required, true);
  assert.equal(receipt.no_current_production_claim, true);
  assert.equal(receipt.no_starship_claim, true);
  assert.equal(receipt.no_physical_production_instructions, true);
  assert.equal(receipt.backlink_id, '87276a767baa71208d5f2ad2623f306d007f90c4f83fa50725d31f321b32b2c8');
  assert.equal(receipt.ORG_PROFILE_MOVE43_CONTROL_V0219_BACKLINK_ID, '87276a767baa71208d5f2ad2623f306d007f90c4f83fa50725d31f321b32b2c8');

  console.log('ANTIMATTERIUM_ORG_PROFILE_MOVE43_CONTROL_V0219_BACKLINK_VERIFY_PASS=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0219_RELEASE_BOUND=true');
  console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0219_MEMBER=true');
  console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
  console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
  console.log('ORG_PROFILE_MOVE43_CONTROL_V0219_BACKLINK_ID=87276a767baa71208d5f2ad2623f306d007f90c4f83fa50725d31f321b32b2c8');
  console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
  console.log('NO_STARSHIP_CLAIM=true');
  console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
});
