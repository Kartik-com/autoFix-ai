# Merge Conflict Resolution

Use this branch's runnable preview-server changes when resolving conflicts against `main`.

## README.md

Keep the deterministic local development flow:

```bash
npm ci
npm run dev
```

Also keep the note that the preview server runs at `http://localhost:3000` and serves the dependency-free dashboard from `scripts/serve.mjs`.

## package.json

Keep the runnable development script:

```json
"dev": "node scripts/serve.mjs"
```

Do not restore the old `scripts/preview.mjs` command; that script was intentionally removed because it only printed a placeholder message instead of serving the demo.

## Verification

After resolving, run:

```bash
npm ci
npm run build
npm run dev
curl -I http://127.0.0.1:3000
curl -s http://127.0.0.1:3000/health
python -m py_compile backend/autofix/main.py
```
