export const agents = [
  { name: 'Repository Intelligence', score: 94, status: 'Mapped Next.js + FastAPI architecture', accent: 'from-cyan-400 to-blue-500' },
  { name: 'Debug', score: 88, status: 'Found dependency and type risks', accent: 'from-violet-400 to-fuchsia-500' },
  { name: 'Security', score: 91, status: 'Authorization checks enabled before scans', accent: 'from-emerald-400 to-teal-500' },
  { name: 'Performance', score: 86, status: 'Detected slow API and duplicate work', accent: 'from-amber-300 to-orange-500' },
  { name: 'Test', score: 83, status: 'Generated edge-case verification plan', accent: 'from-pink-400 to-rose-500' },
  { name: 'Documentation', score: 96, status: 'Updated README, architecture, and PR notes', accent: 'from-indigo-400 to-purple-500' }
];

export const workflow = [
  'Repository Analysis',
  'Architecture Understanding',
  'Dependency Analysis',
  'Bug Detection',
  'Security Review',
  'Performance Review',
  'Test Generation',
  'Documentation Review',
  'Code Improvements',
  'Run Verification',
  'Generate Pull Request'
];

export const reasoning = {
  problem: 'The selected repository has fragile dependency boundaries, missing test cases, and undocumented setup steps.',
  rootCause: 'The project grew feature-by-feature without an automated engineer continuously validating architecture, CI, security, and documentation.',
  selectedSolution: 'Coordinate specialized GPT-5.6 agents through a Codex execution sandbox that can inspect files, patch code, run checks, and generate PR evidence.',
  tradeoffs: 'The demo uses deterministic repository fixtures for speed while the architecture supports live GitHub repositories with permission checks.',
  finalFix: 'AutoFix AI produces an explainable patch set, verification transcript, and production-ready pull request summary.'
};
