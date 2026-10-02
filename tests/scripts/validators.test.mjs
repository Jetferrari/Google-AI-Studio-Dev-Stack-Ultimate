import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { inspectSkill } from '../../scripts/skill-quality.mjs';
import { scanDirectory } from '../../scripts/privacy-lib.mjs';

function tmp() { return fs.mkdtempSync(path.join(os.tmpdir(),'ai-stack-test-')); }

test('skill quality rejects missing required sections', () => {
  const dir=tmp();
  fs.writeFileSync(path.join(dir,'SKILL.md'),'---\nname: '+path.basename(dir)+'\ndescription: this description is intentionally long enough to pass the description length threshold for the test case\norigin: OWN\nlicense: MIT\n---\n\n# X\n');
  const r=inspectSkill(dir);
  assert.ok(r.issues.some(x=>x.includes('missing heading')));
});

test('privacy scanner detects a constructed API-like secret', () => {
  const dir=tmp();
  const key='AIza'+'A'.repeat(32);
  const label='API'+'_KEY';
  fs.writeFileSync(path.join(dir,'oops.txt'),`${label}=${key}\n`);
  const r=scanDirectory(dir);
  assert.ok(r.blockers.some(x=>x.file==='oops.txt'));
});

test('privacy scanner loads a private denylist without requiring tracked config', () => {
  const dir=tmp();
  fs.writeFileSync(path.join(dir,'.privacy-denylist.local'),'ConfidentialCodename\n');
  fs.writeFileSync(path.join(dir,'readme.md'),'mentions confidentialcodename here');
  const r=scanDirectory(dir);
  assert.equal(r.denylistEntries,1);
  assert.ok(r.blockers.some(x=>x.type==='local-denylist'));
});

test('privacy scanner flags env files even without a key pattern', () => {
  const dir=tmp();
  fs.writeFileSync(path.join(dir,'.env'),'PLACEHOLDER=example');
  const r=scanDirectory(dir);
  assert.ok(r.blockers.some(x=>x.type==='sensitive-file-type'));
});


test('privacy scanner flags high-risk data artifacts for manual review', () => {
  const dir=tmp();
  fs.writeFileSync(path.join(dir,'capture.har'),'{}');
  const r=scanDirectory(dir);
  assert.ok(r.review.some(x=>x.file==='capture.har'));
});

test('a repository skill has no structural issues under the quality inspector', () => {
  const repoSkill=path.resolve('.agents/skills/frontend-director');
  const r=inspectSkill(repoSkill);
  assert.deepEqual(r.issues,[]);
  assert.ok(r.pointers.length >= 1);
});
