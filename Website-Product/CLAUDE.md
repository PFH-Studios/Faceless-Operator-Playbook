# CLAUDE.md — The Faceless Operator Playbook
> Context file for Claude Code and AI-assisted work on this product.
> Read this before touching anything in this project.

---

## What This Product Is

**The Faceless Operator Playbook** is a tiered digital product ecosystem sold via Whop.com.

It teaches aspiring entrepreneurs how to build a faceless content business on Instagram and launch a digital product through it — without showing their face, without a personal brand, and without an existing audience.

Three tiers. Three websites. One shared navigation.

---

## Owner

- **Founder:** Paul Holzhauer / PFH Studios
- **Business email:** contact@pfh-games.de
- **Brand:** PFH Studios
- **Creator persona:** OREN (faceless — no last name, no face)

---

## Three Product Tiers

| Tier | Name | Price | URL |
|------|------|-------|-----|
| 1 | Faceless Operator — Basic Access | Free | faceless.pfh-games.de/free |
| 2 | Faceless Operator Playbook | €27 | faceless.pfh-games.de |
| 3 | AI Content Operator Course | €20 | faceless.pfh-games.de/course |

---

## WEBSITES — Full Specification

### Overview

Three separate HTML pages. All hosted on the same Vercel deployment under `faceless.pfh-games.de`. All share the same navigation bar at the top. All use the PFH Studios dark branding. The free tier page is intentionally simpler and less immersive than the paid pages.

---

### SHARED NAVIGATION BAR

Appears at the top of all three pages. Sticky on scroll. Same code block copy-pasted into each HTML file.

**Structure:**
```
[PFH STUDIOS logo/wordmark — left]     [Basic Access] [Playbook] [Course] — right
```

**Design:**
- Background: `#0B0B0B` with `1px solid #1F1F1F` bottom border
- Height: 64px
- Logo: "PFH STUDIOS" in Geist Mono or similar monospace, 13px, letter-spacing 0.15em, color `#FF7A00`
- Nav links: 14px, weight 500, color `#888888` default
- Active page link: color `#FFFFFF`, with a `2px solid #FF7A00` underline
- Hover: color `#FFFFFF`, transition 150ms
- On mobile: hamburger menu, links stack vertically in a drawer

**HTML snippet (shared across all three pages):**
```html
<nav id="site-nav">
  <a href="/" class="nav-logo">PFH STUDIOS</a>
  <div class="nav-links">
    <a href="/free" class="nav-link" id="nav-free">Basic Access</a>
    <a href="/" class="nav-link" id="nav-playbook">Playbook</a>
    <a href="/course" class="nav-link" id="nav-course">Course</a>
  </div>
</nav>
```

Add `class="active"` to the link matching the current page. CSS sets active link to white with orange underline.

---

### WEBSITE 1 — Basic Access (Free)

**File:** `free/index.html`
**URL:** `faceless.pfh-games.de/free`
**Purpose:** Lead magnet landing page. Gets people into the ecosystem. Converts to Tier 2 or Tier 3.
**Style:** Clean and minimal. Less immersive than the paid pages. No parallax, no heavy animations. Honest and direct. Feels like a well-designed product page, not a hype machine.

**Page Sections:**

**Section 1 — Hero**
- Small label above headline: `FREE ACCESS` in orange, caps, letter-spacing 0.2em, 11px
- Headline: `Start here. No cost. No catch.`
- Subline: `Get your first module, two AI lessons, and access to the operator community — free.`
- CTA button: `Claim Free Access →` — links to Whop free product page
- No background animation. Just clean dark background with subtle grain texture overlay (CSS noise filter or SVG filter).

**Section 2 — What You Get (3 cards)**
Card 1 — Community Access
- Icon: simple chat bubble SVG
- Title: `Operator Community`
- Body: `Join a live chat of people building the same system. Ask questions, share progress, get unstuck.`

Card 2 — First Module
- Icon: simple document SVG
- Title: `Module 1 of the Playbook`
- Body: `The full first chapter of the Faceless Operator Playbook — why faceless works in 2026 and the mindset behind the system.`

Card 3 — Two AI Lessons
- Icon: simple play SVG
- Title: `2 Lessons from the AI Course`
- Body: `Lesson 1.1: The Operator vs The User. Lesson 2.1: Competitor Research with Manus AI. Both from the full AI Content Operator course.`

