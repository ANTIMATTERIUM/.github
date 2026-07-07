import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Org profile Move 81 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-org-profile-move81-control-v0238-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE81_CONTROL_V0238_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE81_CONTROL_V0238_BACKLINK_ID=34cefba9a61620139341114138f03b0238ac973a770626f3b13cc1ee9f0e5091/);
});
