import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const receipt = JSON.parse(readFileSync('public/receipts/ANTIMATTERIUM_ORG_PROFILE_MOVE67_CONTROL_V0231_BACKLINK.json', 'utf8'));

assert.equal(receipt.schema, 'antimatterium.surface.control_backlink.receipt.v1');
assert.equal(receipt.move, 67);
assert.equal(receipt.surface_key, 'ORG_PROFILE');
assert.equal(receipt.surface_display, 'Org profile');
assert.equal(receipt.surface_version, '0.0.40');
assert.equal(receipt.surface_tag, 'v0.0.40-antimatterium-org-profile-control-v0231-backlink');
assert.equal(receipt.surface_release, 'https://github.com/ANTIMATTERIUM/.github/releases/tag/v0.0.40-antimatterium-org-profile-control-v0231-backlink');
assert.equal(receipt.control_version, '0.2.31');
assert.equal(receipt.control_tag, 'v0.2.31-antimatterium-control-move65-surface-closure');
assert.equal(receipt.control_release, 'https://github.com/ANTIMATTERIUM/CONTROL/releases/tag/v0.2.31-antimatterium-control-move65-surface-closure');
assert.equal(receipt.control_ci_run, 'https://github.com/ANTIMATTERIUM/CONTROL/actions/runs/28746575495');
assert.equal(receipt.control_closure_id, 'ed2ac2e0ae68635986a07084622f3ae9a2fc746995b1aaf11846913bad8d9c8d');
assert.equal(receipt.binding.type, 'public_surface_backlink');
assert.equal(receipt.binding.source_move, 66);
assert.equal(receipt.binding.target_move, 67);
assert.equal(receipt.claims.short_public_tag_required, true);
assert.equal(receipt.claims.no_local_root_required, true);
assert.equal(receipt.claims.no_current_production_claim, true);
assert.equal(receipt.claims.no_starship_claim, true);
assert.equal(receipt.claims.no_physical_production_instructions, true);
assert.equal(receipt.backlink_id, 'ef20e78521439412e271acc4d126a2b1d30bda8b241e7f16484eeaea133b6bd2');

console.log('ANTIMATTERIUM_ORG_PROFILE_MOVE67_CONTROL_V0231_BACKLINK_VERIFY_PASS=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_CONTROL_V0231_MEMBER=true');
console.log('ANTIMATTERIUM_SHORT_PUBLIC_TAG_REQUIRED=true');
console.log('ANTIMATTERIUM_NO_LOCAL_ROOT_REQUIRED=true');
console.log('ANTIMATTERIUM_ORG_PROFILE_MOVE67_CONTROL_V0231_BACKLINK_ID=ef20e78521439412e271acc4d126a2b1d30bda8b241e7f16484eeaea133b6bd2');
console.log('NO_CURRENT_PRODUCTION_CLAIM=true');
console.log('NO_STARSHIP_CLAIM=true');
console.log('NO_PHYSICAL_PRODUCTION_INSTRUCTIONS=true');
