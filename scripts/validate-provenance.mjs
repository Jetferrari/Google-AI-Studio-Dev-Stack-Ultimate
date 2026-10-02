import fs from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from './lib.mjs';

const root = path.resolve(process.argv[2] ?? '.agents/skills');
let failed = false;
let adapted = 0;
for (const entry of fs.readdirSync(root, { withFileTypes: true }).filter(x => x.isDirectory())) {
  const dir = path.join(root, entry.name);
  const skillPath = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(skillPath)) continue;
  const { data } = parseFrontmatter(fs.readFileSync(skillPath, 'utf8'));
  if (data.origin === 'ADAPTED') {
    adapted++;
    const prov = path.join(dir, 'PROVENANCE.md');
    if (!fs.existsSync(prov)) {
      console.error(`[FAIL] ${entry.name}: ADAPTED requires PROVENANCE.md`);
      failed = true;
      continue;
    }
    const text = fs.readFileSync(prov, 'utf8');
    for (const marker of ['Source', 'Revision', 'License', 'Local changes']) {
      if (!new RegExp(marker, 'i').test(text)) {
        console.error(`[FAIL] ${entry.name}: provenance missing ${marker}`);
        failed = true;
      }
    }
  }
}
if (!failed) console.log(`[OK] provenance policy (${adapted} adapted skills)`);
if (failed) process.exit(1);
