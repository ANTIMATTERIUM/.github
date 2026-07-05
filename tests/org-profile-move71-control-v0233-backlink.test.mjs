import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const verifier = resolve(here, '../scripts/verify-org-profile-move71-control-v0233-backlink.mjs');

test('Org profile Move 71 verifier receipt is stable', () => {
  const result = spawnSync(process.execPath, [verifier], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE71_CONTROL_V0233_BACKLINK_VERIFY_PASS=true/);
  assert.match(result.stdout, /ANTIMATTERIUM_ORG_PROFILE_MOVE71_CONTROL_V0233_BACKLINK_ID=da69ca9e87525e415cf2f48eebfc35bda2d480669bce7aaa18006581836d5e01/);
});
