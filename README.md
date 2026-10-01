# Game Wiki Framework

A privacy-safe, content-free Astro framework extracted from the production **PHIGHTING! Wiki** project.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Astro](https://img.shields.io/badge/Astro-7.x-FF5D01?logo=astro&logoColor=white)](https://astro.build/)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?logo=cloudflare&logoColor=white)](https://pages.cloudflare.com/)
[![CI](https://github.com/tielidev/phighting-wiki/actions/workflows/ci.yml/badge.svg)](https://github.com/tielidev/phighting-wiki/actions/workflows/ci.yml)

> Reference implementation and live example: **[PHIGHTING! Wiki](https://phighting-wiki.com/)**

This repository publishes only the reusable website framework. Production articles, game data, artwork, internal plans, analytics identifiers, ad-unit identifiers, IndexNow keys, credentials, and private operating material are intentionally excluded.

## Included

- Astro 7 static-site structure and reusable page layouts.
- MDX content collection with validated frontmatter.
- Config-driven navigation and single-source site metadata.
- Locale-ready UI and content routing.
- Pagefind full-text search integration.
- SEO metadata, sitemap, RSS, canonical URLs, structured data, and `llms.txt`.
- Responsive navigation, light/dark themes, article tables of contents, tags, related content, and legal pages.
- Optional, disabled-by-default integrations for analytics, comments, ads, sponsorships, and IndexNow.
- Cloudflare Pages configuration with placeholder values only.

## Not included

- Production PHIGHTING! articles or editorial strategy.
- Character, map, skin, NPC, faction, or other game datasets.
- Production images, covers, branding files, or ad creatives.
- Analytics, advertising, Search Console, comment-system, or deployment identifiers.
- Internal research, roadmaps, audits, reports, credentials, or local environment files.

## Quick start

Requirements: Node.js 22.13+ and pnpm 11.

```bash
git clone https://github.com/tielidev/phighting-wiki.git
cd phighting-wiki
pnpm install
pnpm dev
```

Open `http://localhost:4321`.

To create a real wiki:

1. Replace the placeholder identity in `src/config/site.ts`.
2. Configure categories in `src/config/navigation.ts`.
3. Add MDX articles under `src/content/wiki/en/<category>/`.
4. Replace the placeholder hero and favicon assets.
5. Set your own `SITE_URL` and optional integration values in `wrangler.toml`.

## Article example

```mdx
---
title: "Getting Started"
description: "A concise introduction to the game, its core loop, and the first things a new player should learn."
category: "guides"
date: 2026-01-01
tags: ["beginner"]
---

Write your guide here.
```

## Project structure

```text
src/components/        Reusable Astro UI
src/config/            Site identity and navigation
src/content/wiki/      Your MDX articles (empty in this repository)
src/i18n/              Locale and routing helpers
src/lib/               Content, URL, and SEO utilities
src/pages/             Static routes
src/styles/            Global theme and typography
public/                Neutral placeholder public assets
scripts/               Reusable content and build tooling
```

## Verification

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Credits and license

The framework is based on [AnvilWiki](https://github.com/PNGTRID/AnvilWiki) and is available under the [MIT License](LICENSE).

PHIGHTING! and related game material are not included in this repository. The linked production site is an independent fan resource and is not affiliated with or endorsed by the game's creators or Roblox Corporation.

---

## 中文说明

这是从线上 PHIGHTING! Wiki 项目中整理出的**纯基础框架**，只开放可复用的 Astro 代码结构，不公开核心内容和隐私配置。

已排除：正式文章、角色/地图/皮肤等游戏数据、生产图片素材、内部规划与审计、广告与统计 ID、IndexNow key、凭据和本地环境文件。

线上效果可参考：[PHIGHTING! Wiki](https://phighting-wiki.com/)。
