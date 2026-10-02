import fs from 'node:fs';
import path from 'node:path';
import { parseFrontmatter, extractReferencePointers } from './lib.mjs';

export const REQUIRED_HEADINGS = ['## Use when', '## Skip when', '## Output', '## Boundaries'];

export function inspectSkill(skillDir) {
  const file = path.join(skillDir, 'SKILL.md');
  const issues = [];
  if (!fs.existsSync(file)) return { issues: ['missing SKILL.md'] };
  const text = fs.readFileSync(file, 'utf8');
  const { data, body } = parseFrontmatter(text);
  const dirName = path.basename(skillDir);

  if (data.name !== dirName) issues.push(`frontmatter name mismatch: ${data.name ?? 'missing'}`);
  if (!data.description || data.description.length < 80) issues.push('description is missing or too weak (<80 chars)');
  if (!['OWN', 'ADAPTED'].includes(data.origin)) issues.push('origin must be OWN or ADAPTED');
  if (!data.license) issues.push('license missing');

  for (const h of REQUIRED_HEADINGS) if (!body.includes(h)) issues.push(`missing heading ${h}`);

  const completionCount = (body.match(/\*\*Complete when:\*\*|\*\*Done when:\*\*|\*\*Exit when:\*\*/g) || []).length;
  if (completionCount < 2) issues.push('fewer than two observable completion criteria');

  const pointers = extractReferencePointers(body);
  for (const rel of pointers) {
    const target = path.join(skillDir, 'references', rel);
    if (!fs.existsSync(target)) issues.push(`broken reference pointer: references/${rel}`);
  }

  return { file, text, data, body, pointers, completionCount, issues };
}
