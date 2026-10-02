# DGFA Blog Research and Content Plan

Prepared 2026-10-02 for the dgformanalyzer.com blog (Disc Golf Form Analyzer, Axiom Trinity Labs, LLC).
Scope: research and planning only. No article copy here.

Legend used throughout:
- **[V]** verified on the primary page during research.
- **[S]** from a search snippet or secondary source only. Re-check before publishing.
- **[U]** uncertain or conflicting. Do not publish without re-verification.
- **[LAWYER]** needs legal sign-off. Nothing in this file is legal advice.

---

## 1. TL;DR

1. **The biggest open gap is "how to film your disc golf throw for form analysis."** Searches for it return golf-swing guides (V1 Sports, OnForm, golf.com). The disc golf coverage is old forum threads and a 7-year-old 1k-view video. It is also the article that feeds the app most directly. Publish it first.
2. **Form checks are a big, seasonal habit.** r/discgolf had 510 "Form Check" flaired posts in the 12 months to Oct 1 2026 (about 3.2% of 15,947 posts), plus a weekly Form Check thread. r/DiscGolfForm had 932 posts. Volume peaks May to August, so publish the form cluster by March to April.
3. **Fault-diagnosis content is thin in text form.** Rounding, nose angle / off-axis torque (OAT), and hips / brace have strong autocomplete and YouTube demand. The text pages are 2 to 8 years old, forum threads, or tip lists. None explains how to *see* the fault on your own video.
4. **No existing "best disc golf apps" listicle mentions AI form analysis.** We checked Disc Golf Fanatic, Disc Golf Galore, Dude Clothing and Disc Golf Station. The real competitive set for form apps is Disc-i (formerly Disc.ai), ScoreSensei, Snapdisc, RipReader, TechDisc, Formero, and generic OnForm. An honest comparison page is open ground. Because we own one of the apps, it must carry a clear ownership disclosure (FTC 16 CFR 465).
5. **Google Autocomplete already suggests "disc golf form analyzer app review" and "disc golf form analyzer reddit".** We should own those queries with an honest "how DGFA works, what it gets wrong" page.
6. **r/discgolf is hostile to AI-written content and AI art.** Top threads this year include "Discraft is almost certainly writing their articles with AI" (231 comments) and the Discmania AI art backlash (331 comments). Every post needs a named human author, real footage or frames, our own data, and no generic filler.
7. **Be careful with stats.**
   - PDGA membership **fell** in 2025: about 115,140 vs 126,132 in 2024 [U, decoded from PDF].
   - UDisc reports participation growth (86% since 2020), but that is app data, not a census.
   - There is **no credible public dataset** for average amateur distance or arm speed by rating. Do not invent one.
8. **GEO basics.** Answer first, original statistics, quotations, and cited sources all lift visibility in the GEO paper (up to about 40%). Google says AI Overviews need no special markup. FAQ rich results are gone as of 2026. Allow OAI-SearchBot, PerplexityBot and Claude-SearchBot in robots.txt.

---

## 2. Demand findings

### 2.1 Method and limits
- **Reddit.** reddit.com blocks automated fetching, so titles were pulled from the Arctic Shift archive API (arctic-shift.photon-reddit.com). That gave 15,947 r/discgolf posts from Oct 1 2025 to Oct 1 2026, plus r/DiscGolfForm. Counts are approximate (keyword regex, and the archive reflects posts at ingest time).
- **Autocomplete** came from Google suggest (US English). It shows that a query exists, not how big it is. "People also ask" boxes could not be captured.
- **YouTube view counts** were read on 2026-10-02.
- **No keyword-volume tool was used.** Before final prioritization, validate volumes in Google Keyword Planner, Ahrefs or Semrush.

### 2.2 Form-check behaviour (core evidence for the whole blog)
- **r/discgolf "Form Check" flair:** 510 posts in 12 months (about 3.2% of all posts), plus a weekly "Form Check Weekly" sticky (52 per year).
- **Monthly counts:**

  | Oct'25 | Nov | Dec | Jan | Feb | Mar | Apr | May | Jun | Jul | Aug | Sep'26 |
  |---|---|---|---|---|---|---|---|---|---|---|---|
  | 49 | 33 | 28 | 34 | 33 | 23 | 40 | 57 | 59 | 54 | 62 | 38 |

