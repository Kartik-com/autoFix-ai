# Merge Conflict Resolution

This branch now matches `main` exactly for all files GitHub reported as conflicting:

- `README.md`
- `package.json`
- `scripts/preview.mjs`

Those files are intentionally kept aligned with `main` so GitHub can merge the PR without manual conflict resolution.

## Preserved demo functionality

The richer runnable server implementation remains available in `scripts/serve.mjs`. If you want the preview command to launch the local server in a follow-up PR, update `scripts/preview.mjs` after this conflict-free merge lands.

## Verification

Run:

```bash
npm ci
npm run typecheck
npm run build
npm run dev
python -m py_compile backend/autofix/main.py
```
