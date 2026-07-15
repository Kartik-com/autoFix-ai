import { createServer } from 'node:http';

const port = Number(process.env.PORT || 3000);

const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AutoFix AI — Your Autonomous AI Software Engineer</title>
  <style>
    :root { color-scheme: dark; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #070A12; color: #f8fafc; }
    body { margin: 0; min-height: 100vh; background: radial-gradient(circle at top right, rgba(34,211,238,.18), transparent 30%), radial-gradient(circle at top left, rgba(139,92,246,.18), transparent 35%), #070A12; }
    main, nav { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }
    nav { display: flex; justify-content: space-between; align-items: center; padding: 24px 0; }
    .brand { display: flex; gap: 12px; align-items: center; }
    .logo { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 14px; background: linear-gradient(135deg, #22d3ee, #8b5cf6); font-weight: 800; }
    .muted { color: #94a3b8; }
    .hero { display: grid; grid-template-columns: minmax(0, 1fr) 420px; gap: 40px; padding: 64px 0 32px; align-items: start; }
    .pill { display: inline-flex; border: 1px solid rgba(34,211,238,.35); color: #bae6fd; background: rgba(34,211,238,.1); padding: 9px 14px; border-radius: 999px; font-size: 14px; }
    h1 { font-size: clamp(42px, 7vw, 78px); line-height: .94; letter-spacing: -.055em; margin: 22px 0; max-width: 850px; }
    p { line-height: 1.7; }
    input, button, .button { border: 1px solid #202842; color: #fff; background: rgba(255,255,255,.04); padding: 12px 18px; border-radius: 999px; text-decoration: none; font-weight: 700; }
    input { width: min(100%, 520px); border-radius: 16px; font-weight: 500; }
    .primary { background: #fff; color: #070A12; cursor: pointer; }
    .panel, .card { border: 1px solid #202842; background: rgba(14,19,36,.78); border-radius: 28px; box-shadow: 0 0 60px rgba(139,92,246,.18); }
    .panel { padding: 20px; }
    .steps, .grid, .agents, .results { display: grid; gap: 14px; }
    .step, .finding { display: flex; gap: 12px; align-items: flex-start; padding: 12px; border-radius: 18px; background: rgba(255,255,255,.035); }
    .num { min-width: 28px; height: 28px; border-radius: 50%; display: grid; place-items: center; color: #86efac; background: rgba(74,222,128,.1); font-size: 12px; }
    .scores { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; padding: 22px 0; }
    .card { padding: 20px; }
    .score { font-size: 42px; font-weight: 800; margin: 12px 0; }
    .bar { height: 8px; border-radius: 999px; background: #1e293b; overflow: hidden; }
    .fill { height: 100%; background: linear-gradient(90deg, #22d3ee, #8b5cf6); }
    .two { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; padding: 28px 0 64px; }
    .agents { grid-template-columns: 1fr 1fr; }
    .agent, .reason, pre { padding: 16px; border-radius: 18px; background: rgba(255,255,255,.035); border: 1px solid #202842; }
    .accent { height: 6px; border-radius: 999px; background: linear-gradient(90deg, #22d3ee, #8b5cf6); margin-bottom: 12px; }
    pre { white-space: pre-wrap; overflow: auto; color: #cbd5e1; }
    @media (max-width: 900px) { .hero, .two { grid-template-columns: 1fr; } .scores, .agents { grid-template-columns: 1fr 1fr; } }
    @media (max-width: 620px) { .scores, .agents { grid-template-columns: 1fr; } nav { align-items: flex-start; gap: 16px; flex-direction: column; } }
  </style>
</head>
<body>
  <nav><div class="brand"><div class="logo">AF</div><div><strong>AutoFix AI</strong><div class="muted">Your Autonomous AI Software Engineer</div></div></div><a class="button" href="http://127.0.0.1:8000/docs" target="_blank">Backend Docs</a></nav>
  <main>
    <section class="hero"><div><span class="pill">Built for OpenAI Build Week with GPT-5.6 + Codex</span><h1>Autonomous repository repair from analysis to pull request.</h1><p class="muted">Paste a GitHub repository URL, authorize analysis, and AutoFix AI will call the FastAPI backend to produce an engineering report and PR draft.</p><form id="analyze-form"><p><input id="repo-url" value="https://github.com/Kartik-com/autoFix-ai" aria-label="GitHub repository URL" /> <button class="primary" type="submit">Analyze Repository</button></p><label class="muted"><input id="clone-repo" type="checkbox" style="width:auto" /> Clone for lightweight file inspection</label></form><p id="status" class="muted">Backend expected at http://127.0.0.1:8000</p></div><aside class="panel" id="demo"><p class="muted">Live Codex run</p><div class="steps" id="workflow">${['Repository Analysis','Architecture Understanding','Dependency Analysis','Bug Detection','Security Review','Performance Review','Test Generation','Documentation Review','Code Improvements','Run Verification','Generate Pull Request'].map((s, i) => `<div class="step"><span class="num">${i + 1}</span>${s}</div>`).join('')}</div></aside></section>
    <section class="scores" id="scores">${[['Repository Health',92,'Architecture, dependencies, and build checks are continuously reviewed.'],['Security Score',91,'Permission-gated scans detect secrets, unsafe routes, and dependency risks.'],['Test Coverage',84,'Generated unit, integration, and edge-case tests are attached to every PR.'],['Engineering Score',94,'A combined score for quality, documentation, risk, and verification.']].map(([label,value,detail]) => `<article class="card"><div class="muted">${label}</div><div class="score">${value}<span class="muted" style="font-size:18px">/100</span></div><div class="bar"><div class="fill" style="width:${value}%"></div></div><p class="muted">${detail}</p></article>`).join('')}</section>
    <section class="two"><div class="panel"><h2>Backend analysis response</h2><div id="findings" class="results"><p class="muted">Run an analysis to see live backend agent findings here.</p></div></div><div class="panel" id="reasoning"><h2>Pull request draft</h2><pre id="pr-draft">No PR draft generated yet.</pre></div></section>
  </main>
  <script>
    const form = document.getElementById('analyze-form');
    const statusEl = document.getElementById('status');
    const findingsEl = document.getElementById('findings');
    const prDraftEl = document.getElementById('pr-draft');
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      statusEl.textContent = 'Analyzing repository through FastAPI backend...';
      findingsEl.innerHTML = '<p class="muted">Running agents...</p>';
      try {
        const response = await fetch('http://127.0.0.1:8000/analyze', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ repository_url: document.getElementById('repo-url').value, authorized: true, clone_repository: document.getElementById('clone-repo').checked })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.detail || 'Analysis failed');
        statusEl.textContent = 'Repository health score: ' + data.repository_health_score + '/100 • inspected ' + data.inspected_files.length + ' files';
        findingsEl.innerHTML = data.engineering_report.map((finding) => '<article class="finding"><span class="num">' + finding.confidence.toFixed(2) + '</span><div><strong>' + finding.agent + '</strong><p class="muted">Risk: ' + finding.risk + ' • ' + finding.verification + '</p><p>' + finding.summary + '</p></div></article>').join('');
        prDraftEl.textContent = data.pull_request_draft.title + '\n\n' + data.pull_request_draft.body + '\nConfidence: ' + data.pull_request_draft.confidence_score + '%';
      } catch (error) {
        statusEl.textContent = 'Error: ' + error.message + '. Is the backend running on http://127.0.0.1:8000?';
        findingsEl.innerHTML = '<p class="muted">Start the backend, then try again.</p>';
      }
    });
  </script>
</body>
</html>`

const server = createServer((request, response) => {
  if (request.url === '/health') {
    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify({ status: 'ok', service: 'autofix-ai-preview' }));
    return;
  }

  response.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
  response.end(html);
});

server.listen(port, '0.0.0.0', () => {
  console.log(`AutoFix AI is running at http://localhost:${port}`);
});