- **r/DiscGolfForm** (https://www.reddit.com/r/DiscGolfForm/): 932 posts in 12 months.
- **Players already ask which app to use:**
  - "What app do y'all use for form and arm speed?" https://www.reddit.com/r/discgolf/comments/1vicdh9/
  - "Have any of you used video to help you improve form / technique?" https://www.reddit.com/r/discgolf/comments/1w2mg00/
  - "Form replay app" (80 comments) https://www.reddit.com/r/discgolf/comments/1wssoku/
  - "Gemini form analysis" https://www.reddit.com/r/discgolf/comments/1p1ktr1/
- **Our own launch post** ("Disc Golf Form Analyzer App- Improve your Form", https://www.reddit.com/r/discgolf/comments/1um6tq9/) drew 1 comment. Self-promotion on Reddit does not land. Useful, genuine participation might, with disclosure.

### 2.3 Anti-AI sentiment (affects tone and production)
- "Discmania in full support of generative AI art", 331 comments: https://www.reddit.com/r/discgolf/comments/1trajp1/
- "Westside discs using AI art", 251 comments: https://www.reddit.com/r/discgolf/comments/1se96jc/
- "Discraft is almost certainly writing their articles with AI", 231 comments: https://www.reddit.com/r/discgolf/comments/1sgti13/
- "Disc Golf United AI slop", 157 comments: https://www.reddit.com/r/discgolf/comments/1ubd4nt/

**Implications**
- No AI-generated hero images of people throwing.
- Use our own filmed clips, real app screenshots, and original diagrams.
- Use a named author with real disc golf experience.
- Be honest about what the AI gets wrong. This also matches Google's "Who / How / Why" guidance (see section 7).

### 2.4 Topic demand summary

| Topic | Autocomplete evidence | Reddit (12 mo) | Top YouTube (views) | Text competition | DGFA fit |
|---|---|---|---|---|---|
| Film your throw | "how to film disc golf", "disc golf form slow motion", "best way to record disc golf" | app and video threads above | Dynamic Discs "best way to film your form" 1,026 (7y) | Golf-swing pages outrank disc golf; old DGCR threads | Direct |
| Rounding | "how to stop rounding in disc golf" is the #1 suggestion for "how to stop rounding" | 5+ rounding Form Checks, up to 159 upvotes | Stokely 62.5k, Lindahl 48.6k | Innova errors page, Ultiworld 2022, DGCR | Direct (fault detected) |
| Distance | "how to throw farther disc golf", "how to get more distance disc golf", "...standstill" | about 300 titles; plateau posts ("stuck at 300/360") | Latitude 64 501.8k, Innova 418.4k, Gannon Buhr 272.9k | Retailer tip lists | Strong |
| Nose angle / OAT / early release | "how to fix nose up disc golf", "off axis torque disc golf", "disc golf grip lock" | "Nose Up Solution?" 88 comments | Aderhold 85.3k | Gotta Go Gotta Throw, DGCR | Strong (early release fault; 3D view) |
| Hips / brace / weight shift | "disc golf hip rotation", "hip shoulder separation", "engage hips" | about 20 titles, 68-comment brace thread | Dynamic Discs Physics of Form 78.3k | Essentially none in text | Direct (hips not leading, weight shift faults) |
| Forehand | "disc golf forehand form", "...wobble", "...elbow pain" | about 175 titles; "Forehand Wobble" 93 comments | Big Jerm 157.1k | Innova, Discmania, School of Disc Golf (2014) | Direct (forehand pose grading live) |
| X-step / standstill | "disc golf x step", "...slow motion" | about 34 titles; standstill vs x-step debates | Dynamic Discs 82.4k, Discraft 72.6k | Altitude, Disc Golf Mentor, Ultiworld | Good |
| Reach-back | "disc golf reach back", "...timing" | about 8 titles, high engagement ("Don't reach back... Coil!") | DG Spin Doctor 88.4k, Overthrow 58.7k | Greensplatter, DGCR | Direct (no reach-back fault) |
| Putting | "disc golf putting tips/form/drills", "how to spin/push/straddle putt" | about 510 titles (mostly gear); only about 7 putting Form Checks | Wysocki 358.3k, Gannon 235.2k | Crowded with retailers | Partial |
| Flight numbers | "disc golf flight numbers explained/chart/for beginners" | about 1,100 titles; "Disc Advice" flair 1,473 posts in 6 months | JustDisc 342.3k | Saturated (UDisc, Innova, retailers) | Caddie (indirect) |
| Grip | "disc golf grip backhand/for distance/grip lock" | about 100 titles | Gannon grip 231.3k | Retailers | Partial |
| Drills / field work | "disc golf drills for beginners/at home/for distance", "field work routine" | "Getting good is 90% field work" 90 comments | McBeth 168.7k | discgolfnow "50 Best Drills" dominates | Drill library |
| Average distance / speed | "average disc golf drive distance", "how far should I be able to throw" | "81.7 mph" 227 upvotes | Dynamic Discs "Normal people" 23.9k | Radius blog (unsourced), forums | Indirect (no distance or mph measured) |
| Training apps | "disc golf form analyzer app review", "...reddit", "disc golf form app" | app threads above | Small (hundreds of views) | Listicles that ignore form apps | Direct |

**Full URL lists for every topic are in section 4.**

### 2.5 Search-volume context
- Worldwide Google searches for "disc golf" bottomed out around April 2025 and have grown year on year since. This is third-party analysis of Google Trends, not first-party data: https://chaseashleydiscgolf.substack.com/p/the-decline-ended-in-april [S]
- Seasonality comes from Reddit Form Check counts (peak May to August, trough December to March), not from Trends [U].

---

## 3. Copyright and usage guide (practical, not legal advice)

### 3.1 What we MAY use
1. **Facts, ideas, techniques, methods.** Copyright does not protect ideas, procedures, methods, systems or facts, however they are expressed (US Copyright Office Circular 33, https://www.copyright.gov/circs/circ33.pdf [V]). Concepts like reach-back, hip lead, brace and flight numbers are free to explain. A coach's actual sentences, videos and diagrams are not.
2. **Data points from other sources, restated.** "There can be no copyright in facts" (Feist v. Rural, 499 U.S. 340 (1991), https://supreme.justia.com/cases/federal/us/499/340/). A compilation is protected only in its original selection and arrangement.
   - OK: cite "UDisc counted 17,287 courses."
   - Not OK: copy someone's whole curated table or chart layout.
3. **Short, attributed quotes used for commentary.** Fair use weighs four factors (17 USC 107, https://www.law.cornell.edu/uscode/text/17/107 [V]): purpose (commercial weighs against us), nature of the work, amount used, and market effect. There is "no formula" for a safe amount (https://www.copyright.gov/fair-use/ [V]).
   - House rule: one or two sentences, quoted to discuss them, always attributed and linked.
4. **Linking.** Linking to any public page is fine and encouraged; outbound citations help GEO (section 7).
5. **YouTube embeds through the official player.** The YouTube Terms allow showing videos "through the embeddable YouTube player" (https://www.youtube.com/t/terms [V]). Embeds of other platforms' media rest on unsettled case law: the 9th Cir. "server test" (Perfect 10 v. Amazon; Hunley v. Instagram, 2023) versus Goldman v. Breitbart (S.D.N.Y. 2018). See https://en.wikipedia.org/wiki/Server_test [S].
   - **[LAWYER]** before embedding Instagram, TikTok or X posts.
6. **PDGA rules by reference.** Cite rule numbers and paraphrase, for example "Under PDGA rule 806.01, any throw from within 10 meters is a putt," then link to pdga.com/rules. Quote a sentence at most when the exact wording matters.
7. **Our own material.**
   - App Store and Play screenshots of DGFA.
   - Our own filmed clips (with signed consent from the person filmed).
   - Original diagrams and charts.
   - DGFA's aggregated, anonymized analysis data (first check that the privacy policy covers aggregate use; [LAWYER] if unsure).

### 3.2 What we may NOT use
1. **Article text, copied or closely paraphrased.** Close paraphrase that follows another article's structure and wording can still infringe (substantial similarity). Write from several sources, in our own structure, and cite them.
2. **Other people's photos, diagrams, charts, or frames from videos.** This includes screenshots of pro footage, coach diagrams and retailer flight charts. Attribution does not equal permission.
3. **YouTube thumbnails as images.** A thumbnail is a separate copyrighted image, and the embed permission does not cover it (secondary sources [S]). Never use one as a featured or OG image.
4. **Downloaded or re-hosted video.** The YouTube Terms prohibit reproducing, downloading or altering content outside the embed player [V].
5. **DGPT and PDGA tournament footage and stills.** The DGPT Media and Commercial Licensing Policy (https://www.dgpt.com/media-policy/ [V]) charges commercial license fees of **$50 per photo and $1,000 per minute of video (minimum $250)**. DGPT marks "may not be used to imply an official, marketing, endorsement or sponsorship relationship."
6. **PDGA site content in bulk.** The PDGA Terms of Use (https://www.pdga.com/tos [V]) license materials for "personal, non-commercial transitory viewing only" and prohibit copying, public display and scraping. They explicitly list "scoring, video, audio, statistics, or data content." The rules page says "Copyright 1998-2026... All Rights Reserved" (https://www.pdga.com/rules [V]).
   - Do not reproduce rule sections in full.
   - Do not scrape ratings or player stats.
   - **[LAWYER]** before any data project using PDGA data.
7. **Pro players' names or likenesses implying endorsement.** "Throw like [pro] with DGFA" is out. Factual mentions in commentary are fine. **[LAWYER]** for any use of a pro's image (right of publicity).

### 3.3 Trademarks and brand names
- **"Frisbee" is a registered Wham-O trademark.** Reg. No. 0679186, registered 1959 (https://uspto.report/TM/72056220/ [S]; brand page https://wham-o.com/pages/wham-o-brand-protection [S]). Confirm live status on https://tsdr.uspto.gov.
  - Say "disc golf", "disc" or "flying disc".
  - Avoid "frisbee golf" in our own copy. If we target that query, mention it once as a search term ("sometimes called 'frisbee golf'") and write "disc golf" everywhere else.
- **"Disc golf" is generic.** The Disc Golf Association says Ed Headrick trademarked "Disc Golf" and later released it "from trademark restrictions in order to help grow the sport" (https://discgolf.com/disc-golf-education-development/disc-golf-history/ [V]). Fun fact for an article.
- **Innova, Discraft, UDisc, TechDisc, PDGA, DGPT and disc mold names: treat them all as trademarks.** Use them under nominative fair use:
  1. use the name only where needed to identify the product;
  2. plain text only, no logos or stylized fonts;
  3. nothing that suggests sponsorship or endorsement.

  Sources: New Kids on the Block v. News America, 971 F.2d 302 (9th Cir. 1992), https://openjurist.org/971/f2d/302/new-kids-on-the-block-v-news-america-publishing-inc-usa-new-kids-on-the-block; INTA fact sheet https://www.inta.org/fact-sheets/fair-use-of-trademarks-intended-for-a-non-legal-audience/ [S]. Circuits differ (Sidley analysis https://www.sidley.com/en/insights/publications/2015/06/nominative-fair-use-for-tms).
- **Registration status.** Check https://tmsearch.uspto.gov before adding any ® symbol. Otherwise use no symbol, plus this footer: "All product names and trademarks are the property of their respective owners. Use does not imply affiliation or endorsement."
- **Comparative claims.** The FTC "encourages the naming of, or reference to competitors" if the comparison is clear and truthful (16 CFR 14.15, https://www.ecfr.gov/current/title-16/chapter-I/subchapter-A/part-14 [S]). Competitors can sue over false comparisons under Lanham Act 43(a) (https://www.law.cornell.edu/uscode/text/15/1125).
  - Compare **stated features and published prices only**, each with an "as of" date.
  - Never claim a competitor is inaccurate without our own documented testing.
  - **[LAWYER]** before publishing the comparison article.
- **Store badges.**
  - Apple: official unmodified badge, at least 40px tall, clear space of 1/4 badge height, listed first, plus the credit line "App Store is a service mark of Apple Inc." (https://developer.apple.com/app-store/marketing/guidelines/ [V]).
  - Google: "Google Play and the Google Play logo are trademarks of Google LLC," and the badge must not be smaller than other badges (https://partnermarketinghub.withgoogle.com/brands/google-play/legal-and-trademarks/legal-requirements/ [S]).
  - Use equal sizes with Apple first.

### 3.4 Image licensing options (best to worst)
1. **Own assets.** Our App Store screenshots, our own clips and frames (with the subject's consent), and original diagrams such as SVG body positions and flight-path charts. These are the strongest for E-E-A-T and the anti-AI audience.
2. **CC0.** Anyone may copy and modify, "even for commercial purposes, all without asking permission" (https://creativecommons.org/publicdomain/zero/1.0/ [V]). CC0 does not clear the trademarks, publicity rights or privacy rights of people or brands shown.
3. **Unsplash.** Free commercial use, no attribution required. Cannot be sold unmodified or compiled into a competing service (https://unsplash.com/license [V]).
4. **Pexels.** Free commercial use. Do not imply that people or brands in the image endorse your product (https://www.pexels.com/license/ [V]). Relevant to us: no "this player uses our app" framing.
5. **CC BY images (including many on Wikimedia Commons).**
   - Attribute with TASL: Title, Author, Source link, License link (https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution [V]).
   - Avoid NC licenses (our blog is commercial). Avoid ND licenses if we crop or edit.
   - On Wikimedia, credit the creator, not the uploader, and check each file's license (https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia [V]).
6. **AI-generated images.** Pure prompt output is not copyrightable: "the mere provision of prompts" is not enough (USCO Part 2 report, Jan 29 2025, https://www.copyright.gov/newsnet/2025/1060.html [V]). Competitors could reuse them, and the audience dislikes them (section 2.3). Avoid, especially images that resemble real pros or branded discs.

### 3.5 FTC and endorsement rules for promoting our own app
- **Disclose ownership in posts that recommend DGFA.** Put a short, visible line near the top, for example "We make Disc Golf Form Analyzer. Here is how we compared it." The FTC applies a net-impression standard, and disclosures must be prominent and near the headline (Native Advertising guide, https://www.ftc.gov/business-guidance/resources/native-advertising-guide-businesses [V]).
  - Never style the blog as an independent review site.
  - **[LAWYER]** to confirm the wording.
- **Comparison and listicle pages.** The Consumer Reviews and Testimonials Rule (16 CFR 465, effective Oct 21 2024, https://www.ftc.gov/legal-library/browse/rules/rulemaking-use-consumer-reviews-testimonials) bans company-controlled sites that pose as independent reviewers of a category containing their own product. It also bans fake or AI-generated reviews and undisclosed insider reviews. Civil penalties are about $51,744 per violation [S].
- **Employees and founders** who post about DGFA on Reddit or YouTube must disclose the relationship. "Listing your employer on your profile page isn't enough" (https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking [V]).
- **Testimonials.**
  - Use only real, verbatim reviews.
  - If a user says "I added 40 ft," show what is typical or don't use it (Endorsement Guides 16 CFR 255, revised 2023, https://www.ftc.gov/news-events/news/press-releases/2023/06/federal-trade-commission-announces-updated-advertising-guides-combat-deceptive-reviews-endorsements).
- **Performance claims need a reasonable basis before publishing** (https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation [S]).
  - Avoid: "Add 50 feet with DGFA."
  - OK: "DGFA flags the fault and gives you a drill."
- **Health and injury claims need competent and reliable scientific evidence** (https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance [V]).
  - Never say "prevents elbow injury."
  - Citing injury studies as background is fine.
  - **[LAWYER]** for any injury-prevention messaging.

### 3.6 The five rules that matter most
1. Write everything in our own words and structure. Facts and ideas are free; sentences, photos, diagrams and video frames are not.
2. Images must be ours, CC0, Unsplash or Pexels, or properly attributed CC BY. No thumbnails, no pro tournament stills, no screenshots of others' videos.
3. Embed YouTube only through the official player. Never download or re-host.
4. Disclose that we make DGFA in every post that recommends it, and compare competitors only on stated, dated facts.
5. Write "disc golf", never "frisbee golf". Use brand names in plain text only, with no logos and no implied endorsement.

### 3.7 Items for a lawyer
1. The competitor comparison page (Lanham Act 43(a)).
2. Any quantified performance claim.
3. Any injury or health language.
4. Disclosure wording under 16 CFR 465.
5. Any use of PDGA data beyond citing facts.
6. Pro names and likenesses.
7. Non-YouTube embeds.
8. Publishing aggregated user analysis data (privacy policy coverage).

---

## 4. Topic-by-topic competition and facts

Each topic lists the current top or most-cited pages, what they miss, and citable facts. The "Shared fact bank" (4.15) holds facts used across many topics.

### 4.1 Filming your throw for analysis
- **Top pages and what they miss**

  | Page | What it covers | What it misses |
  |---|---|---|
  | DGCR "Best angle for filming drives for critique?" https://www.dgcoursereview.com/threads/best-angle-for-filming-drives-for-critique.40170/ | Rear plus side view; use slow-mo but judge timing at full speed | Old forum thread; no phone settings |
  | DGCR https://www.dgcoursereview.com/threads/how-to-go-about-filming-ones-drive.29471/ | Forum Q&A | Same |
  | The Form Tracker ($50 paid review) https://theformtracker.com/product/video-analysis-disc-golf-form/ | At least 60fps, camera perpendicular to the teepad, contrasting disc | Product page, not a guide |
  | Dynamic Discs Clips video https://www.youtube.com/watch?v=pKYDg1JPYoo | Filming advice | 7 years old, about 1k views |
  | Overthrow "How To Analyze Your Own Form" https://www.youtube.com/watch?v=xjKYmHO5-70 | 9.7k views | Video only |
  | Golf-swing pages that outrank disc golf content: https://v1sports.com/film-your-golf-swing-the-right-way/ , https://onform.com/blog/how-to-video-your-golf-swing-for-better-analysis/ , https://golf.com/instruction/properly-film-your-golf-swing/ | Golf filming | Not disc golf |

- **Gap:** no modern disc golf guide covering:
  - angle by fault (behind / down-the-line vs side-on vs facing)
  - camera height and distance
  - framing the whole body including the plant foot
  - iPhone and Android slow-mo settings
  - the iPhone variable-frame-rate pitfall
  - shutter and light
  - what each angle can and cannot reveal
- **Facts**
  - Accurate 2D video analysis needs images that are "sharp and motion blur-free, especially in high speed motions" (Pueo 2016, J Hum Sport Exerc 11(1):53-73, https://www.redalyc.org/pdf/3010/301049620005.pdf [V]).
  - BlazePose (the model behind MediaPipe Pose) "produces 33 body keypoints for a single person and runs at over 30 frames per second on a Pixel 2 phone" (https://arxiv.org/abs/2006.10204 [V]).
  - OpenCap reached a 4.5 degree mean absolute joint-angle error versus lab motion capture, using two or more smartphones (Uhlrich et al. 2023, https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1011462 [V]). This supports "phone video is useful but not lab-grade."
  - "120-240 fps for throwing" has only non-academic sourcing [S]. Present it as our recommendation, not as research.
  - Internal note: iPhones record variable frame rate, so normalize clips for timing claims (from DGFA's own engineering experience; state it as first-hand).

### 4.2 Fixing rounding
- **Top pages**

  | Page | What it covers | What it misses |
  |---|---|---|
  | Innova "Common Throwing Errors" (May 14 2026) https://www.innovadiscs.com/tips/common-throwing-errors-holding-back-your-game/ | OAT, rounding, all-arm, nose-up | Brief per fault; no video self-check |
  | Ultiworld "Tuesday Tips: Stop Rounding" (2022) https://discgolf.ultiworld.com/2022/01/11/tuesday-tips-stop-rounding-or-how-to-fix-disc-golfs-most-common-flaw/ | Fault explainer | Content not verified (403); aging |
  | DGCR threads https://www.dgcoursereview.com/threads/how-to-avoid-rounding.128603/ and https://www.dgcoursereview.com/threads/the-role-of-biceps-in-the-swing-to-prevent-rounding.179276/ | Forum debate | Unstructured |
  | discgolfnow "50 Best Drills" (Line Pulling Drill) https://discgolfnow.com/50-best-disc-golf-drills/ | Drill | No diagnosis |
  | YouTube: Stokely https://www.youtube.com/watch?v=yrLCZfxdFwo (62.5k), Lindahl https://www.youtube.com/watch?v=cO5MhGFJd7Q (48.6k) | Fix instruction | Video only |

- **Reddit demand:**
  - https://www.reddit.com/r/discgolf/comments/1sl78kx/ (79 comments)
  - https://www.reddit.com/r/discgolf/comments/1qz0p33/ (159 upvotes)
- **Gap:** which camera angle shows rounding, and which frame to pause on. Plus a cause tree (sway, pulling too early, no coil) mapped to drills.
- **Facts**
  - Proximal-to-distal sequencing is the classic model for throwing (Putnam 1993, J Biomech 26 Suppl 1:125-135, https://doi.org/10.1016/0021-9290(93)90084-R [V metadata]).
  - In ultimate players, skilled and unskilled sidearm throwers had **similar release velocity** (21.7 vs 20.7 m/s) but very different spin (12.9 vs 9.4 rev/s) and distance (51.4 vs 29.5 m) (Sasakawa & Sakurai 2008, https://pubmed.ncbi.nlm.nih.gov/18972880/ [V]). Use it to argue that clean mechanics and spin beat raw arm effort, with the caveat that it was a sidearm study.

### 4.3 Adding distance
- **Top pages**

  | Page | Notes |
  |---|---|
  | Infinite Discs clinic (Apr 2020) https://blog.infinitediscs.com/how-to-throw-farther-disc-golf-distance-clinic-with-zoe-andyke-and-dustin-keegan-clinic/ | Thin list plus video |
  | Disc Golf Fanatic https://discgolffanatic.com/3-simple-tips-how-to-throw-farther-in-disc-golf/ | Generic tips |
  | Altitude https://altitudediscgolf.com/tips/how-to-throw-a-disc-golf-disc-farther/ | Generic tips |
  | Discount Disc Golf https://discountdiscgolf.com/how-to-throw-disc-golf-farther/ | Generic tips |
  | discgolfnow https://discgolfnow.com/why-cant-i-throw-my-disc-golf-disc-far/ | Generic tips |
  | YouTube: Latitude 64 https://www.youtube.com/watch?v=GXigi8aw0sg (501.8k), Innova "Tip of the Whip" https://www.youtube.com/watch?v=L1PHi-zgXIY (418.4k), Gannon Buhr https://www.youtube.com/watch?v=7xCMwB3J-r0 (272.9k) | Video |

- **Gap:**
  - advice segmented by plateau (stuck at 250 / 300 / 350 ft)
  - fixes tied to visible checkpoints
  - honest physics (spin, nose angle, launch angle)
- **Plateau threads:**
  - https://www.reddit.com/r/discgolf/comments/1vfz83b/
  - https://www.reddit.com/r/DiscGolfForm/comments/1rsa542/
  - https://www.reddit.com/r/DiscGolfForm/comments/1qw8qab/
- **Facts**
  - The skilled vs unskilled sidearm spin and distance finding (Sasakawa & Sakurai 2008, above).
  - In forehand throws, distance correlated with spin velocity: skilled r = 0.722, unskilled r = 0.794 (Sasakawa, Umegaki & Sakurai 2018, J Sports Sci 36(8):843-851, https://www.tandfonline.com/doi/abs/10.1080/02640414.2017.1344778 [V abstract; r values S]).
  - Thumb about 3 cm from the outer edge gave the best mix of spin and launch speed. The study found a "strong linear correlation between spin rate and launch speed" (Koch et al. 2024, AIP Advances; 24 players, 600 throws, TechDisc-instrumented Discraft Buzzz; https://www.sciencedaily.com/releases/2024/10/241022153937.htm [V]).
  - Peak lead-knee extension velocity associated with launch speed, r = 0.781 (Tervonen 2025, **bachelor's thesis**, https://jyx.jyu.fi/handle/123456789/102903 [V]). Label it as a thesis.
  - TechDisc's guidance: about -2 to -3 degrees nose angle for distance, and 8 to 10 degree launch angle for a baseline throw (https://techdisc.freshdesk.com/support/solutions/articles/153000074253-techdisc-metrics [V]). This is manufacturer guidance, not research.
  - World record: 338 m (1,108 ft 11 in), David Wiggins Jr., Mar 28 2016, with a 154 g Innova Boss and a strong tailwind (https://www.guinnessworldrecords.com/world-records/66339-flying-disc-distance-men [V]). Women's record at the same event: Jennifer Allen, 173.3 m / 568.5 ft (https://www.innovadiscs.com/team-news/new-world-record-338-meters-thrown-david-wiggins-jr/ [V]).

### 4.4 Nose angle, off-axis torque, early release
- **Top pages**
  - Gotta Go Gotta Throw OAT: https://gottagogottathrow.com/blogs/flight-school/what-is-off-axis-torque-in-disc-golf
  - Innova errors (above)
  - DGCR: https://www.dgcoursereview.com/threads/how-to-fix-nose-angle.181082/ and https://www.dgcoursereview.com/threads/how-did-you-get-rid-of-off-axis-torque.128199/
  - someflow: https://someflow.substack.com/p/pitch-and-roll-on-curvy-throws
  - YouTube: Aderhold https://www.youtube.com/watch?v=l_ajpOY3Ohs (85.3k), Overthrow "The Nose Angle LIE" https://www.youtube.com/watch?v=YlcNlFfMBVk (22.5k)
- **Reddit demand:**
  - https://www.reddit.com/r/discgolf/comments/1vx22th/ (88 comments)
  - https://www.reddit.com/r/discgolf/comments/1o6p78v/ (127 upvotes)
  - https://www.reddit.com/r/DiscGolfForm/comments/1ozrckk/
- **Gap:** pages explain nose angle but cannot help you check yours. Only hardware (TechDisc) measures it.
  - Article angle: what phone video can and cannot show about nose angle and OAT (wobble, the disc's attitude in the first frames after release, wrist and elbow position at the hit).
  - Be honest: a phone cannot measure nose angle to the degree.
- **Facts**
  - Flight stability depends heavily on the pitching moment coefficient; CL/CD drives distance (Kamaruddin, Potts & Crowther 2018, https://shura.shu.ac.uk/14521/ [V]).
  - TechDisc metric definitions, including wobble (link above).
  - Grip-lock and early-release cause claims come from coaching consensus, not research. Present them as coaching consensus.

### 4.5 Hips, brace, kinetic chain, weight shift
- **Top pages:**
  - DGCR: https://www.dgcoursereview.com/threads/brace-leg-and-cracking-the-whip-backhand-drive.143797/ , https://www.dgcoursereview.com/threads/confused-again-by-sequence-of-backhand-hip-turn.146224/
  - discskill snap: https://discskill.com/instruction/basics/throwing/disc-golf-backhand-snap/
  - UDisc vocab: https://udisc.com/blog/post/throw-talk-important-vocab-for-learning-disc-golf-form
  - YouTube: Dynamic Discs "Physics of Form Ep. 4" https://www.youtube.com/watch?v=r3QqipkCTTk (78.3k), Tristan Tanner https://www.youtube.com/watch?v=CHtRPTnzG2E (47.9k)
- **Reddit demand:** brace thread https://www.reddit.com/r/discgolf/comments/1qn1rha/ (68 comments).
- **Gap:** essentially no authoritative text article. This is the best fit for pose-estimation visuals.
- **Facts**
  - Putnam 1993 (above).
  - Tervonen 2025 thesis: braking ground-reaction forces and lead-knee extension velocity associated with launch speed (above, label as thesis).
  - EMG sequence in a standing backhand (Holcomb 2023, ETSU honors thesis, https://dc.etsu.edu/honors/820/ [V]): peak triceps at 15.6%, extensor carpi ulnaris at 21.3%, posterior deltoid at 50.3% of the throw. Label as a thesis with a small sample.
  - UC Davis Sports Biomechanics Lab (Hummel & Hubbard) built a musculoskeletal model of backhand throws (https://research.engineering.ucdavis.edu/biosport/sample-page/test-page-1/frisbee-flight-simulation-and-throw-biomechanics/ [V]).

### 4.6 Forehand / sidearm
- **Top pages and what they miss**

  | Page | Notes |
  |---|---|
  | Innova "Level Up Your Forehand" https://www.innovadiscs.com/tips/how-to-throw-forehands-accurately-far-and-without-injury/ | Includes injury angle |
  | Discmania https://www.discmania.net/blogs/discover/five-ways-to-improve-your-sidearm | Tips |
  | School of Disc Golf (2014) https://schoolofdiscgolf.com/2014/06/03/how-to-throw-sidearm-a-breakdown-of-the-basics/ | Old |
  | Divergent https://divergentdiscs.com/tutorial-forehand-throw/ | Tips |
  | Discount Disc Golf https://discountdiscgolf.com/how-to-throw-a-forehand-disc-golf-disc/ | Tips |
  | YouTube: Big Jerm https://www.youtube.com/watch?v=Qy4FDhqgWEw (157.1k), Robbie C https://www.youtube.com/watch?v=rluQrLJKvyE (46.5k) | Video |

- **Gap:**
  - wobble and OAT diagnosis (in autocomplete)
  - elbow-pain-aware mechanics, without medical claims
  - UDisc has no forehand technique article on its instruction index (first page checked only [U])
- **Reddit demand:**
  - https://www.reddit.com/r/discgolf/comments/1pbnmo8/ (126 comments)
  - https://www.reddit.com/r/discgolf/comments/1nx4lsh/ (93 comments)
- **Facts**
  - Forehand spin and distance correlation (Sasakawa 2018, above).
  - Skilled sidearm throwers pronated the forearm before release; unskilled throwers supinated (Sasakawa & Sakurai 2008, above).
  - Injury survey of 883 players: backhand was the primary throw for 86.2%, forehand 12.7%. **Forehand throwers were more likely to report elbow injuries (P = .014)** (Nelson et al. 2015, Orthop J Sports Med, https://pmc.ncbi.nlm.nih.gov/articles/PMC4622370/ [V]). Use as background only, with no prevention claim.

### 4.7 X-step / run-up / standstill
- **Top pages**
  - Altitude https://altitudediscgolf.com/tips/disc-golf-x-step/
  - Disc Golf Mentor https://discgolfmentor.com/x-step-explained/
  - DiscGolfReport https://discgolfreport.com/how-to-throw-a-disc-golf-disc-using-the-x-step/
  - Ultiworld "Don't Fake Your X-Step" https://discgolf.ultiworld.com/2022/07/26/tuesday-tips-dont-fake-your-x-step/
  - YouTube: Dynamic Discs https://www.youtube.com/watch?v=uSn_ZBnFyMI (82.4k), Discraft https://www.youtube.com/watch?v=5_OcQ04rGL8 (72.6k), Overthrow https://www.youtube.com/watch?v=aWMR1Kf2m3w (35.9k)
- **Reddit demand:**
  - https://www.reddit.com/r/discgolf/comments/1wkqawx/
  - https://www.reddit.com/r/discgolf/comments/1u1q01h/ (82 upvotes)
  - https://www.reddit.com/r/discgolf/comments/1pwcmlx/
- **Gap:**
  - a "when to switch from standstill to x-step" decision guide
  - original footwork diagrams
  - how to film your feet
- **Facts**
  - Tervonen 2025 thesis on the lead leg (above).
  - PDGA stance rule 802.07: at release, at least one supporting point in contact with the lie, none closer to the target than the rear edge of the marker (https://www.pdga.com/rules/official-rules-disc-golf/80207 [V]). The lie is a 20 cm wide by 30 cm deep rectangle (rule 802.05, https://www.pdga.com/rules/official-rules-disc-golf/80205 [V]).

### 4.8 Reach-back
- **Top pages**
  - Greensplatter https://www.greensplatter.com/disc-golf-why-your-backhand-reachback-isnt-big-deal/
  - DGCR https://www.dgcoursereview.com/threads/reachback-low-or-level.126089/
  - UDisc backhand videos (May 2022) https://udisc.com/blog/post/5-great-videos-how-to-throw-backhand-in-disc-golf
  - Ultiworld wide rail https://discgolf.ultiworld.com/2022/07/13/tuesday-tips-throwing-on-the-wide-rail/
  - YouTube: DG Spin Doctor https://www.youtube.com/watch?v=BLp76_3F-g4 (88.4k), Overthrow https://www.youtube.com/watch?v=TAk4zkqfmEs (58.7k), Cam Hoff "The Reachback is Stealing your Distance" https://www.youtube.com/watch?v=BE3QdbxAaXk (16.2k)
- **Reddit demand:** "Don't reach back... Coil!" https://www.reddit.com/r/discgolf/comments/1wjhq0f/
- **Gap:** coaching has shifted from "reach back far" to "coil, don't just reach." No text page resolves the conflict with clear visuals.
- **Facts:**
  - Putnam 1993 sequencing.
  - The guidance hypothesis (below) applies to over-cueing body positions.

### 4.9 Putting
- **Top pages**
  - Infinite Discs spin vs push https://blog.infinitediscs.com/putting-styles-should-you-spin-putt-or-push-putt/
  - Altitude https://altitudediscgolf.com/tips/disc-golf-putting-styles/
  - Greensplatter turbo https://www.greensplatter.com/disc-golf-whats-turbo-putt/
  - Divergent https://divergentdiscs.com/ways-to-putt/
  - Ultiworld https://discgolf.ultiworld.com/2022/09/13/tuesday-tips-build-a-better-putt/
  - YouTube: Wysocki https://www.youtube.com/watch?v=TntB_RweKy4 (358.3k), Gannon https://www.youtube.com/watch?v=6ZM0UpVs-NY (235.2k)
- **Gap:** crowded. Our angle is filming your putt plus the rules (step and jump putts).
  - The "Is Gavin's Step Putt Legal?" thread had 311 comments: https://www.reddit.com/r/discgolf/comments/1vjeion/
  - A rule-change claim also surfaced in research, but **no 2027 putting rule change was verified [U]**. Do not mention one without a PDGA source.
- **Facts**
  - PDGA 806.01: "Any throw made from within 10 meters of the target, as measured from the front of the lie to the base of the target, is a putt."
  - After releasing a putt, the player "must demonstrate full control of balance behind the marker disc before advancing toward the target"; failing to do so costs one penalty throw.
  - Source: https://www.pdga.com/rules/official-rules-disc-golf/80601 [V]. Rules are Rev. Jan 1 2026 and **renumbered**; old 802.04 citations elsewhere are outdated.

### 4.10 Flight numbers and disc selection
- **Top pages**
  - UDisc "Disc Numbers: What They Mean (And What They Don't)" (Sept 9 2025) https://udisc.com/blog/post/disc-golf-disc-numbers-what-they-mean
  - Innova https://www.innovadiscs.com/home/disc-golf-faq/flight-ratings-system/
  - Disc Golf United https://blog.discgolfunited.com/disc-golf-numbers/
  - Disc Nation https://discnation.com/blog/disc-flight-numbers
  - YouTube: JustDisc https://www.youtube.com/watch?v=EeO1_eBP4E4 (342.3k)
- **Gap:** saturated. The only real angle is matching disc speed to your current arm, plus how the Caddie recommends discs.
- **Facts**
  - Innova: the system was "created by Innova co-founder Dave Dunipace."
    - Ranges: Speed 1-14, Glide 1-7, Turn +1 to -5, Fade 0-5.
    - Compare Glide, Turn and Fade only between discs of the same Speed.
    - Source: https://www.innovadiscs.com/disc-golf-discs/flight-numbers-made-simple/ [V]
  - Innova definitions [V]:
    - Speed: "the rate at which a disc can travel through the air"
    - Glide: "ability to maintain loft"
    - Turn: tendency to "turn over or bank to the right (for RHBH throws) during the initial part of the flight"
    - Fade: "tendency to hook left (for RHBH throws) at the end of the flight"
  - UDisc:
    - The system was finalized in 2001 and first published in Innova's 2002 catalog.
    - Numbers are not standardized across brands (MVP makes 14.5-speed discs; Latitude 64 makes speed-15 discs). The PDGA does not regulate flight numbers.
    - Discraft uses a separate stability rating from -3 to 3.
    - Source: UDisc article above [V]
  - Conflict: a sponsored PDGA article says the numbers were introduced "in the 1990s" (https://www.pdga.com/news/what-do-numbers-disc-golf-disc-mean) [U]. Prefer the 2001/2002 dating with attribution.
  - PDGA Technical Standards (https://www.pdga.com/technical-standards/guidelines [V]):
    - maximum 200 g and no more than 8.3 g per cm of diameter
    - rim width at most 2.6 cm
    - diameter 21-30 cm
    - flexibility at most 27 lb
  - Aerodynamics: CL/CD and pitching moment; the "S-shaped" flight comes from the pitching moment changing sign plus gyroscopic precession (Kamaruddin, Potts & Crowther 2018, above [V]).

### 4.11 Grip (power vs fan) and beginner backhand
- **Top pages**
  - DiscGolfReport grips https://discgolfreport.com/disc-golf-grips-everything-you-could-possibly-want-to-know/
  - Tee Shop https://www.teeshopusa.com/blogs/the-blog/disc-golf-grip-styles-explained-which-one-should-you-use
  - TruePar https://truepardiscgolf.com/blogs/disc-golf-grip/grip-types
  - UDisc beginner videos https://udisc.com/blog/post/5-great-videos-how-to-throw-in-disc-golf-beginners
  - YouTube: Gannon grip https://www.youtube.com/watch?v=3IOdSrrei_Y (231.3k), Ricky Wysocki beginner https://www.youtube.com/watch?v=N00BfNwc7ng (400.3k)
- **Gap:** grip lock and grip pressure as causes of early or late release.
- **Facts:** the thumb-position study (Koch et al. 2024, above). This is the only peer-reviewed grip-related data found.

### 4.12 Drills and field work
- **Top pages**
  - discgolfnow "50 Best Drills" https://discgolfnow.com/50-best-disc-golf-drills/ (dominant)
  - Innova field work https://www.innovadiscs.com/disc-golf-pro-tips/how-field-work-can-make-you-a-better-disc-golfer/
  - Divergent https://divergentdiscs.com/disc-golf-practice-routines/
  - YouTube: Overthrow "Types of Field Work" https://www.youtube.com/watch?v=ED3V6lvcLYU (45.5k)
- **Gap:** drills mapped to a diagnosed fault ("if your video shows X, do Y"), plus a practice structure grounded in motor-learning research.
- **Reddit demand:**
  - https://www.reddit.com/r/discgolf/comments/1swniz0/ (90 comments)
  - "Is paid coaching worth it?" https://www.reddit.com/r/discgolf/comments/1tc8too/
- **Facts**
  - Guidance hypothesis: augmented feedback "can have negative effects on motor skill learning if it is provided too frequently or in a form that is too easy to use" (Anderson et al. 2005, citing Salmoni, Schmidt & Walter 1984, https://pmc.ncbi.nlm.nih.gov/articles/PMC1780106/ [V]).
    - Use it to recommend reviewing video in batches, not after every throw.
    - Salmoni et al. 1984, Psychological Bulletin 95(3):355-386, doi 10.1037/0033-2909.95.3.355 [V metadata].
  - External focus of attention (the effect of a movement) generally beats internal focus (the body movement itself) (Wulf 2013 review, Int Rev Sport Exerc Psychol 6(1):77-104, doi 10.1080/1750984X.2012.723728 [S summary]).
  - PDGA practice-throw rule 809.03: a practice throw during a round costs one penalty throw (https://www.pdga.com/rules/official-rules-disc-golf/80903 [V]). Relevant to "don't practice mid-round in a tournament."

### 4.13 How far / how fast (benchmarks)
- **Top pages**
  - Radius Disc Golf (Jun 3 2026; skill-band ranges with no cited source) https://radiusdiscgolf.com/stories/how-far-should-you-throw
  - DGCR https://www.dgcoursereview.com/threads/how-far-is-average-with-proper-technique.125617/
  - Noah Sachs https://noahsachs.substack.com/p/driving-distance
  - YouTube: Dynamic Discs "How Far Can Normal People Throw?" https://www.youtube.com/watch?v=GkVsln1_VL8
- **Gap:** no real dataset of distance or mph by rating.
  - **We cannot fill it honestly either:** DGFA does not measure distance or disc speed.
  - Do not publish invented benchmarks.
  - The Infinite Discs 2019 survey figure ("over 50% throw 251-350 ft") is secondhand only [U].
- **Usable facts**
  - World records (above).
  - Lizotte's 2014 record of 263.20 m (https://www.pdga.com/its-official-lizottes-new-world-records [V]).
  - Farthest ace: 186.23 m by Caleb Hall, Aug 21 2022 (https://www.guinnessworldrecords.com/world-records/633202-farthest-disc-golf-ace [V]).
- **Recommendation:** fold a short "what's realistic" section into the distance article rather than writing a standalone page. Alternatively, do an original-data piece on **fault frequency** (see brief 13), which DGFA can measure.

### 4.14 Training apps
- **Full app research** (prices are from App Store and official pages on 2026-10-02; re-verify before publishing)

  | App | What it does | Price (US) | Hardware | Body/form analysis | Platforms | Source |
  |---|---|---|---|---|---|---|
  | Disc Golf Form Analyzer | AI written breakdown, pose skeleton graded vs coach ideal (BH and FH), 3D throw and AR, Coach chat, Caddie, drills | Free trial, then $39.99/yr | Phone | Yes | iOS, Android | https://apps.apple.com/us/app/disc-golf-form-analyzer/id6755727208 (4.3 stars / 52 ratings on fetch date) |
  | Disc-i (formerly Disc.ai) | Pose analysis vs pro ranges; BH, FH, putt; scores arm path, brace, coil, posture; paid pro overlays | $6.99/mo or $69.99/yr | Phone | Yes (closest competitor) | iOS, Android | https://apps.apple.com/us/app/disc-i/id6447535006 , https://www.disciapp.com/ (4.4 / 61) |
  | ScoreSensei | Skeletal tracking vs elite form, plus voice scoring and round coaching | IAP $3.99-$49.99, periods unclear [U] | Phone | Yes | iOS (site claims Android [U]) | https://apps.apple.com/us/app/scoresensei-disc-golf/id6758869856 (3.4 / 5) |
  | Snapdisc | Slow-mo, side-by-side with pros, pose angle overlay | IAP $1.99-$8.99 | Phone | Basic pose | iOS, iPad, Mac | https://apps.apple.com/us/app/snapdisc-disc-golf-form-app/id6471839863 (4.4 / 10) |
  | Formero | Human coaches review your videos | Undisclosed [U] | Phone | Human | iOS | https://apps.apple.com/lb/app/formero/id6470127092 |
  | OnForm | Generic manual video analysis | From about $9.99/mo [U] | Phone | Manual tools only | iOS, Android, web | https://onform.com/pricing/ |
  | TechDisc | Sensor disc: speed, spin, nose, launch, hyzer, wobble; simulator | $299.99 disc; app free, $4.99 or $9.99/mo tiers | Sensor disc | No (disc data) | iOS, Android, web | https://shop.techdisc.com/collections/all , https://shop.techdisc.com/pages/features-pricing |
  | RipReader | Camera "radar gun": speed, spin, distance | Pro $24.99/yr; Premium $9.99/mo or $99.99/yr | Phone | No | iOS, Mac | https://apps.apple.com/us/app/ripreader-disc-golf-radar-gun/id6760834017 (4.5 / 68) |
  | UDisc | Scoring, 17k+ courses, GPS, stats | Free; Pro $29.99/yr | Phone (+watch) | No | iOS, Android, watch | https://apps.apple.com/us/app/udisc-disc-golf/id1072228953 (4.9 / 67K), https://help.udisc.com/en/articles/10705193-purchasing-managing-udisc-pro-subscription |
  | Radius | AI disc recommendations, 3D maps, rating, putting drills | Free; Pro $6.99/mo or $39.99/yr | Phone | No | iOS, Android, web | https://www.radiusdiscgolf.com/subscription (4.1 / 42) |
  | Upsi | Free scoring, ratings, social, offline | Free; premium IAP $1.99-$19.99 | Phone | No | iOS, Android | https://www.upsiapp.com/ |
  | Disc Golf Metrix | Competition scoring, leagues | Free for players | Phone | No | iOS, Android, web | https://apps.apple.com/us/app/disc-golf-metrix/id6760411299 |
  | DiscScout | GPS throw tracker, caddie, bag | Pro / lifetime IAP, prices vary [U] | Phone | No | Apple only | https://apps.apple.com/us/app/discscout-disc-golf-tracker/id6621185498 |

- **Discontinued tools** (useful context for "what happened to Coach's Eye"):
  - Hudl Technique: acquired by OnForm in May 2021 and discontinued (https://www.onform.com/post/onform-acquires-hudl-technique-app-from-hudl).
  - Coach's Eye: shut down in Sept 2022 (https://onform.com/blog/onform-vs-coachs-eye/ [S], a competitor's page).
- **Not found as a live disc golf product:** "Radius" turned out to be a caddie/stats app, not form analysis. DG Pocket Coach (dgpocketcoach.com) was waitlist/web-only per the landing CLAUDE.md as of July 2026; re-check its status.
- **Existing listicles (none cover form analysis):**
  - Disc Golf Fanatic https://discgolffanatic.com/best-disc-golf-apps/
  - Disc Golf Galore (updated Jul 28 2026) https://golfdisc.golf/articles/the-best-disc-golf-apps-of-2025-a-comprehensive-guide-for-players
  - Dude Clothing (2019) https://www.dudeclothing.com/best-apps-for-disc-golf/
  - Disc Golf Station https://discgolfstation.com/5-disc-golf-app-reviews_b_72.html
  - DGCR thread https://www.dgcoursereview.com/threads/best-disc-golf-apps.104224/
  - Pitch the form-analysis gap to these publishers too (outreach, not just our own post).

### 4.15 Shared fact bank (participation, injuries, motor learning, pose accuracy)
- **UDisc 2026 Disc Golf Growth Report** (covers 2025; https://udisc.com/disc-golf-growth-report [V]):
  - 17,287 courses in 99 countries; 11,165 in the US.
  - 3 new courses per day in 2025.
  - 89% of courses are free to play.
  - 21.2 million rounds logged in UDisc in 2025.
  - "86% growth in annual participation since 2020."
  - 2M+ app users.
  - Average round lasts 1 h 33 min.
  - Caveat: these are UDisc app data, and their representativeness is debated (https://www.dgcoursereview.com/threads/2025-udisc-growth-report-growth-in-disc-golf-participation-or-just-udisc-usage.180927/).
- **UDisc country count** (https://udisc.com/blog/post/every-country-with-a-disc-golf-course [V], Mar 17 2026): Finland has 1,118 courses for about 5.5 million people; the US holds nearly 65% of the world's courses.
- **PDGA 2025 Year-End Demographics** (index https://www.pdga.com/demographics; PDF https://www.pdga.com/files/final_v2_2025_pdga_year_end_demographics.pdf):

  | Measure | 2025 | 2024 |
  |---|---|---|
  | Active members | 115,140 | 126,132 |
  | New members | 20,740 | - |
  | Sanctioned events | 10,580 | - |
  | PDGA course listings | 11,551 | - |

  **[U]** The PDF font is garbled, the figures were decoded by hand, and one researcher read a different breakdown. Verify by eye before publishing. The PDGA FAQ (older) says "108,000+ active members" (https://www.pdga.com/faq-page [V]). The membership page says "100k+" (https://www.pdga.com/membership).
- **Injuries:**
  - 883-player survey: more than 81% reported a disc golf injury; elbow (325), shoulder (305) and back (218) were most common (Nelson et al. 2015, https://pmc.ncbi.nlm.nih.gov/articles/PMC4622370/ [V]). This is a self-selected online survey, so do not present the 81% as a population rate.
  - A Danish study of 105 players found 13.3% prevalence, mainly shoulder (31%) and elbow (20%) (Rahbek & Nielsen 2016, https://pubmed.ncbi.nlm.nih.gov/26900508 [V]).
- **Video feedback and modeling:**
  - Observational-learning meta-analysis: mean effect 0.77 on movement form/dynamics vs 0.17 on outcome (Ashford, Bennett & Davids 2006, J Motor Behavior 38(3):185-205, https://pubmed.ncbi.nlm.nih.gov/16709559/ [V]). Watching a model helps form more than results. Good support for ideal-form comparison.
  - Systematic review: video feedback "seems to be more effective than solely verbal feedback" (Mödinger, Woll & Wagner 2022, German J Exercise & Sport Research, doi 10.1007/s12662-021-00782-y [S]).
  - Video works best paired with specific cues, especially for novices (Rothstein & Arnold 1976 [S]; Kernodle & Carlton 1992, J Motor Behavior 24:187-195 [S]). Supports "video + a specific fix + a drill."
  - Meta-analysis: verbal plus visual feedback vs verbal only showed a small effect of 0.21 (Rhoads et al. 2014, Athletic Insight [S]). Use for honest framing: video helps, but it is not magic.
- **Pose estimation accuracy:**
  - OpenPose, AlphaPose and DeepLabCut joint centres are "not yet consistently comparable to marker-based motion capture"; hip and knee differences were about 30-50 mm (Needham et al. 2021, Sci Rep, https://pmc.ncbi.nlm.nih.gov/articles/PMC8526586/ [V]).
  - OpenCap: 4.5 degree mean absolute joint-angle error (above).
  - BlazePose: 33 keypoints (above).
  - Use these honestly in the "how AI form analysis works" piece.

---

## 5. Prioritized article briefs

**Priority order**
- **Tier 1 (publish first):** briefs 1-4
- **Tier 2:** briefs 5-10
- **Tier 3:** briefs 11-14

**Conventions for every brief**
- Each brief has an answer-first opener, a named author, at least one original visual (our clip, a skeleton frame, or a diagram), a "last updated" date, and an ownership disclosure wherever DGFA is recommended.
- **FAQ sections are fine for readers and AI extraction**, but expect no Google rich result (section 7).

---

### Brief 1. How to Film Your Disc Golf Throw for Form Analysis (Angles, Settings, Mistakes)

**Queries**
- Primary: "how to film disc golf form"
- Secondary:
  - "best angle to film disc golf throw"
  - "disc golf form slow motion"
  - "disc golf form check video"
  - "how to record disc golf drive"
  - "film disc golf throw iPhone"

**Intent:** informational how-to; high commercial adjacency.

**Opener idea:** Film from two angles: directly behind you, looking down the target line, and side-on, square to your chest at the plant. Keep the phone at hip height, about 15 to 25 feet away, in landscape, with your whole body and the disc in frame through the follow-through. Use slow motion (120 or 240 fps) in good light. Each angle reveals different faults, so here is what to look for in each.

**Outline (H2s)**
1. The short answer: two angles, phone settings, framing
2. Which angle shows which fault (table: rounding, early release, hip lead, plant, nose angle limits)
3. Phone settings: iPhone and Android slow-mo, frame rate vs shutter, why variable frame rate matters for timing
4. Distance, height, framing and light checklist
5. Common filming mistakes (portrait, too close, cropped feet, backlit, zoomed digital video)
6. What to do with the clip: self-review, a Form Check post, or an app
7. FAQ

**Facts to cite**
- Pueo 2016 on motion blur (https://www.redalyc.org/pdf/3010/301049620005.pdf).
- BlazePose: 33 keypoints, real time on a phone (https://arxiv.org/abs/2006.10204).
- OpenCap: 4.5 degree joint-angle error, multi-phone (https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1011462).
- r/discgolf Form Check volume (our archive count, described as our own analysis).
- Ashford et al. 2006 on modeling and form (https://pubmed.ncbi.nlm.nih.gov/16709559/).

**DGFA fit:**
- The app is angle-aware: it accepts front, behind and side filming.
- Pose Estimation grades against an ideal form.
- 3D Throw lets you spin the view to check angles a single camera misses.
- Honest note: one camera still cannot measure nose angle precisely.

**Internal links:** briefs 2, 3, 4, 12.
**Table:** yes (angle vs fault). **FAQ:** yes.

---

### Brief 2. How to Stop Rounding Your Backhand (and How to Spot It on Video)

**Queries**
- Primary: "how to stop rounding disc golf"
- Secondary:
  - "disc golf rounding fix"
  - "what is rounding in disc golf"
  - "rounding drill disc golf"
  - "why do I round my backhand"

**Intent:** informational, problem-solving.

**Opener idea:** Rounding is when your arm swings around your body on a curved path instead of pulling the disc across your chest in a straight line, which bleeds power and sprays the disc right. It usually comes from pulling too early with the arm, before your hips and shoulders have turned, or from swaying away from the target in the backswing. Fix it by letting the body lead and keeping the elbow and disc close on the pull. You can confirm it in one frame of rear-view video.

**Outline (H2s)**
1. What rounding is (original diagram: straight vs rounded pull path)
2. How to see it on your own video (which angle, which frame)
3. The 4 common causes
4. Drills that fix each cause
5. How long it takes to fix (no invented timelines; frame it as practice structure)
6. FAQ

**Facts to cite**
- Putnam 1993 on sequencing.
- Sasakawa & Sakurai 2008: same release speed, more spin and distance.
- Innova Common Throwing Errors (link to it as further reading, do not paraphrase it closely).
- The guidance hypothesis, for how often to review video.

**DGFA fit:**
- Pose Estimation detects "rounding" as a named fault against the coach's ideal form, from behind or front angles.
- The Drills library supplies the drill.
- Show a real skeleton-overlay frame.

**Internal links:** 1, 3, 5, 9.
**Table:** cause to drill. **FAQ:** yes.

---

### Brief 3. How to Throw Farther in Disc Golf: Fixes by Distance Plateau

**Queries**
- Primary: "how to throw farther disc golf"
- Secondary:
  - "how to get more distance disc golf"
  - "stuck at 300 feet disc golf"
  - "disc golf distance tips backhand"
  - "standstill distance disc golf"

**Intent:** informational, high volume.

**Opener idea:** Most amateurs gain distance from cleaner sequencing, more spin and a flatter nose angle, not from more arm effort. Research on disc throwers found skilled and unskilled players released the disc at nearly the same speed, but the skilled group spun it faster and threw it about 75% farther. Start by finding which link in your chain is leaking. Here are the most common leaks by plateau.

**Outline (H2s)**
1. The physics in plain words: speed, spin, nose angle, launch angle
2. Under 250 ft: grip, disc choice, standstill basics
3. 250 to 350 ft: sequencing, reach-back vs coil, brace
4. Beyond 350 ft: run-up timing, nose angle, OAT
5. Disc choice for your arm (link to brief 10)
6. Records and realistic expectations
7. FAQ

**Facts to cite**
- Sasakawa & Sakurai 2008.
- Sasakawa 2018 (forehand spin correlation).
- Koch et al. 2024 (thumb position).
- TechDisc launch and nose angle guidance (attributed as manufacturer guidance).
- Guinness world record of 338 m.
- Tervonen 2025 (labeled as a thesis).

**DGFA fit:** an LLM Analysis "main issue" plus Pose Estimation shows which leak you have. Do NOT claim added feet.

**Internal links:** 2, 4, 5, 6, 7, 10.
**Table:** plateau to most likely leaks. **FAQ:** yes.

---

### Brief 4. Best Disc Golf Training Apps in 2026: An Honest Comparison (From the Team That Makes One)

**Queries**
- Primary: "best disc golf apps"
- Secondary:
  - "disc golf form analysis app"
  - "disc golf training app"
  - "TechDisc alternative"
  - "disc golf form analyzer review"
  - "UDisc vs"

**Intent:** commercial investigation.

**Opener idea:** The best disc golf app depends on the job: UDisc for scoring and courses, TechDisc if you want precise disc data and can spend $299.99 on a sensor disc, and a video form-analysis app such as Disc Golf Form Analyzer or Disc-i if you want to see what your body is doing. We make Disc Golf Form Analyzer, so we have kept this comparison to published features and prices, dated October 2026.

**Outline (H2s)**
1. Disclosure and how we compared
2. Quick picks by goal (table)
3. Form analysis apps (DGFA, Disc-i, ScoreSensei, Snapdisc, Formero, OnForm)
4. Throw measurement (TechDisc, RipReader)
5. Scoring and course apps (UDisc, Upsi, Disc Golf Metrix)
6. Caddie and strategy apps (Radius, DiscScout, DGFA Caddie)
7. What happened to Coach's Eye and Hudl Technique
8. FAQ

**Facts to cite**
- Prices and features from each official page (section 4.14 links).
- UDisc Growth Report figures.
- Coach's Eye and Hudl Technique shutdown sources.

**DGFA fit:** central, and must be disclosed. Lead with where competitors win: UDisc for scoring, TechDisc for disc metrics.

**Internal links:** 1, 12, 2.
**Table:** yes (core). **FAQ:** yes.
**[LAWYER]** review before publishing. Re-verify prices monthly and show an "updated" date.

---

### Brief 5. Nose Up, Off-Axis Torque and Early Release: How to Diagnose the Big Three Backhand Faults

**Queries**
- Primary: "how to fix nose up disc golf"
- Secondary:
  - "off axis torque disc golf"
  - "disc golf early release"
  - "disc golf grip lock"
  - "disc wobble disc golf"

**Intent:** informational, problem-solving.

**Opener idea:** These three faults look alike in the air: the disc balloons, wobbles or flips early. They have different causes, though. Nose up comes from a wrist and disc angle that tips the front edge up, OAT comes from a wrist roll or body tilt during the pull, and early release comes from letting go before the hit point (often from grip pressure). Here is how to tell them apart from flight and video, and the honest limits of what a phone can see.

**Outline (H2s)**
1. Symptoms by flight (table)
2. Nose angle: what it is and why it matters (aerodynamics)
3. OAT: what it is and what to look for in the frames after release
4. Early release and grip lock
5. What video can and cannot measure (vs TechDisc)
6. Drills
7. FAQ

**Facts to cite**
- Kamaruddin, Potts & Crowther 2018 (pitching moment).
- TechDisc metric definitions.
- Koch et al. 2024 (grip and thumb).
- Needham et al. 2021 (pose limits).

**DGFA fit:**
- The early release fault is detected.
- 3D Throw at 1/4 speed for the release window.
- Honest: no nose-angle measurement.

**Internal links:** 1, 2, 3, 11.
**Table:** yes. **FAQ:** yes.

---

### Brief 6. Hips, Brace and Weight Shift: The Disc Golf Kinetic Chain Explained

**Queries**
- Primary: "disc golf hip rotation"
- Secondary:
  - "disc golf brace leg"
  - "hip shoulder separation disc golf"
  - "disc golf weight shift"
  - "disc golf kinetic chain"

**Intent:** informational, intermediate.

**Opener idea:** In a good backhand the hips start turning toward the target while the shoulders are still coiled. The front leg then plants and braces, and energy passes up the chain to the arm and disc in sequence. This proximal-to-distal pattern is the standard model in throwing biomechanics. Most "all arm" throws are a chain that fires out of order or a front leg that never stops the body.

**Outline (H2s)**
1. The chain in order (original diagram)
2. Hips lead: what it looks like on video
3. The brace: what research says
4. Weight shift: back leg to front leg
5. Common breakdowns and drills
6. FAQ

**Facts to cite**
- Putnam 1993.
- Tervonen 2025 (thesis; lead knee r = 0.781 with launch speed).
- Holcomb 2023 EMG sequence (thesis).
- UC Davis Hummel and Hubbard musculoskeletal model.

**DGFA fit:**
- "Hips not leading" and "poor weight shift" are detected faults.
- Skeleton overlay frames.
- 3D side-by-side comparison of two throws.

**Internal links:** 2, 3, 7, 8.
**Table:** optional. **FAQ:** yes.

---

### Brief 7. Reach-Back vs Coil: What Your Backswing Should Actually Do

**Queries**
- Primary: "disc golf reach back"
- Secondary:
  - "disc golf reach back timing"
  - "reach back too far disc golf"
  - "disc golf coil"
  - "wide rail reach back"

**Intent:** informational.

**Opener idea:** A good reach-back is the result of turning your shoulders away from the target, not a separate arm movement. Reach back far with your arm while your torso stays open, and you have created distance without stored energy, plus a longer path to round. Aim for a full shoulder coil, with the disc roughly level and close to your chest line, then let the hips start the pull.

**Outline (H2s)**
1. Why coaching changed from "reach far" to "coil"
2. What a good reach-back looks like from behind and from the side
3. Common mistakes: high, low, arm-only, too early
4. Timing with standstill vs x-step
5. Drills
6. FAQ

**Facts to cite**
- Putnam 1993.
- Ashford 2006 (model demonstration improves form).
- Wulf external focus (cue the disc's path, not body parts).

**DGFA fit:** "No reach-back" is a detected fault, with ideal-form overlay comparison.

**Internal links:** 2, 6, 8.
**FAQ:** yes.

---

### Brief 8. Standstill or X-Step? Footwork Guide and When to Switch

**Queries**
- Primary: "disc golf x step"
- Secondary:
  - "how to x step disc golf"
  - "standstill vs x step"
  - "disc golf run up"
  - "disc golf footwork beginner"

**Intent:** informational.

**Opener idea:** Learn a clean standstill first. An x-step only adds distance if you can already hit the same power position from a standstill, and a rushed run-up usually makes form worse before it makes it better. Here is a step-by-step x-step, a simple test for when you are ready to switch, and how to film your feet to check it.

**Outline (H2s)**
1. Standstill first: why
2. The x-step step by step (original footwork diagram)
3. The "ready to switch" test
4. Common mistakes (walking backwards, faking the x, drifting off line)
5. Stance rules on the tee and at a lie (PDGA 802.05 and 802.07, paraphrased)
6. FAQ

**Facts to cite**
- PDGA 802.05 and 802.07.
- Tervonen 2025 (lead leg).
- Reddit standstill threads (as evidence of a common question; no quotes needed).

**DGFA fit:** Pose Estimation plant and weight-shift faults; film side-on.

**Internal links:** 1, 3, 6.
**Table:** yes (step by step). **FAQ:** yes.

---

### Brief 9. Disc Golf Forehand (Sidearm) Basics: Grip, Mechanics and Fixing Wobble

**Queries**
- Primary: "how to throw a forehand disc golf"
- Secondary:
  - "disc golf forehand form"
  - "disc golf forehand grip"
  - "forehand wobble"
  - "sidearm disc golf tips"

**Intent:** informational.

**Opener idea:** A good forehand is a body throw with a short, fast wrist and forearm snap at the end, not an arm flick. Lead with your hips, keep your elbow close to your side, and keep the disc flat or slightly nose down. Wobble usually means too much arm and too little spin. Research on forehand throws found distance tracked closely with spin rate.

**Outline (H2s)**
1. Grip options
2. Mechanics step by step
3. Wobble and OAT on forehand
4. Elbow-friendly mechanics (no medical claims; cite injury data as context only)
5. Drills
6. FAQ

**Facts to cite**
- Sasakawa 2018 (spin and distance correlation).
- Sasakawa & Sakurai 2008 (pronation in skilled throwers).
- Nelson et al. 2015 (forehand and elbow injury association, P = .014; background only).

**DGFA fit:** forehand Pose Estimation is live, graded vs ideal forehand form.

**Internal links:** 3, 5, 1.
**FAQ:** yes.

---

### Brief 10. Disc Golf Flight Numbers Explained (and How to Pick Discs for Your Arm)

**Queries**
- Primary: "disc golf flight numbers explained"
- Secondary:
  - "what do disc golf numbers mean"
  - "speed glide turn fade"
  - "best discs for beginners"
  - "disc stability explained"

**Intent:** informational.

**Opener idea:** Flight numbers are four manufacturer ratings: Speed (1-14), Glide (1-7), Turn (+1 to -5) and Fade (0-5). They describe how a disc flies for a right-handed backhand thrown with enough power. Innova co-founder Dave Dunipace created the system, and it is not standardized: brands rate differently and the PDGA does not regulate it. The practical rule is that most players throw lower-speed discs farther than high-speed drivers until their arm speed catches up.

**Outline (H2s)**
1. The four numbers (table)
2. Why numbers differ between brands (and Discraft's stability rating)
3. Matching speed to your arm
4. Beginner bag of 3 to 5 discs
5. Disc legality basics (PDGA tech standards)
6. FAQ

**Facts to cite**
- Innova pages (both).
- UDisc Sept 2025 article.
- PDGA technical standards.
- Kamaruddin et al. 2018 (S-curve physics).
- Note the 1990s vs 2001 dating conflict, or pick the dated source.

**DGFA fit:** DGFA Caddie manages your bag and recommends discs per hole. Keep the mention light.

**Internal links:** 3, 4, 14.
**Table:** yes. **FAQ:** yes.

---

### Brief 11. Disc Golf Putting Form: Spin, Push, Spush and Turbo Putts Compared

**Queries**
- Primary: "disc golf putting form"
- Secondary:
  - "spin putt vs push putt"
  - "how to putt disc golf"
  - "straddle putt"
  - "disc golf putting tips"

**Intent:** informational.

**Opener idea:** There is no single correct putting style. Push putts use less spin and a straighter, floaty line that many players find more forgiving in close. Spin putts use wrist snap for a flatter, faster line that holds up better in wind and at longer range. The spush sits between the two. Choose by your miss pattern and distance, and remember that inside 10 meters PDGA rules require you to show balance behind your marker before stepping forward.

**Outline (H2s)**
1. Styles compared (table)
2. Stance options (staggered, straddle) and the rules
3. Mechanics checkpoints
4. Filming your putt (link to brief 1)
5. Practice routines (block vs random, guidance hypothesis)
6. FAQ

**Facts to cite**
- PDGA 806.01 (10 m putting area and balance) and 802.07 (stance).
- Guidance hypothesis.
- Wulf external focus.
- Do not cite any rule change without a PDGA source.

**DGFA fit:** LLM Analysis covers putts (backhand, forehand and putt analysis per the landing page). Pose grading is backhand and forehand only, so be honest about that.

**Internal links:** 1, 12.
**Table:** yes. **FAQ:** yes.

---

### Brief 12. How AI Disc Golf Form Analysis Works (and What It Can't Do)

**Queries**
- Primary: "AI disc golf form analysis"
- Secondary:
  - "disc golf form analyzer app review"
  - "disc golf form analyzer reddit"
  - "pose estimation sports"
  - "is AI coaching accurate"

**Intent:** informational and commercial investigation. Owns the brand-review queries already in autocomplete.

**Opener idea:** AI form analysis uses a pose-estimation model to find your joints in every video frame. It compares the positions and timing to a reference throw, then turns the differences into a named fault and a fix. Phone-based pose estimation is good at spotting sequencing and position problems. It is less precise than lab motion capture, and it cannot measure disc speed or nose angle the way a sensor disc can.

**Outline (H2s)**
1. The pipeline in plain words (diagram: video, keypoints, comparison, fault, drill)
2. Pose estimation accuracy: what research says
3. 2D vs 3D reconstruction
4. LLM feedback vs measured faults: how they differ
5. Limits and failure cases (bad angle, occlusion, low light, baggy clothes)
6. How to get the best result
7. FAQ

**Facts to cite**
- BlazePose (33 keypoints).
- Needham et al. 2021 (30-50 mm hip and knee error vs mocap).
- OpenCap (4.5 degrees).
- Ashford 2006 (modeling and form).
- Mödinger 2022 (video vs verbal feedback).
- Guidance hypothesis.

**DGFA fit:** the whole article. Disclose ownership and show real screenshots: skeleton overlay, 3D Throw, AR.

**Internal links:** 1, 4, 2.
**Table:** "what AI can / can't detect." **FAQ:** yes.

---

### Brief 13. The Most Common Disc Golf Form Faults: What [N] Analyzed Throws Show (Original Data)

**Queries**
- Primary: "most common disc golf form mistakes"
- Secondary:
  - "disc golf backhand mistakes"
  - "why can't I throw far disc golf"
  - "disc golf form faults"

**Intent:** informational. A linkable original-data piece, the strongest GEO asset (statistics plus originality).

**Opener idea:** To be written only from real DGFA aggregate data, for example: "Across N anonymized backhand throws analyzed by DGFA between [dates], the most frequently flagged fault was X (Y%)." No placeholders get published.

**Outline (H2s)**
1. Method (sample, dates, angle mix, limits)
2. Top faults by frequency (chart)
3. Backhand vs forehand differences
4. Faults that tend to occur together
5. What to do about each (links to briefs 2, 5, 6, 7)
6. Download the data / methodology

**Facts:** our own data. Plus Putnam 1993 for interpretation.

**DGFA fit:** source of the data.

**Pre-publish checks:**
- Privacy policy covers anonymized aggregate use [LAWYER if unclear].
- Sample size is meaningful.
- Do NOT generalize to "all disc golfers."

**Internal links:** all fault briefs.
**Table:** yes, plus a chart.

---

### Brief 14. A Science-Based Disc Golf Practice Plan (Field Work, Drills and Video Review)

**Queries**
- Primary: "disc golf practice routine"
- Secondary:
  - "disc golf field work"
  - "disc golf drills for beginners"
  - "disc golf training program"
  - "how to practice disc golf"

**Intent:** informational.

**Opener idea:** Practice beats play for improving form. Structure it in short blocks with one focus, film a few throws and review them in batches rather than after every throw, and cue the disc's flight rather than your body parts. Motor-learning research shows that constant feedback can make you dependent on it, and that an external focus generally helps learning more than an internal one.

**Outline (H2s)**
1. The principles (guidance hypothesis, external focus, variable practice)
2. A weekly plan template (table)
3. Field work session structure
4. Drills mapped to faults (table linking briefs 2, 5, 6, 7)
5. How often to film and review
6. Don't practice mid-round in tournaments (PDGA 809.03)
7. FAQ

**Facts to cite**
- Salmoni et al. 1984 and Anderson et al. 2005.
- Wulf 2013.
- Kernodle & Carlton 1992 (video plus cues).
- PDGA 809.03.

**DGFA fit:** Drills library, with periodic re-analysis to track change (Compare two throws in 3D).

**Internal links:** 1, 2, 5, 6, 7.
**Table:** yes. **FAQ:** yes.

---

### Optional add-ons
- **"Is disc golf growing? 2026 numbers explained."** Covers PDGA vs UDisc divergence. Good for citations, but off-product.
- **"Disc golf elbow and shoulder pain: what studies show."** High risk, needs [LAWYER] and probably a physio author. Skip unless we have a qualified author.

---

## 6. Internal-link map (hub and spoke)
- **Hub A, "Fix your form":** brief 12 (how analysis works), brief 1 (filming), brief 13 (fault data).
  - Spokes: 2, 5, 6, 7, 8, 9, 11.
- **Hub B, "Throw farther":** brief 3.
  - Spokes: 6, 7, 8, 10, 14.
- **Hub C, "Tools":** brief 4.
  - Spokes: 12, 10 (Caddie).
- Every fault article links to brief 1 ("film it first") and brief 14 ("practice plan").

---

## 7. GEO notes (getting cited by AI assistants)

1. **What the evidence says works.** The GEO paper (Aggarwal et al., KDD 2024, https://arxiv.org/abs/2311.09735 [V]) tested 9 methods:
   - Quotation Addition (about +41% position-adjusted word count)
   - Statistics Addition (about +30-40%)
   - Cite Sources
   - Fluency
   - Keyword stuffing did little or harmed results.
   - Lower-ranked sites gained most: Cite Sources gave the rank-5 site +115%.
   - Take-away for us: put verifiable stats, short attributed quotes and outbound citations in every article.
2. **Google AI Overviews need no special markup.** "There are no additional requirements to appear in AI Overviews or AI Mode." The page must be indexed and snippet-eligible (https://developers.google.com/search/docs/appearance/ai-features [V]). Do not use `nosnippet` or `max-snippet:0` on blog pages.
3. **People-first content and E-E-A-T** (https://developers.google.com/search/docs/fundamentals/creating-helpful-content [V], updated Oct 1 2026):
   - original information and analysis
   - clear authorship ("Who")
   - disclose automation where relevant ("How")
   - no "extensive automation to produce content on many topics"
   - Matches the anti-AI sentiment in 2.3. Use a real author bio with real disc golf experience.
4. **Structured data.**
   - FAQ rich results stopped showing in Google from May 7 2026 (https://developers.google.com/search/docs/appearance/structured-data/faqpage [V]). HowTo rich results were removed in 2023 [S].
   - Keep Article/BlogPosting, Organization, Person (author) and BreadcrumbList JSON-LD. Bing recommends JSON-LD and modular, "snippable" sections (https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers [V]).
   - Our landing page already ships FAQPage schema. It is harmless but no longer produces a Google rich result.
5. **Format.** Bing's guidance (link above) says:
   - make title, H1 and description agree
   - one idea per section
   - use tables and lists
   - avoid putting key facts only in images, accordions or PDFs
   - Do this: answer in the first 2 to 4 sentences of each section. Put FAQ answers in visible HTML, not collapsed-only (our landing FAQ is an accordion, so make sure the text is in the DOM).
6. **Crawlers.** Allow these in `robots.ts` and in Vercel bot protection:
   - OAI-SearchBot (needed to appear in ChatGPT search, https://developers.openai.com/api/docs/bots [V])
   - PerplexityBot (https://docs.perplexity.ai/guides/bots [V])
   - Claude-SearchBot and Claude-User (https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler [V])
   - Bingbot (ChatGPT search draws on Bing; submit the sitemap and use IndexNow)
   - Training bots (GPTBot, ClaudeBot) are a business choice. Allowing them may aid brand recall.
7. **Freshness.**
   - Ahrefs (Jul 28 2025, https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content [V]): AI-cited URLs averaged 1,064 days old vs 1,432 for organic results (25.7% fresher). ChatGPT showed the strongest freshness preference.
   - Show "Last updated" dates.
   - Refresh the apps comparison quarterly.
8. **Ranking still matters, but less than before.**
   - Ahrefs (Jul 21 2025, https://ahrefs.com/blog/search-rankings-ai-citations [V]): 76.1% of AI Overview citations ranked in the top 10.
   - A March 2026 follow-up reportedly found only 38% in the top 10 (https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/ [S]).
9. **Off-site presence.**
   - LLMs cite Reddit and YouTube heavily, but the shares swing: Semrush found ChatGPT's Reddit citation share dropped from about 60% to about 10% in mid-Sept 2025 (https://www.semrush.com/blog/most-cited-domains-ai/ [V]).
   - Disclosed, genuinely useful participation in r/discgolf Form Check threads and YouTube videos with transcripts both help. FTC rules apply (section 3.5).
10. **Entity consistency.**
    - Use one name everywhere: "Disc Golf Form Analyzer (DGFA)" by "Axiom Trinity Labs, LLC".
    - Use the same description of what it does, the same price ($39.99/yr, free trial) and the same feature names (LLM Analysis, Pose Estimation, 3D Throw, DGFA Coach, DGFA Caddie) on the site, App Store, Play and blog.
    - Note: Disc-i was renamed from Disc.ai. Name competitors by their current store names.
11. **llms.txt.** Low cost, unproven. Google says it doesn't use it (https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422). Optional.
12. **Niche-specific.**
    - Assistants answering "how do I fix rounding" tend to cite text pages with a crisp definition, a cause list and a drill.
    - The disc golf web is mostly video and forums, so a well-structured, sourced text page has an unusually good chance of being the extractable answer. This is an inference, not a measured fact [U].

---

## 8. Source list

### Official / primary
- US Copyright Office Circular 33: https://www.copyright.gov/circs/circ33.pdf
- US Copyright Office fair use: https://www.copyright.gov/fair-use/
- USCO AI Part 2 announcement: https://www.copyright.gov/newsnet/2025/1060.html
- 17 USC 107: https://www.law.cornell.edu/uscode/text/17/107
- 15 USC 1125: https://www.law.cornell.edu/uscode/text/15/1125
- Feist v. Rural: https://supreme.justia.com/cases/federal/us/499/340/
- New Kids v. News America: https://openjurist.org/971/f2d/302/new-kids-on-the-block-v-news-america-publishing-inc-usa-new-kids-on-the-block
- FTC Endorsement Guides 2023: https://www.ftc.gov/news-events/news/press-releases/2023/06/federal-trade-commission-announces-updated-advertising-guides-combat-deceptive-reviews-endorsements
- FTC "What People Are Asking": https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking
- FTC Native Advertising guide: https://www.ftc.gov/business-guidance/resources/native-advertising-guide-businesses
- FTC Reviews and Testimonials Rule: https://www.ftc.gov/legal-library/browse/rules/rulemaking-use-consumer-reviews-testimonials
- FTC Substantiation policy: https://www.ftc.gov/legal-library/browse/ftc-policy-statement-regarding-advertising-substantiation
- FTC Health Products guidance: https://www.ftc.gov/business-guidance/resources/health-products-compliance-guidance
- FTC Comparative Advertising (16 CFR 14.15): https://www.ecfr.gov/current/title-16/chapter-I/subchapter-A/part-14
- YouTube Terms: https://www.youtube.com/t/terms
- Apple marketing guidelines: https://developer.apple.com/app-store/marketing/guidelines/
- Google Play badge legal: https://partnermarketinghub.withgoogle.com/brands/google-play/legal-and-trademarks/legal-requirements/
- Creative Commons:
  - CC0: https://creativecommons.org/publicdomain/zero/1.0/
  - Attribution practices: https://wiki.creativecommons.org/wiki/Recommended_practices_for_attribution
- Unsplash license: https://unsplash.com/license
- Pexels license: https://www.pexels.com/license/
- Wikimedia reuse: https://commons.wikimedia.org/wiki/Commons:Reusing_content_outside_Wikimedia
- Frisbee registration: https://uspto.report/TM/72056220/
- Wham-O brand protection: https://wham-o.com/pages/wham-o-brand-protection
- DGA history: https://discgolf.com/disc-golf-education-development/disc-golf-history/
- PDGA:
  - TOS: https://www.pdga.com/tos
  - Rules: https://www.pdga.com/rules
  - 806.01: https://www.pdga.com/rules/official-rules-disc-golf/80601
  - 802.07: https://www.pdga.com/rules/official-rules-disc-golf/80207
  - 802.05: https://www.pdga.com/rules/official-rules-disc-golf/80205
  - 809.03: https://www.pdga.com/rules/official-rules-disc-golf/80903
  - Tech standards: https://www.pdga.com/technical-standards/guidelines
  - Demographics: https://www.pdga.com/demographics
  - FAQ: https://www.pdga.com/faq-page
  - Lizotte record: https://www.pdga.com/its-official-lizottes-new-world-records
- DGPT media policy: https://www.dgpt.com/media-policy/
- Innova:
  - Flight numbers: https://www.innovadiscs.com/disc-golf-discs/flight-numbers-made-simple/
  - FAQ: https://www.innovadiscs.com/home/disc-golf-faq/flight-ratings-system/
  - Record: https://www.innovadiscs.com/team-news/new-world-record-338-meters-thrown-david-wiggins-jr/
- Guinness:
  - Distance: https://www.guinnessworldrecords.com/world-records/66339-flying-disc-distance-men
  - Ace: https://www.guinnessworldrecords.com/world-records/633202-farthest-disc-golf-ace
- UDisc:
  - Growth report: https://udisc.com/disc-golf-growth-report
  - Countries: https://udisc.com/blog/post/every-country-with-a-disc-golf-course
  - Disc numbers: https://udisc.com/blog/post/disc-golf-disc-numbers-what-they-mean
- TechDisc:
  - Metrics: https://techdisc.freshdesk.com/support/solutions/articles/153000074253-techdisc-metrics
  - Shop: https://shop.techdisc.com/collections/all
- Google:
  - AI features: https://developers.google.com/search/docs/appearance/ai-features
  - Helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
  - FAQPage: https://developers.google.com/search/docs/appearance/structured-data/faqpage
- OpenAI bots: https://developers.openai.com/api/docs/bots
- Perplexity bots: https://docs.perplexity.ai/guides/bots
- Anthropic crawlers: https://privacy.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Bing AI search guidance: https://about.ads.microsoft.com/en/blog/post/october-2025/optimizing-your-content-for-inclusion-in-ai-search-answers

### Research
- Sasakawa & Sakurai 2008: https://pubmed.ncbi.nlm.nih.gov/18972880/
- Sasakawa, Umegaki & Sakurai 2018: https://www.tandfonline.com/doi/abs/10.1080/02640414.2017.1344778
- Koch et al. 2024: https://www.sciencedaily.com/releases/2024/10/241022153937.htm (paper: https://pubs.aip.org/aip/adv/article/14/10/105125/3317564/The-effects-of-thumb-position-on-backhand-disc)
- Tervonen 2025 (thesis): https://jyx.jyu.fi/handle/123456789/102903
- Holcomb 2023 (thesis): https://dc.etsu.edu/honors/820/
- Putnam 1993: https://doi.org/10.1016/0021-9290(93)90084-R
- Kamaruddin, Potts & Crowther 2018: https://shura.shu.ac.uk/14521/
- Hummel & Hubbard (UC Davis): https://research.engineering.ucdavis.edu/biosport/sample-page/test-page-1/frisbee-flight-simulation-and-throw-biomechanics/
- Nelson et al. 2015: https://pmc.ncbi.nlm.nih.gov/articles/PMC4622370/
- Rahbek & Nielsen 2016: https://pubmed.ncbi.nlm.nih.gov/26900508
- Anderson et al. 2005 (guidance hypothesis): https://pmc.ncbi.nlm.nih.gov/articles/PMC1780106/
- Salmoni, Schmidt & Walter 1984: doi 10.1037/0033-2909.95.3.355
- Wulf 2013: doi 10.1080/1750984X.2012.723728
- Ashford, Bennett & Davids 2006: https://pubmed.ncbi.nlm.nih.gov/16709559/
- Mödinger et al. 2022: doi 10.1007/s12662-021-00782-y
- Needham et al. 2021: https://pmc.ncbi.nlm.nih.gov/articles/PMC8526586/
- Uhlrich et al. 2023 (OpenCap): https://journals.plos.org/ploscompbiol/article?id=10.1371%2Fjournal.pcbi.1011462
- Bazarevsky et al. 2020 (BlazePose): https://arxiv.org/abs/2006.10204
- Pueo 2016: https://www.redalyc.org/pdf/3010/301049620005.pdf
- Aggarwal et al. GEO: https://arxiv.org/abs/2311.09735

### Industry / SEO studies
- Ahrefs citations vs rankings: https://ahrefs.com/blog/search-rankings-ai-citations
- Ahrefs freshness: https://ahrefs.com/blog/do-ai-assistants-prefer-to-cite-fresh-content
- Semrush most-cited domains: https://www.semrush.com/blog/most-cited-domains-ai/
- SEJ AIO citations drop: https://www.searchenginejournal.com/google-ai-overview-citations-from-top-ranking-pages-drop-sharply/568637/
- Search Engine Land on llms.txt: https://searchengineland.com/google-says-normal-seo-works-for-ranking-in-ai-overviews-and-llms-txt-wont-be-used-459422
- Chase Ashley on search trends: https://chaseashleydiscgolf.substack.com/p/the-decline-ended-in-april

### Competitor and app pages
- Section 4.14 lists the official app page for every app.

### Ranking pages per topic
- Sections 4.1 to 4.13.

### Reddit threads
- Sections 2 and 4. All thread URLs were built from archive IDs, so spot-check that they resolve.
