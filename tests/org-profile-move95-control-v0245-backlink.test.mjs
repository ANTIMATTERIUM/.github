import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Org profile Move 95 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-org-profile-move95-control-v0245-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE95_CONTROL_V0245_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE95_CONTROL_V0245_BACKLINK_ID=34878b717c3ccdd246a25eb829c85a87ac66af56ad23ef507aa961e7c7b94848/);
});
