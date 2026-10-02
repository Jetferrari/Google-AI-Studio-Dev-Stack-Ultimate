import fs from 'node:fs';
import path from 'node:path';
import { inspectSkill } from './skill-quality.mjs';

const root = path.resolve(process.argv[2] ?? '.agents/skills');
const dirs = fs.readdirSync(root, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => path.join(root, d.name)).sort();
let failed = false;
for (const dir of dirs) {
  const r = inspectSkill(dir);
  if (r.issues.length) {
    failed = true;
    console.error(`[FAIL] ${path.basename(dir)}`);
    for (const issue of r.issues) console.error(`  - ${issue}`);
  } else {
    console.log(`[OK] ${path.basename(dir)} (${r.completionCount} completion criteria, ${r.pointers.length} disclosed refs)`);
  }
}
if (failed) process.exit(1);
console.log(`[OK] ${dirs.length} skills satisfy structural quality standard`);
