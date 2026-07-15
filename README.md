# AutoFix AI

**Your Autonomous AI Software Engineer.**

AutoFix AI is a hackathon-ready autonomous engineering platform for OpenAI Build Week. It demonstrates how GPT-5.6 and Codex can coordinate a complete software engineering workflow: understand a repository, detect issues, explain root causes, apply fixes, run verification, update documentation, and generate a production-ready pull request.

## Demo Flow

1. Login and connect GitHub.
2. Select an authorized repository.
3. Click **Analyze Repository**.
4. Watch specialized AI agents analyze architecture, dependencies, bugs, security, performance, tests, documentation, and DevOps.
5. Review the reasoning panel and generated pull request plan.

## Project Structure

- `app/` — Next.js dashboard pages.
- `components/` — Reusable UI components.
- `lib/` — Demo orchestration data for the product experience.
- `backend/` — FastAPI service for permission-gated repository analysis.
- `docs/` — Architecture and product documentation.

## Local Development

```bash
npm ci
npm run dev
```

The preview server runs at `http://localhost:3000` and serves a dependency-free demo dashboard from `scripts/serve.mjs`.

Run the API:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn autofix.main:app --reload
```

## Why It Wins

AutoFix AI focuses on one polished end-to-end workflow instead of isolated chatbot interactions. The product feels like collaborating with a senior engineer: every agent output includes reasoning, confidence, and verification evidence.
