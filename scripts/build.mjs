import { mkdirSync, copyFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import './validate.mjs';

mkdirSync('dist', { recursive: true });
copyFileSync('README.md', join('dist', 'README.md'));
writeFileSync(join('dist', 'build-manifest.json'), JSON.stringify({
  app: 'AutoFix AI',
  build: 'static-demo-artifact',
  generatedAt: new Date().toISOString(),
  checks: ['frontend scaffold validation', 'backend source presence', 'documentation presence']
}, null, 2));
console.log('Build artifact generated in dist/.');
