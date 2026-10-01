# Contributing to the Game Wiki Framework

Thanks for your interest in improving the reusable game wiki framework.

## Prerequisites

- Node.js 22+ (check `.nvmrc` — pnpm 11 requires Node ≥22.13)
- pnpm 11+ (`npm install -g pnpm` or use [corepack](https://nodejs.org/api/corepack.html))
- Git

## Setup

```bash
git clone https://github.com/tielidev/phighting-wiki.git
cd phighting-wiki
pnpm install
pnpm dev          # → http://localhost:4321
```

## Development workflow

1. **Create a branch** off `main`:
   ```bash
   git checkout -b feat/your-feature
   ```
2. **Make your changes.** Keep reusable framework code separate from game-specific configuration and content.
3. **Verify before committing:**
   ```bash
   pnpm lint        # ESLint
   pnpm typecheck   # astro check (0 errors required)
   pnpm build       # must succeed
   ```
4. **Commit** with a clear message:
   ```bash
   git commit -m "feat: add comparison-table displayType"
   ```
   Suggested prefixes: `feat:` (new feature), `fix:` (bug fix), `docs:` (documentation), `refactor:` (no behavior change), `chore:` (tooling).
5. **Push and open a PR** against `main`. Fill in the PR template.

## Architecture overview

```
代码层 (src/pages, src/components, src/lib)      — framework code, shared across all sites
配置层 (src/config, src/i18n/routing.ts, globals.css) — per-game configuration
内容层 (src/content/wiki, src/locales)            — per-game content
```

**When fixing a bug or adding a feature, ask whether it belongs in the shared framework layer or in a site's configuration/content.** Keep game facts and strategy writing out of reusable components.

## Code style

- **TypeScript strict mode** — no `any` without justification.
- **Pure Astro components** — do not introduce React/Vue/Svelte runtime unless absolutely necessary (see PRD ADR-002).
- **CSS variables for theming** — never hardcode hex colors in components; use `var(--brand)`.
- **JSON-driven UI text** — all user-facing strings come from `src/locales/*.json`, not hardcoded in components.
- **Prettier + ESLint** — run `pnpm format` to auto-format.

## Reporting bugs

Use the [bug report template](https://github.com/tielidev/phighting-wiki/issues/new?template=bug-report.md). Include:

- Steps to reproduce
- Expected vs actual behavior
- Commit hash
- Node version

## Suggesting features

Use the [feature request template](https://github.com/tielidev/phighting-wiki/issues/new?template=feature-request.md). Explain what you want to improve and how it helps wiki builders, readers, or contributors.

## License

By contributing, you agree that your contributions will be licensed under the [MIT License](./LICENSE).
