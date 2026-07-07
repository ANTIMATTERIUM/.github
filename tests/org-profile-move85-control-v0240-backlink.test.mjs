import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Org profile Move 85 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-org-profile-move85-control-v0240-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE85_CONTROL_V0240_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE85_CONTROL_V0240_BACKLINK_ID=ef767654bc0f6b7282a8367af9a048dea131d12247c15ea39edc283631bbed07/);
});
