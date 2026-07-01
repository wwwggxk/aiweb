# AGENTS.md

## Cursor Cloud specific instructions

This repo is a **Next.js 15 static site** ("AI 工具导航", a Chinese AI-tools directory) using SSG export mode (`output: "export"` in `next.config.js`). It is a single frontend service — there is no backend/database.

### Services & commands
- Dev server: `npm run dev` (Next.js dev on `http://localhost:3000`). This is the main way to develop/test.
- Static build/export: `npm run build` → outputs static site to `out/` (deployable to any static host).
- Lint: no `lint` script is defined in `package.json` and ESLint is not configured. `npx next lint` will prompt to set it up interactively — do not rely on it in automation.
- Tests: there is no test framework configured. The root file named `test` is NOT a test suite (it is unrelated placeholder text) — ignore it.

### Non-obvious gotchas
- Do NOT run `npm run build` while `npm run dev` is running. Both write to the shared `.next/` directory, which can corrupt the dev server's webpack chunks and cause runtime errors like `Cannot find module './904.js'`. If this happens, stop the dev server, delete `.next/`, and restart `npm run dev` (or run `npm run build` on its own).
- `app/api/prompts/route.js` uses `dynamic = 'force-static'` so it is prerendered at build time (required for `output: "export"`); it is not a live API.
- `scripts/build_sprite.py` is an optional Python asset helper, not part of the JS build.
