# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single, purely static **Next.js 15 (App Router, JavaScript)** site — the Chinese-language "AI 工具导航" (AI Tools Navigation) directory. There is **no backend, database, or external service**; all content comes from local files under `app/data/` and `app/sections.js`. The only runnable unit is the Next.js app at the repo root.

### Services / commands
- Dev server: `npm run dev` (serves on `http://localhost:3000`). This is the product — running it is all that's needed to view/test everything.
- Build: `npm run build` (static export via `output: "export"` in `next.config.js`; output goes to `out/`).
- Lint: not configured (no `lint` script, no ESLint config committed).
- Tests: not configured (no test runner, no `*.test.js`; the root file named `test` is an unrelated stray text file, not a test).

### Non-obvious caveats
- **Do not run `npm run build` while the dev server is running.** The build overwrites `.next`, which corrupts the live dev server's chunks and causes runtime errors like `Cannot find module './xxx.js'` and a blank/error page. If this happens, stop the dev server, run `rm -rf .next`, then `npm run dev` again.
- `next dev` auto-increments the port (3001, 3002, …) if 3000 is already in use, so a corrupted/zombie server on 3000 can silently push a new run to another port.
- The optional `python scripts/build_sprite.py` (needs `pillow` + internet) regenerates icon sprites; it is a build-time asset utility and is **not** required to run, build, or test the site. The app does not import its output, so a missing `public/sprites/` or `app/sprite-map.json` will not break dev/build.
- No environment variables are required. `NEXT_PUBLIC_SITE_URL` is optional and only affects canonical URLs/sitemap metadata (defaults to `https://00011000.com`).