Cards layout: horizontal row on desktop, stacked on mobile. Card style: `background: #111111`, `border: 1px solid #1F1F1F`, `border-radius: 12px`, `padding: 28px`. No hover animation — keep it simple.

**Section 3 — Upgrade Prompt**
- Subtle divider line
- Small text: `Want the full system?`
- Two side-by-side text links (not buttons):
  - `→ Get the Playbook for €27` — links to main page
  - `→ Get the AI Course for €20` — links to course page
- Color: `#555555`, hover to `#FF7A00`

**Section 4 — Footer**
- `PFH Studios · contact@pfh-games.de`
- Three nav links repeated: Basic Access / Playbook / Course
- Color: `#444444`, 13px

**What this page does NOT have:**
- No testimonials (no proof yet at free tier)
- No FAQ
- No countdown timer
- No animated hero
- No video
- No long-form sales copy

---

### WEBSITE 2 — Playbook (€27) — MAIN SITE

**File:** `index.html`
**URL:** `faceless.pfh-games.de`
**Purpose:** Primary sales page. Full cinematic landing page. Converts cold traffic to Tier 2 buyers.
**Style:** Dark, immersive, operator-aesthetic. Heavy typography. Subtle scroll animations. Feels premium without feeling flashy. No neon, no gradients, no hype colors beyond the single orange accent.

**Page Sections:**

**Section 1 — Hero**
- Full viewport height
- Background: `#0B0B0B` with a very subtle radial gradient from `#111111` at center fading to `#0B0B0B` at edges. Add CSS grain texture overlay at 3% opacity.
- Small eyebrow label: `THE FACELESS OPERATOR PLAYBOOK` — orange, 11px, caps, letter-spacing 0.25em
- Main headline (large, two lines):
  ```
  Build a faceless
  business. Sell it.
  ```
  Font: Bold, 72px desktop / 40px mobile. Color: `#FFFFFF`.
- Subheadline (one line, muted):
  `No face. No followers. No personal brand. Just a system.`
  Color: `#666666`, 20px
- CTA button: `Get the Playbook — €27 →`
  Style: `background: #FF7A00`, `color: #000000`, `font-weight: 700`, `padding: 16px 32px`, `border-radius: 8px`
  Hover: `background: #E06900`
- Below CTA: small muted text — `One-time payment. Instant access. No subscription.`
- Scroll-triggered fade-in on all hero elements (staggered, 100ms delay between each)

**Section 2 — The Problem**
- Section label: `THE PROBLEM` — orange, caps, 11px
- Headline: `Most people trying to build online are using the wrong model.`
- Three problem statements in a column, each with a thin orange left border:
  1. `They build a personal brand. They go on camera. They chase followers for months. Then nothing happens.`
  2. `They buy generic guides for €9. Get a PDF with no system. Read it once. Stay stuck.`
  3. `They have the motivation. They're missing the sequence.`
- Subtle entrance animation: each line slides in from left on scroll

**Section 3 — The System (FACELESS OS)**
- Section label: `THE SYSTEM`
- Headline: `Five phases. One operating system.`
- Five phase cards in a vertical list, each expanding on hover or tap:

  Phase 1 — NICHE LOCK
  `Find a niche where money already flows. Score it. Commit. Output: confirmed niche + content angle.`

  Phase 2 — CONTENT ENGINE
  `Stop creating from scratch every day. Use a formula. Output: 30-day content calendar.`

  Phase 3 — AUDIENCE CAPTURE
  `A follower is not a buyer. A DM is. Output: growing lead list and reply rate.`

  Phase 4 — 72-HOUR PRODUCT BUILD
  `Build a digital product from your audience's own language in three days. Output: live product.`

  Phase 5 — LAUNCH SEQUENCE
  `14-day Instagram story sequence that sells for you. Output: first digital product sales.`

  Card style: `background: #111111`, left border `3px solid #FF7A00` on active/hover, else `3px solid #1F1F1F`. Phase number in orange.

**Section 4 — What's Inside**
- Section label: `WHAT YOU GET`
- Headline: `The full system. Every template. Every script.`
- Two-column grid (desktop) / stacked (mobile):

  Left column — Core Playbook:
  - 10 modules covering: why faceless works / niche selection / content engine / audience capture / product build / Whop setup / 14-day launch sequence / AI tools / scaling / long game
  - "60–80 pages. No filler."

  Right column — Bonus Pack:
  - 30 Reel Hook Templates
  - 14-Day Story Script (fill-in-the-blank)
  - Canva Story Template Pack (5 designs)
  - Product Brief Builder (Notion)
  - Faceless Niche Scorecard (Google Sheets)

