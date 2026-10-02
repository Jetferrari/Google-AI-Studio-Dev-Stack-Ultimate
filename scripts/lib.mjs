import fs from 'node:fs';
import path from 'node:path';

export function parseFrontmatter(text) {
  if (!text.startsWith('---\n')) return { data: {}, body: text };
  const end = text.indexOf('\n---\n', 4);
  if (end < 0) return { data: {}, body: text };
  const raw = text.slice(4, end).split(/\r?\n/);
  const data = {};
  for (const line of raw) {
    const m = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    data[m[1]] = value;
  }
  return { data, body: text.slice(end + 5) };
}

export function walkFiles(dir, predicate = () => true) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walkFiles(p, predicate));
    else if (predicate(p)) out.push(p);
  }
  return out;
}

export function wordCount(text) {
  const m = text.trim().match(/\S+/g);
  return m ? m.length : 0;
}

export function approxTokens(text) {
  // Deliberately labeled approximate. Real tokenization depends on model/tokenizer.
  return Math.ceil(text.length / 4);
}

export function extractReferencePointers(text) {
  const refs = new Set();
  for (const m of text.matchAll(/(?:`|\()references\/([A-Za-z0-9._/-]+\.md)(?:`|\))/g)) refs.add(m[1]);
  return [...refs];
}
