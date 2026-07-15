# AutoFix AI

**Your Autonomous AI Software Engineer.** AutoFix AI is a hackathon-ready autonomous engineering platform for OpenAI Build Week. It demonstrates how GPT-5.6 and Codex can coordinate a complete software engineering workflow: understand a repository, detect issues, explain root causes, apply fixes, run verification, update documentation, and generate a production-ready pull request.

## Local Development

```bash
npm ci
npm run dev
```

The frontend preview runs at `http://localhost:3000`. Start the backend separately, then paste a GitHub repository URL into the dashboard and click **Analyze Repository**.

## Backend

Use Python 3.11 or 3.12:

```bash
cd backend
py -3.11 -m venv .venv
./.venv/Scripts/python.exe -m pip install -r requirements.txt
./.venv/Scripts/python.exe -m uvicorn autofix.main:app --reload
```

Open `http://127.0.0.1:8000/docs` to test `/health`, `/analyze`, `/github/oauth/start`, and `/pull-request/draft`.

## Current Capabilities

- Frontend repository URL input connected to `POST /analyze`.
- Backend permission gate before analysis.
- Optional GitHub clone for lightweight file inspection.
- Multi-agent engineering report with confidence and verification status.
- Pull request draft generation for the report.
- GitHub OAuth and real pull-request creation are scaffolded as API surfaces and require GitHub app credentials/token wiring.