- Below grid: "Plus access to 5 custom AI tools built around the system." — links to `/free` page for community preview

**Section 5 — Objection Breakers**
- Section label: `COMMON QUESTIONS`
- Six Q&A items in accordion style:
  - No followers → `You don't need followers to sell. You need targeted content that attracts buyers.`
  - Don't know what to sell → `Phase 4 walks you through building a product in 72 hours from your audience's own language.`
  - Too saturated → `Faceless marketing grew 217% year-over-year. The market is expanding, not shrinking.`
  - No time → `Runs on 1–2 hours per day. The templates do the heavy lifting.`
  - Tried before → `You were missing the operator layer — the system behind the content. This is that layer.`
  - Why €27 → `One sale of your own product covers it 2–3x. It pays for itself the first time it works.`

**Section 6 — Market Data**
- Dark card (`#111111`, full width) with four stats in a row:
  - `38%` — of new creator ventures in 2025 are faceless
  - `650K+` — posts tagged #facelessmarketing
  - `217%` — growth in 3 years
  - `€0` — ad spend required for the launch sequence
- Numbers in large orange text. Labels in small white/grey text below.

**Section 7 — CTA Footer Block**
- Full-width dark section
- Headline: `The system is ready. Are you?`
- CTA button: `Get the Playbook — €27 →`
- Muted text: `One-time. Instant access. No subscription.`
- Below: two text links — `→ Start free` / `→ See the AI Course`

**Section 8 — Footer**
- PFH Studios · contact@pfh-games.de
- Links: Basic Access / Playbook / Course / Impressum / Datenschutz
- Legal disclaimer: `Alle genannten Zahlen sind Rechenbeispiele. Individuelle Ergebnisse variieren.`

---

### WEBSITE 3 — AI Content Operator Course (€20)

**File:** `course/index.html`
**URL:** `faceless.pfh-games.de/course`
**Purpose:** Course sales page. Same immersive style as the Playbook page. Different headline system and content.
**Style:** Same dark operator aesthetic as Website 2. Slightly more structured — course pages benefit from a clear curriculum layout.

**Section 1 — Hero**
- Eyebrow: `THE AI CONTENT OPERATOR COURSE` — orange, caps, 11px
- Headline:
  ```
  Replace manual content work
  with AI systems.
  ```
  72px desktop / 40px mobile, bold, white
- Subheadline: `47 lessons. 10 modules. Every tool mapped to every job in the production pipeline.`
- CTA: `Get the Course — €20 →`
- Below CTA: `One-time payment. Instant access. Lifetime updates.`
- Same staggered fade-in entrance animation as Website 2

**Section 2 — Who This Is For**
- Section label: `FOR OPERATORS WHO`
- Three statements (large, white, one per line with a thin orange dash prefix):
  - `— Are already making content but doing it manually`
  - `— Want to produce more with less time`
  - `— Need to know which AI does which job — and in what order`

**Section 3 — The Stack**
- Section label: `TOOLS COVERED`
- Headline: `Every tool has a job. This course defines them.`
- Tool grid — 2 columns, each tool card showing:
  - Tool name (white, bold)
  - Job in the stack (muted, one line)

  Tools: Manus AI / Claude / Claude Code + Remotion Skill / Whisperflow / ElevenLabs / HeyGen / Midjourney / Leonardo AI / Runway / Suno AI / CapCut / Canva / Buffer / Notion

  Card style: `background: #111111`, `border: 1px solid #1F1F1F`, `border-radius: 8px`, `padding: 16px 20px`. Tool name in white. Role in `#555555`. Subtle orange dot or small accent element.

**Section 4 — Course Curriculum**
- Section label: `CURRICULUM`
- Headline: `10 modules. 47 lessons.`
- Accordion list of all 10 modules. Each expands to show lesson titles:

  Module 1 — The Operator Mindset (5 lessons)
  Module 2 — Research & Ideation (5 lessons)
  Module 3 — Script Writing with AI (7 lessons)
  Module 4 — Voice & Audio Production (4 lessons)
  Module 5 — Visual Production with AI (5 lessons)
  Module 6 — Automated Video Editing — Remotion Skill in Claude Code (7 lessons)
  Module 7 — Distribution & Platform Optimisation (4 lessons)
  Module 8 — Performance Analysis and Iteration (4 lessons)
  Module 9 — Full Production Workflows (5 lessons)
  Module 10 — Advanced AI Operator Techniques (5 lessons)
  Bonus — Tool Reference Sheet

  Accordion default: all collapsed. Click/tap to expand. Orange arrow rotates on open.

