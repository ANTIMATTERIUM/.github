import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-org-profile-move73-control-v0234-backlink.mjs');

test('Org profile Move 73 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE73_CONTROL_V0234_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE73_CONTROL_V0234_BACKLINK_ID=72fb0dd95579e32ff1143d2f0e2df6fd3aff5f9c50e35b4dad11763dda37f2c6/);
});
