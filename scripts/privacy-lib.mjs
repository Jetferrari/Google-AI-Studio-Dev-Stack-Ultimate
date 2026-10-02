import fs from 'node:fs';
import path from 'node:path';
import { walkFiles } from './lib.mjs';

const TEXT_EXTS = new Set(['.md','.txt','.json','.yaml','.yml','.js','.mjs','.cjs','.ts','.tsx','.jsx','.html','.css','.toml','.ini','.conf','.xml','.csv']);
const HARD_FILENAMES = [/^\.env(?:\..+)?$/i];
const HARD_EXTS = new Set(['.pem','.p12','.pfx']);
const REVIEW_EXTS = new Set(['.har','.sqlite','.db','.dump','.pcap']);

function patterns() {
  return [
    ['private-key', /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g],
    ['github-token', /\bgh[pousr]_[A-Za-z0-9_]{20,}\b/g],
    ['openai-style-key', /\bsk-[A-Za-z0-9_-]{20,}\b/g],
    ['google-api-key', /\bAIza[0-9A-Za-z_-]{30,}\b/g],
    ['generic-secret-assignment', /\b(?:API_KEY|SECRET|TOKEN|PASSWORD)\s*=\s*["']?[^\s"'`]{8,}/gi],
    ['personal-windows-home', /\b[A-Za-z]:\\Users\\[^\\\s]+\\/g],
    ['personal-unix-home', /\/(?:Users|home)\/[^/\s]+\//g]
  ];
}

export function scanDirectory(root, { localDenylistPath = path.join(root, '.privacy-denylist.local') } = {}) {
  const blockers = [];
  const review = [];
  const deny = fs.existsSync(localDenylistPath)
    ? fs.readFileSync(localDenylistPath,'utf8').split(/\r?\n/).map(x=>x.trim()).filter(Boolean)
    : [];

  for (const file of walkFiles(root, () => true)) {
    const rel = path.relative(root, file);
    if (rel.split(path.sep).some(x => ['.git','node_modules'].includes(x))) continue;
    if (path.normalize(rel) === path.normalize('scripts/privacy-lib.mjs')) continue; // scanner contains detector examples
    const base = path.basename(file);
    const ext = path.extname(base).toLowerCase();
    if (HARD_FILENAMES.some(r=>r.test(base)) || HARD_EXTS.has(ext)) blockers.push({ file: rel, type: 'sensitive-file-type' });
    if (REVIEW_EXTS.has(ext)) review.push({ file: rel, type: 'high-risk-binary/data-artifact' });
    if (!TEXT_EXTS.has(ext) && base !== 'LICENSE') continue;
    const text = fs.readFileSync(file,'utf8');
    for (const [name,re] of patterns()) { re.lastIndex=0; if (re.test(text)) blockers.push({ file: rel, type:name }); }
    for (const term of deny) if (text.toLowerCase().includes(term.toLowerCase())) blockers.push({ file: rel, type:'local-denylist', term });
  }
  return { blockers, review, denylistEntries: deny.length };
}
