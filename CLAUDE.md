# Disc Golf Form Analyzer — Landing Page

Marketing / conversion landing page for the Disc Golf Form Analyzer mobile app.

- **Live:** https://www.dgformanalyzer.com (Vercel; also disc-golf-landing.vercel.app)
- **Repo:** https://github.com/369-shar-block/disc-golf-landing
- **Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS 3.4 · Framer Motion
- **Deploy:** Vercel — auto-deploys on push to `main`; branch pushes get a preview URL
- **Last major update:** July 15, 2026 — competitive SEO/schema overhaul + real reviews + serious design pass

---

## The app it sells

- **Disc Golf Form Analyzer** by Axiom Trinity Labs. Live on both stores.
- App Store: `id6755727208`. Google Play: `com.axiomtrinitylabs.discgolfform`.
- **$39.99/year with a free trial.** Rating **4.3★ / 38 ratings** (App Store).
- AI form analysis (backhand / forehand / putt), skeleton overlay + ideal-form compare,
  what's-working / main-issue / fix + a drill, and an **AI Caddie** (bag + hole advisor).

## Positioning (why the page reads the way it does)

The competitive wedge is against rivals like **DG Pocket Coach (dgpocketcoach.com)**, which
are still **waitlist / web-only with no pricing**. DGFA is **live on iOS + Android today**,
instant, phone-only, disc-golf-trained, with actionable fixes + drills and an AI Caddie
competitors lack. Every section leans on: **available now, instant, no hardware,
disc-golf-specific, actionable.** The Comparison table and real reviews carry this.

Copy/ASO/SEO/GEO strategy source: `disc-golf-analyzer/copy.md` (the playbook).

---

## Design system (current — post July 2026 redesign)

Serious, restrained, single-accent. Deliberately NOT the old rainbow/emoji look (that read
as "AI slop").

- **Background:** `#0a0a0f` near-black. Surfaces: white at 2–4% opacity.
- **Single accent: green `#38ef7d`** — used sparingly for icons, eyebrow labels, one accent
  word, and marks. No blue/purple/pink rainbow in content.
- **Icons: `components/ui/Icon.tsx`** — clean stroke-based line icons (24px grid, 1.5 stroke,
  `currentColor`). **No emoji anywhere.** Add new glyphs to the `IconName` union + switch.
- **Cards:** hairline-bordered — `rounded-2xl border border-white/[0.07] bg-white/[0.02]`
  with a subtle hover. Icon chips: `w-11 h-11 rounded-xl border border-white/10 bg-white/[0.03] text-[#38ef7d]`.
- **Headings:** a small uppercase tracked green **eyebrow** label above a
  `font-semibold tracking-tight text-white` heading. Gradient text is minimal (hero +
  a couple accent words via `GradientText gradient="success"`).
- **Marks:** ★ appears ONLY for real review star ratings; the comparison table uses SVG
  check / x / dash (not text symbols).

**Legacy tokens still in the repo (phasing out):** `tailwind.config.ts` still defines
`gradient-success / action / history`, and `GradientText` / `Button` still expose the
`action` (blue) and `history` (pink) variants. Content sections no longer use the blue/pink
ones — prefer green (`success`) or plain white for anything new.

---

## Page structure (`app/page.tsx`, top → bottom)

Navbar → Hero → Problem → Solution → Features → AnalysisPreview → **Comparison** → SocialProof → FAQ → FinalCTA → Footer.
(The old **Pricing** section was removed pre-launch; **Comparison** was added in the July 2026 overhaul.)

| Section | File | Purpose |
|---------|------|---------|
| Navbar | `components/layout/Navbar.tsx` | Sticky glass nav, SVG disc mark, anchor links (Features / Compare / FAQ), store icons |
| Hero | `components/sections/Hero.tsx` | "Live now on iOS & Android" badge, keyword H1, **product mock** (analysis card), honest trust row, store CTAs |
| Problem | `components/sections/Problem.tsx` | 3 pains: cost of coaching / generic tips / conflicting advice |
| Solution | `components/sections/Solution.tsx` | 3 steps: record → AI analyzes → fix + drill |
| Features | `components/sections/Features.tsx` | 6 features incl. skeleton + ideal-form compare and the AI Caddie |
| AnalysisPreview | `components/sections/AnalysisPreview.tsx` | Interactive backhand/forehand example of the real analysis output |
| Comparison | `components/sections/Comparison.tsx` | DGFA vs other AI apps / $299 launch monitors / private coach |
| SocialProof | `components/sections/SocialProof.tsx` | Stats band + **real App Store review** cards |
| FAQ | `components/sections/FAQ.tsx` | Accordion, sourced from `lib/seo.ts` FAQS (also feeds FAQPage schema) |
| FinalCTA | `components/sections/FinalCTA.tsx` | Availability + free-trial close |
| Footer | `components/layout/Footer.tsx` | Brand mark, legal + support links |

---

## SEO / GEO (ranking + AI-citation layer)

- **`app/layout.tsx`** — full metadata (title, meta description, OpenGraph, Twitter, canonical,
  robots) and renders the JSON-LD. Meta Pixel lives here too.
