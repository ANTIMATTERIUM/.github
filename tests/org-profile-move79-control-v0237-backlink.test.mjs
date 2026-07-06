import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('Org profile Move 79 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, ['scripts/verify-org-profile-move79-control-v0237-backlink.mjs'], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE79_CONTROL_V0237_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE79_CONTROL_V0237_BACKLINK_ID=0fb8c55049f0017a7d9dee82bfaca9283ea3429bcf4c5a83ad6e5c916ebd9517/);
});
