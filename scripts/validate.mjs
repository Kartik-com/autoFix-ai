import { readFileSync, statSync } from 'node:fs';

const requiredFiles = [
  'app/page.tsx',
  'app/layout.tsx',
  'app/globals.css',
  'components/score-card.tsx',
  'lib/demo-data.ts',
  'backend/autofix/main.py',
  'docs/ARCHITECTURE.md',
];

for (const file of requiredFiles) {
  statSync(file);
}

const page = readFileSync('app/page.tsx', 'utf8');
const backend = readFileSync('backend/autofix/main.py', 'utf8');

const expectations = [
  ['GPT-5.6 + Codex positioning', page.includes('GPT-5.6 + Codex')],
  ['Analyze Repository CTA', page.includes('Analyze Repository')],
  ['Frontend backend fetch', readFileSync('scripts/serve.mjs', 'utf8').includes("fetch('http://127.0.0.1:8000/analyze'")],
  ['AI reasoning panel', page.includes('AI reasoning panel')],
  ['Permission-gated backend', backend.includes('Repository authorization is required before analysis')],
  ['Analyze endpoint', backend.includes('@app.post("/analyze"')],
];

const failures = expectations.filter(([, passed]) => !passed).map(([label]) => label);
if (failures.length > 0) {
  console.error(`Validation failed: ${failures.join(', ')}`);
  process.exit(1);
}

console.log('AutoFix AI scaffold validation passed.');
