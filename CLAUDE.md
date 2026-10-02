# Disc Golf Form Analyzer: website + blog

Marketing site, feature pages and blog for the Disc Golf Form Analyzer (DGFA) app.

- **Live:** https://www.dgformanalyzer.com (Vercel; push to `main` = production deploy, ~1-2 min)
- **Repo:** https://github.com/369-shar-block/disc-golf-landing
- **Stack:** Next.js 15.5 (App Router) · React 19 · TypeScript · Tailwind 3.4 · next-mdx-remote (blog)
- **Last major update:** 2026-10-02, full redesign ("sports-tech lab") + feature pages + blog engine

---

## Facts live in ONE file: `lib/seo.tsx`

Rating, rating count, price, trial length, accounts, throws analyzed, fault count, store links,
the FAQ, the author byline and every JSON-LD builder. Pages, `llms.txt` and structured data all
read from it, so the app resolves as one consistent entity for Google and AI assistants.
**Every number must be real.** Sources (2026-10-02): rating 4.3 / 52 from
`itunes.apple.com/lookup?id=6755727208`; 15,000+ accounts and 17,000+ analyses from production
Supabase; 20 faults from the app's `data/faultLibrary.js`. Refresh them when they move.

Other single-source files: `lib/faults.ts` (the 20 fault names + camera angles, mirrored from the
app; the coach's descriptions/drills stay in the app), `lib/reviews.ts` (verbatim App Store
reviews, never edited or invented), `lib/throw-data.ts` (the hero's real 3D throw).

## Design system ("sports-tech lab")

- Dark ink background (`ink-900 #080b11`), hairline cards (`.panel`), measurement grid (`.lab-grid`).
- **Accent: cyan `#22e3ff`** (the app's own `#00e5ff` family); violet for 3D; **heat orange only for
  the hand trail / release**. Gradient text (`.text-gradient`) on one phrase per heading.
- Type: **Barlow Condensed** uppercase display (`.display`, matches the App Store screenshots),
  Inter body, **JetBrains Mono** data labels (`.label`, e.g. "02 · POSE ESTIMATION").
- Tokens in `tailwind.config.ts`; components in `app/globals.css` (`.wrap .label .display .panel
  .lab-grid .prose-lab`). Legacy tokens remain only for the old reset-password page.
- No emoji, no AI-generated images. Visuals = real App Store screenshots (`public/screens/*.webp`,
  black bands trimmed) and the code-drawn 3D viewer.

## Pages

| Route | File | Notes |
|---|---|---|
| `/` | `app/page.tsx` | Hero with `ThrowViewer`, stats, how it works, 4 feature bands, compare, reviews, pricing + FAQ, guides teaser, CTA |
| `/features/pose-estimation` | `app/features/pose-estimation/page.tsx` | Lists all 20 faults with camera angles |
| `/features/3d-throw` | `app/features/3d-throw/page.tsx` | Interactive viewer + compare/AR |
| `/features/ai-analysis`, `/features/caddie` | `app/features/*/page.tsx` | Shared `FeaturePage` template |
| `/compare` | `app/compare/page.tsx` | Honest table + FTC ownership disclosure |
| `/blog`, `/blog/[slug]` | `app/blog/**` | MDX posts; noindex while there are no posts |
| `/blog/rss.xml`, `/llms.txt`, `/sitemap.xml`, `/robots.txt`, OG images | `app/**` | Generated from `lib/seo.tsx` + posts |
| `/privacy`, `/terms`, `/delete-account`, `/reset-password` | `app/*/page.tsx` | **The app links here. Never move these URLs.** |

**Hero 3D viewer** (`components/site/ThrowViewer.tsx`): canvas + tiny perspective projection, no
3D library. Real SAM 3D Body output of a backhand (84 frames), slow-mo 1/4 through the release,
heat on the throwing arm, hand trail, drag to spin, pauses offscreen, still frame for reduced
motion. Its container must get its size from the parent (`cn()` merges position classes; a
`relative` vs `absolute` clash once collapsed it to 0 px). No speed numbers are shown: 30 fps
video understates peak hand speed (~14 mph computed), so phases are shown instead.

## Blog

- Posts: `content/blog/<slug>.mdx`. Frontmatter: `title`, `description` (~150 chars), `date`,
  `updated?`, `author` (default **Tushar Saini**), `category`, `faqs?` [{question, answer}], `draft?`.
- **`draft: true` posts render with `npm run dev` only** (orange "Draft" banner), never in production.
  Don't run `npm run build` while `npm run dev` is running: both use `.next` and the dev server breaks.
- **Published 2026-10-02 (5):** filming for form analysis, stop rounding, throw farther, best training
  apps, how AI form analysis works. ⚠️ `best-disc-golf-training-apps` went live WITHOUT the recommended
  lawyer review (user's call); re-verify competitor prices periodically and update `updated:`.
- MDX components (`components/site/mdx.tsx`): `<Answer>` (answer-first box), `<AppCallout feature=…>`
  (the DGFA anchor, includes the ownership disclosure; max twice per post), `<Figure>`.
- Author: `AUTHOR` in `lib/seo.tsx` (Person schema + author box). Bio states facts only.
- **Research + briefs: `content/research/BLOG_RESEARCH.md`** (14 briefs with sources, copyright and
  FTC guide). Rules that matter most: our own words and structure (facts are free, wording/photos/
  video are not); embed YouTube only via the official player; no DGPT/PDGA footage or copied rule
  text (cite rule numbers, 2026 numbering); disclose that we make DGFA; "disc golf" never
  "frisbee golf"; no "add X feet" claims without evidence; no AI images (r/discgolf punishes it).
- Google dropped FAQ rich results in 2026; FAQ schema stays for AI assistants.

## Analytics

Meta Pixel `1459941859097694` in `app/layout.tsx`. `Lead` on every store button (with a
`placement`), custom `FAQClick`, plus scroll/time/section events from `MetaPixelEvents.tsx` (needs
`data-section` on sections).

## Dev + deploy

```bash
npm install
npm run dev      # http://localhost:3000 (shows drafts)
npm run build    # ALWAYS before pushing: Vercel fails the deploy on TS/build errors
```

Push to `main` = production. After a deploy: check `/llms.txt`, `/sitemap.xml`, the legal pages, and
validate structured data (Rich Results Test). Submit the sitemap to Google Search Console AND Bing
Webmaster Tools (ChatGPT search uses Bing).

## Version history

- **v3.0, 2026-10-02:** full redesign. Sports-tech lab design, real-3D hero, feature pages, compare
  page, MDX blog engine with author byline and dev-only drafts, `llms.txt`, RSS, OG images, updated
  facts (4.3/52, 15k+ accounts, 17k+ throws, 3D Throw, forehand), FTC disclosures, Next 15.5.
- v2.1 / v2.0, 2026-07-15: real reviews, single-accent design, SEO/schema overhaul (superseded).
- v1.x, 2025: pre-launch builds (superseded).

© 2026 Axiom Trinity Labs, LLC