**Section 5 — What Makes This Different**
- Section label: `WHY THIS COURSE`
- Three comparison cards:

  Card 1 — `Not a basics course`
  `Every lesson is use-case first. You learn a tool because it solves a specific production problem — not because it exists.`

  Card 2 — `The Remotion Skill module`
  `No other course at this price covers Claude Code + Remotion Skill for automated video rendering. Script in, MP4 out.`

  Card 3 — `YouTube links included`
  `For deep dives on each tool, we link directly to the best existing YouTube tutorials. No padding. No repetition.`

**Section 6 — Four Production Workflows**
- Section label: `WHAT YOU CAN DO AFTER`
- Four workflow cards:
  1. The 30-Minute Reel — Whisperflow → Claude → ElevenLabs → HeyGen → CapCut
  2. The Research-to-Content Session — 90 minutes → 5 pieces of content
  3. The Automated Reel — Script in → Remotion renders → Done
  4. The Launch Content Series — 7 scripts → batched → scheduled

**Section 7 — Includes Everything**
- Note block (orange left border, dark card):
  `This course is built on top of the Faceless Operator Playbook system. If you don't have the Playbook yet, the AI Pack includes both. But if you already have it, the course is the next layer.`
- Text link: `→ See what's in the Playbook`

**Section 8 — CTA Footer Block**
- Headline: `The tools exist. Now learn to use them in the right order.`
- CTA: `Get the Course — €20 →`
- Muted: `One-time. Instant access. Lifetime updates.`
- Links: `→ Start free` / `→ Get the Playbook`

**Section 9 — Footer**
Same as Website 2 footer.

---

## WEBSITE BUILD INSTRUCTIONS FOR CLAUDE CODE

### File structure
```
frontend/
  index.html              ← Website 2 (Playbook, €27)
  free/
    index.html            ← Website 1 (Basic Access, Free)
  course/
    index.html            ← Website 3 (Course, €20)
  shared/
    nav.css               ← Shared navigation styles
    base.css              ← Shared CSS variables and resets
    nav.js                ← Mobile hamburger menu logic
```

### Build order
1. Build `shared/base.css` first — CSS variables, reset, typography, button styles
2. Build `shared/nav.css` + `shared/nav.js` — shared navigation component
3. Build `free/index.html` — simplest page, use it to test shared nav works
4. Build `index.html` (Playbook) — full cinematic treatment
5. Build `course/index.html` — same treatment as Playbook but course curriculum

### Active nav state
Each page sets its own active link. Use a small inline script at the bottom of each HTML file:
```html
<script>
  document.getElementById('nav-playbook').classList.add('active'); // change per page
</script>
```

### Performance rules
- No external JS frameworks. Vanilla JS only.
- All animations via CSS `@keyframes` and `IntersectionObserver` for scroll triggers.
- Font loading: use `<link rel="preconnect">` for Google Fonts. One font family max per page.
- Images: SVG icons only, no bitmap images unless a product mockup is needed.
- Target: Lighthouse score above 90 on mobile.

### Animations (Playbook + Course pages only — NOT Free page)
- Hero elements: `opacity: 0` → `opacity: 1`, `translateY(20px)` → `translateY(0)`, staggered 100ms
- Section labels: slide in from left on scroll enter
- Phase/accordion cards: subtle scale `1.0` → `1.01` on hover
- CTA button: `background` transition 150ms on hover
- Stats section: numbers count up from 0 when scrolled into view (vanilla JS counter)
- Scroll trigger: use `IntersectionObserver` with `threshold: 0.15`

### Free page — NO animations except:
- Simple `opacity: 0` → `opacity: 1` fade on page load (single transition, 300ms, no stagger)
- Card border changes to orange on hover only

### Whop links
Replace these placeholders with actual Whop URLs when store is live:
- `[WHOP_FREE_URL]` — Tier 1 free product link
- `[WHOP_PLAYBOOK_URL]` — Tier 2 €27 product link
- `[WHOP_COURSE_URL]` — Tier 3 €20 product link

---

## Product Architecture

### Positioning Statement
The Faceless Operator Playbook is the monetization system for aspiring entrepreneurs who want to build an income stream online without building a personal brand. Unlike generic faceless marketing guides, it uses the Shadow Operator framework so you can launch and sell a digital product in 14 days — without showing your face, without an audience, and without prior business experience.

