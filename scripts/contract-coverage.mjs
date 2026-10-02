import fs from 'node:fs';
import path from 'node:path';
import { parseFrontmatter } from './lib.mjs';

const skillRoot = path.resolve('.agents/skills');
const contractRoot = path.resolve('tests/contracts');
const required = new Set(['positive', 'boundary', 'fallback', 'adverse']);
let failed = false;
let total = 0;

for (const entry of fs.readdirSync(skillRoot, { withFileTypes: true }).filter(x => x.isDirectory()).sort((a,b)=>a.name.localeCompare(b.name))) {
  const skillFile = path.join(skillRoot, entry.name, 'SKILL.md');
  const { data } = parseFrontmatter(fs.readFileSync(skillFile, 'utf8'));
  if (data.origin !== 'OWN') continue;
  const dir = path.join(contractRoot, entry.name);
  const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter(x => x.endsWith('.md')) : [];
  const types = new Set();
  for (const file of files) {
    const text = fs.readFileSync(path.join(dir, file), 'utf8');
    const parsed = parseFrontmatter(text);
    if (parsed.data.skill !== entry.name) {
      console.error(`[FAIL] ${entry.name}/${file}: skill metadata mismatch`); failed = true;
    }
    if (parsed.data.case_type) types.add(parsed.data.case_type);
    if (!parsed.body.includes('## Expected') || !parsed.body.includes('## Fail if')) {
      console.error(`[FAIL] ${entry.name}/${file}: missing Expected/Fail if`); failed = true;
    }
  }
  const missing = [...required].filter(x => !types.has(x));
  if (files.length < 4 || missing.length) {
    console.error(`[FAIL] ${entry.name}: ${files.length} fixtures; missing types: ${missing.join(', ') || 'none'}`);
    failed = true;
  } else {
    console.log(`[OK] ${entry.name}: ${files.length} fixtures (${[...types].sort().join(', ')})`);
  }
  total += files.length;
}
if (failed) process.exit(1);
console.log(`[OK] contract coverage: ${total} fixtures`);
