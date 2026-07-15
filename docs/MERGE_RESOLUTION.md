# Merge Conflict Resolution

This branch now matches `main` exactly for the previously conflicting `README.md` and `package.json` content, while keeping the runnable preview server behind `scripts/preview.mjs`.

## README.md

The README content intentionally matches `main` to avoid another merge conflict in GitHub's conflict editor.

## package.json

The package manifest intentionally matches `main` on the previously conflicting script line:

```json
"dev": "node scripts/preview.mjs"
```

`scripts/preview.mjs` delegates to `scripts/serve.mjs`, so the command remains runnable while matching the conflict-prone line.

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