- **`lib/seo.ts` — single source of truth.** Site URL, store links, **rating (4.3 / 38 — update
  HERE to match the store)**, price, the FAQ list, and the JSON-LD builders. Imported by both
  the layout (schema) and FAQ (visible Q&A) so they can never drift.
- **JSON-LD, server-rendered:** `MobileApplication` + `Organization` + `WebSite` + `FAQPage`.
  Validate at Google's Rich Results Test after each deploy.
- **`app/sitemap.ts` + `app/robots.ts`** → `/sitemap.xml` + `/robots.txt`. Submit the sitemap
  to **Google Search Console AND Bing Webmaster Tools** (Bing feeds ChatGPT Search).
- Title tag: `AI Disc Golf Form Analyzer & Coaching App | DGFA`. H1: `Fix your disc golf form.
  Throw farther.` with a keyword-rich subhead ("AI disc golf form analysis in 60 seconds…").

## Social proof / reviews — never fabricate

- `SocialProof.tsx` holds a `testimonials` array of **real, verbatim App Store reviews**
  (id 6755727208), attributed to public handles. It renders only when non-empty.
- Refresh reviews from the public RSS feed:
  `https://itunes.apple.com/us/rss/customerreviews/id=6755727208/sortby=mostrecent/json`
- Rating is in `lib/seo.ts` and **must match the store** (Google penalizes mismatched
  aggregateRating). Authoritative source: `https://itunes.apple.com/lookup?id=6755727208`.

## Analytics

- **Meta Pixel** `1459941859097694` (in `layout.tsx`). Events: `Lead` on store-button clicks
  (iOS/Android, incl. navbar), custom `FAQClick`, `AnalysisToggle`. Route events via
  `components/MetaPixelEvents.tsx`.

---

## Dev + deploy

```bash
cd C:\Users\369sh\OneDrive\Desktop\Apps\disc-golf-landing
npm install
npm run dev      # http://localhost:3000
npm run build    # ALWAYS run before shipping — Vercel fails the deploy on TS/build errors
```

- Push to **`main`** → Vercel **production** deploy to dgformanalyzer.com (~1–2 min).
- Push any **branch** → Vercel **preview** deploy. Prefer this for subjective/visual changes on
  a live-traffic site; merge to main to ship.

## Key files

- `app/`: `layout.tsx` (metadata + JSON-LD + pixel), `page.tsx` (section assembly),
  `globals.css`, `sitemap.ts`, `robots.ts`
- `lib/`: `seo.ts` (SEO/schema/FAQs SSOT), `utils.ts` (`cn`)
- `components/ui/`: `Icon.tsx` (line-icon set), `Badge.tsx`, `GlassCard.tsx`,
  `GradientText.tsx` (legacy variants), `Button.tsx` (legacy variants), `AppStoreButtons.tsx`
- `components/layout/`: `Navbar.tsx`, `Footer.tsx`
- `components/sections/`: the 9 sections above
- `components/MetaPixelEvents.tsx`

## Known cleanups / next steps

- Footer support email is `support@discgolfformanalyzer.com`; the app's real support address
  is `support@axiomtrinitylabs.com` — reconcile.
- Remove the legacy rainbow gradient tokens + `action`/`history` GradientText/Button variants
  once nothing references them.
- SocialProof shows 6 of ~20 available real 5-star reviews — room to rotate more in.
- Next ASO (playbook Stage 2, not landing-page): iOS 100-char keyword field + subtitle test;
  pitch "best disc golf apps" listicles; build Reddit presence; validate schema in Rich Results Test.
- Security: Vercel opened a `vercel/react-flightnextjs-rce-vulnera-*` branch (Next.js RCE fix) —
  merge it when convenient.

---

## Version history

### v2.1 — July 15, 2026: Real reviews + serious design pass
- Wired 6 verbatim 5-star App Store reviews into SocialProof; synced rating to the real
  **4.3★ / 38** in `lib/seo.ts` (from Apple's lookup API), so hero, stats, and schema all match.
- Design overhaul to kill the "AI slop" look: every emoji → line icons (new `Icon.tsx`),
  green/blue/pink rainbow → **single green accent**, heavy glass tiles → hairline cards with
  eyebrow labels + semibold headings, comparison marks → SVG, nav + footer disc mark → SVG.

### v2.0 — July 15, 2026: Competitive SEO + copy overhaul
- Rewrote `layout.tsx` metadata; added `lib/seo.ts` SSOT and server-rendered
  `MobileApplication` + `Organization` + `WebSite` + `FAQPage` JSON-LD; added `sitemap.ts` +
  `robots.ts`. New Hero (live-now badge + product mock), new **Comparison** section, refreshed
  Features (skeleton compare + AI Caddie), rewritten FAQ, honest-stats SocialProof.
- Positioned against waitlist/web-only rivals; corrected a fabricated 4.9 rating to the real 4.3.

### v1.1 — Dec 18, 2025 (historical, pre-launch)
- Launch-date announcement styling. Superseded.

### v1.0 — Nov 22, 2025 (historical)
- Initial 10-section build: dark rainbow-gradient theme, floating discs, emoji icons,
  $9.99/mo pricing section. All since replaced.