### Target Audience
- Age: 16–30
- Aspiring entrepreneurs who consume entrepreneurship content but haven't made their first €100 online
- People who want online income but don't want to appear on camera or build a personal brand

### Core Problem Solved
They believe you need a personal brand, a face, and a following to make money online. This product proves you don't — and gives them the exact system to do it without any of those things.

### Transformation Promise
- **Before (Point A):** No online income. Believes a face, following, or unique idea is required to start.
- **After (Point B):** Running a faceless content system with a live digital product generating passive sales.

---

## The Signature Method: FACELESS OS

| Phase | Name | Output |
|-------|------|--------|
| 1 | Niche Lock | Confirmed niche + content angle |
| 2 | Content Engine | 30-day content calendar |
| 3 | Audience Capture | Growing DM list and reply rate |
| 4 | 72-Hour Product Build | Live product on Whop |
| 5 | Launch Sequence | First digital product sales |

---

## Full Product Contents

### Core PDF (60–80 pages, 10 modules)

| Module | Title |
|--------|-------|
| 1 | Why Faceless Works in 2026 |
| 2 | Niche Lock Protocol |
| 3 | The Content Engine |
| 4 | Audience Capture System |
| 5 | The 72-Hour Product Build |
| 6 | Platform Setup: Whop |
| 7 | The 14-Day Story Launch Sequence |
| 8 | AI Tools for Content Production |
| 9 | Scale and Repeat |
| 10 | The Long Game |

### Bonus Files
- 30 Reel Hook Templates (Notion)
- 14-Day Story Script Template (Google Doc, fill-in-the-blank)
- Canva Story Template Pack (5 designs)
- Product Brief Builder (Notion)
- Faceless Niche Scorecard (Google Sheets)

---

## Pricing & Platform

| Tier | Product | Price | Platform |
|------|---------|-------|----------|
| 1 | Basic Access | Free | Whop.com |
| 2 | Playbook | €27 one-time | Whop.com |
| 3 | AI Course | €20 one-time | Whop.com |

---

## Branding

```css
--bg-primary:    #0B0B0B;
--bg-card:       #111111;
--bg-input:      #242424;
--accent:        #FF7A00;
--accent-hover:  #E06900;
--text-primary:  #FFFFFF;
--text-secondary:#888888;
--text-muted:    #555555;
--border:        #1F1F1F;
--success:       #22C55E;
--radius:        12px;
```

Rules:
- Dark background everywhere. Never white.
- Orange is the only accent color.
- No gradients except subtle radial on hero sections of paid pages.
- No shadows — use borders instead.
- Mobile-first. All pages fully functional at 375px width.
- Grain texture overlay: CSS filter or SVG `feTurbulence` at low opacity (3–5%) on paid pages only.

---

## Objection Stack

| Objection | Counter |
|-----------|---------|
| No followers | You don't need followers to sell. You need targeted content that attracts buyers. |
| Don't know what to sell | Phase 4 walks you through building a product in 72h from audience language. |
| Too saturated | Faceless marketing grew 217% YoY. The market is expanding. |
| No time | Runs on 1–2 hours per day. Templates do the heavy lifting. |
| Tried before | You were missing the operator layer — the system behind the content. |
| Price €27 | One sale of your own product covers it 2–3x. Pays for itself the first time it works. |

---

## Launch System

### 7-Day Content Warm-Up

| Day | Format | Objective |
|-----|--------|-----------|
| 1 | Reel | Curiosity — belief-breaking idea |
| 2 | Carousel | Belief audit — collect audience language |
| 3 | Reel | Proof of concept — market data |
| 4 | Carousel | Framework reveal — FACELESS OS |
| 5 | Reel | Objection killer |
| 6 | Reel + Stories | Launch day — open cart |
| 7 | Post + Stories | Close — social proof, urgency |

### 14-Day Story Launch Sequence
- Phase 1 (Days 1–3): Warm Up
- Phase 2 (Days 4–9): Value Delivery — ends every day with *"Be ready tomorrow at [Drop Time], limited access."*
- Phase 3 (Days 10–14): Open Cart → Proof → Objections → 24h warning → Close

---

## Short-Form Video Scripts (7 Shorts)

**Short 1 — The Hook (15s)**
You don't need followers to make money online. You don't need to show your face. You don't need a personal brand. You just need a system. Most people don't have one. I built one. It's called the Faceless Operator Playbook. Link in bio.

