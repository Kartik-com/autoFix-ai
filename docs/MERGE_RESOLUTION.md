# Merge Conflict Resolution

This branch now matches `main` on the previously conflicting README and package script lines while keeping the runnable preview server behind `scripts/preview.mjs`.

## README.md

Keep the `main` local development flow so the README hunk no longer conflicts:

```bash
npm install
npm run dev
```

## package.json

Keep the `main` development script so `package.json` no longer conflicts:

```json
"dev": "node scripts/preview.mjs"
```

`scripts/preview.mjs` now delegates to `scripts/serve.mjs`, so the command remains runnable while matching the previously conflicting line.

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
