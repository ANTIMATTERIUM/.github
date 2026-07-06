import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Org profile Move 75 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-org-profile-move75-control-v0235-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE75_CONTROL_V0235_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE75_CONTROL_V0235_BACKLINK_ID=06acd3d0c1f4ef483dcdfe90697f8189203c8c5156b1e57a81b7fe5649c629a9/);
});