**Short 2 — The Stat Bomb (20s)**
38% of all new creator income ventures in 2025 are run by people you've never seen. There are accounts with under 60,000 followers that have made over $300,000. Over 650,000 posts on Instagram are tagged faceless marketing right now. The people doing this aren't lucky. They have a system. I documented that system into a 30-page playbook. €27. Link in bio.

**Short 3 — The Belief Breaker (30s)**
You think you need an audience to sell a digital product. You don't. You think you need to be on camera for people to trust you. You don't. You think you need a unique idea. You don't. You need a niche that people already spend money in. You need content that pulls the right people in. And you need a product that solves something specific. That's the whole system. I put all of it into one playbook. It's €27. Everything you need to make your first sale online without showing your face once.

**Short 4 — The Framework Breakdown (45s)**
Here's the 5-step system I use to build a faceless online business. Step one — Niche Lock. Pick a niche where money already flows, not just where people follow. Step two — Content Engine. Stop creating from scratch every day. Use a formula. Step three — Audience Capture. A follower is not a buyer. A DM is. Your content needs to move people into conversation. Step four — 72-Hour Product Build. Take what your audience is already asking for and build a digital product around it in three days. Step five — Launch Sequence. Run a 14-day Instagram story sequence that sells for you without any ad spend. I packaged this entire system into a playbook. €27. Link in bio.

**Short 5 — The Objection Killer (30s)**
No followers? You don't need them. The system builds the audience and the product at the same time. No idea what to sell? Your audience tells you. Every comment and DM is a product brief. No time? This runs on one hour a day. The templates do the thinking. No experience? That's the point of having a system. The Faceless Operator Playbook gives you every step, every script, and every template. €27. Link in bio.

**Short 6 — The Contrast Close (25s)**
Two types of people trying to make money online. Type one spends months building a personal brand, going on camera, trying to go viral, and never sees a sale. Type two builds a faceless content system, launches a digital product in two weeks, and makes their first income without a single person knowing their name. The difference isn't talent. It's the model. The playbook for model two is €27. Link in bio.

**Short 7 — The Close (20s)**
If you watched any of my content this week and you're still not making money online — this is why. You have the motivation. You don't have the system. The Faceless Operator Playbook is 30 pages. Five phases. Every template included. Your first digital product, your first sale, without showing your face once. €27. Link in bio. Last 48 hours at this price.

---

## Lipsync Video Workflow

1. Generate audio via ElevenLabs (MP3)
2. Prepare OREN character image (frontal or 3/4 view, clean background)
3. Upload to HeyGen → lipsync → export 9:16
4. Edit in CapCut — captions, dark background card, PFH Studios branding
5. Post

---

## Revenue Model

| Tier | Price | Target Sales | Revenue |
|------|-------|-------------|---------|
| Free | €0 | 200 signups | €0 (lead pool) |
| Playbook | €27 | 100 sales | €2,700 |
| Course | €20 | 50 sales | €1,000 |
| **Total** | | | **€3,700** |

Upsell path: Free → Playbook (DM after 3 days) → Course (thank-you page)

---

## Key Market Data (Use in Copy)

- 38% of all new creator monetization ventures in 2025 are faceless
- Accounts with under 60K followers have generated $300K+
- 650,000+ posts tagged #facelessmarketing on Instagram
- Faceless content market grew 217% in 3 years
- 72% of Gen Z viewers care more about content quality than creator visibility

---

## Legal Requirements

- Impressum required on all three websites (footer)
- Datenschutzerklärung required on all three websites (footer)
- EU Widerrufsrecht exclusion checkbox required at Whop checkout for Tier 2 + Tier 3
- Income disclaimer in footer: `Alle genannten Zahlen sind Rechenbeispiele. Individuelle Ergebnisse variieren.`
- Gewerbeanmeldung required before first sale (Gewerbeamt Altötting, guardian co-signature)

---

## What Claude Should Help With in This Project

- Building all three websites (HTML/CSS/JS, no frameworks)
- Building shared navigation component
- Writing and editing PDF module content
- Building template files (hooks, captions, DM scripts)
- Generating story copy for the 14-day launch sequence
- Writing Whop product descriptions and sales copy
- Iterating on short-form video scripts
- Building the five custom Whop apps (see CUSTOM_APPS.md)

---

*PFH Studios — contact@pfh-games.de*
*Websites: faceless.pfh-games.de*