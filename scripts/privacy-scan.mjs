import path from 'node:path';
import { scanDirectory } from './privacy-lib.mjs';

const root = path.resolve(process.argv[2] ?? '.');
const r = scanDirectory(root);
if (r.review.length) {
  console.warn('Review-needed artifact types:');
  for (const x of r.review) console.warn(`- ${x.file}: ${x.type}`);
}
if (r.blockers.length) {
  console.error('Privacy scan found potential blockers:');
  for (const x of r.blockers) console.error(`- ${x.file}: ${x.type}${x.term ? ` (${x.term})` : ''}`);
  process.exit(1);
}
console.log(`[OK] privacy scan (${r.denylistEntries} private denylist entries loaded; ${r.review.length} review-needed artifacts)`);
