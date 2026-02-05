# WeWin Games — Landing Page Creative Brief
## Webinar Registration Squeeze Page

**Prepared by:** Ted Hoffman Jr. / Adaptive Growth Partners
**Date:** February 5, 2026
**Status:** Ready for build

---

## 1. THE JOB THIS PAGE DOES

Convert cold Meta ad traffic (gig economy workers, side-hustle seekers) into webinar registrations. One page, one form, one action. The page must answer three questions in under 10 seconds:

1. **What is this?** → A free training call where you learn a new side hustle
2. **What's in it for me?** → Earn $200+ on a busy night at a sports bar
3. **What do I do?** → Fill out 4 fields, show up Tuesday

Nothing else. No navigation. No links out. No "learn more about us" rabbit holes.

---

## 2. AUDIENCE

### Primary: Gig Economy Veteran (25-35)
- Currently driving DoorDash, Uber, Instacart, or similar
- Tired of gas costs, vehicle wear, inconsistent tips
- Understands per-action pay models (they already work on commission)
- Scrolling Instagram/TikTok at 11pm after a shift
- On mobile. Always on mobile.
- Skeptical of "too good to be true" — they've been burned before

### Secondary: Side Hustle Seeker (22-35)
- Browsing for additional income streams
- May have a day job, looking for flexible nights/weekends
- Responds to "no boss, no schedule" messaging
- Also on mobile, also late-night scrollers

### What They Fear
- Another scam / MLM pitch
- Wasting time on something that doesn't pay
- Having to invest money upfront
- Being locked into something

### What They Want
- Concrete dollar amounts (not vague "earning potential")
- Flexibility — work when they want
- Something that doesn't destroy their car
- Social proof that real people are doing this

---

## 3. BRAND IDENTITY

### Colors
| Role | Color | Hex (approximate) |
|------|-------|--------------------|
| Background | Black / Near-black | `#0A0A0A` |
| Primary Accent | Yellow/Gold (the "Win" color) | `#FFE600` |
| Secondary Accent | Orange (gradient elements) | `#FF8C00` |
| Body Text | White | `#FFFFFF` |
| Muted Text | Light gray | `#B0B0B0` |
| Form/CTA background | Yellow/Gold | `#FFE600` |
| CTA text | Black | `#0A0A0A` |

### Typography Direction
- Headlines: Bold, condensed, uppercase — matching the presentation's heavy impact style
- Body: Clean sans-serif, high readability on dark backgrounds
- Suggested: Inter or similar system font for performance (no custom font loading on a squeeze page)

### Logo
- Use the **wordmark version** (wider, horizontal) in the page header — reads better at mobile sizes
- Logo sits top-left, small, doesn't compete with headline
- Logo files: `workmark-logo.png` and `main-logo.png` (both on black backgrounds — may need transparent versions or dark section placement)

### Visual Language
- Dark, high-contrast (sports-bar-at-night energy)
- Diagonal stripe / angular accent elements (from presentation design language)
- Hexagonal photo frames with gold borders (presentation motif — use sparingly)
- Real photos of real people, not stock imagery
- Mobile-first: everything stacks vertically, no side-by-side layouts that break on small screens

### Visual Direction — Mood Target
**Reference image:** See `/reference/mood-target-dj-template.png` — this is the visual energy to match.

The page should feel like a premium nightlife experience — warm, social, aspirational. Think sports bar at 10pm on a Saturday: golden lighting, energy in the room, money being made. NOT corporate conference. NOT startup SaaS. NOT flat material design.

**Background treatment:**
- NOT flat `#0A0A0A` everywhere. Use subtle radial gradients to create depth and warmth.
- Hero section: Radial gradient from warm dark (`rgba(255, 200, 0, 0.03)`) at center fading to pure black at edges. Creates a "spotlight" feel without being obvious.
- Between sections: Subtle gradient shifts — slightly warmer dark for content sections, cooler/pure black for breathing room between them.
- CSS pattern: `bg-gradient-radial from-[#1a1400]/30 to-[#0A0A0A]` or equivalent custom gradient.

**Lighting and glow effects:**
- Gold/amber accent elements should have a subtle glow: `shadow-[0_0_30px_rgba(255,230,0,0.15)]` on CTA buttons, accent borders, and stat numbers.
- Photos should have a warm overlay or golden tint — use `mix-blend-mode` or a semi-transparent amber overlay to unify all photography into the warm palette.
- Avoid harsh white-on-black contrast for body text in content sections. Use `#E8E8E8` or `#F0F0F0` for body copy to soften the read.

**Section depth:**
- Each content section should feel like a distinct "card" floating on the dark background, achieved through very subtle background differentiation (not borders or drop shadows).
- Generous vertical padding between sections: `py-20` minimum on mobile, `py-28` on desktop. Let the dark background breathe. The reference image uses space as a design element.
- Thin accent lines (1px gold, low opacity) as section dividers — not full-width horizontal rules, but short centered lines or corner accents.

**Form styling (critical — this is the conversion point):**
- Dark input fields (`bg-white/5` or `bg-[#1a1a1a]`) with subtle borders (`border-white/10`), NOT white input boxes on a dark page. White boxes break the immersion.
- Placeholder text in muted gray (`text-[#666]`).
- On focus: border transitions to gold (`border-[#FFE600]`) with subtle gold glow (`ring-[#FFE600]/20`).
- CTA button: Solid gold background with black text. On hover: brighter gold + amplified glow. The button should feel like it's lit up.
- Form container can have a very subtle glass-morphism effect: `backdrop-blur-sm bg-white/[0.02] border border-white/[0.05]` — barely visible, but adds depth.

**Stats bar styling:**
- Large numbers in gold (`text-[#FFE600]`), labels in muted white below.
- Numbers should feel oversized and impactful — `text-4xl` or `text-5xl` on mobile.
- Subtle warm glow behind the stats section: `bg-gradient-to-b from-[#FFE600]/[0.02] to-transparent`.

**Photo treatment:**
- All photos (bar partner pics, ambassador photo) get a warm color grade: overlay with `bg-gradient-to-tr from-[#FF8C00]/20 to-transparent` or use CSS filter: `brightness(0.9) saturate(1.1) sepia(0.1)`.
- Rounded corners (`rounded-xl` or `rounded-2xl`), never sharp rectangles.
- Optional: subtle gold border (`border border-[#FFE600]/20`) on photo containers.

**Typography feel:**
- Headlines should feel bold and immediate, not elegant. Tight letter spacing (`tracking-tight`), heavy weight.
- Consider slightly warm white for headlines (`#FFF8E7` instead of pure `#FFFFFF`) to reinforce the golden atmosphere — very subtle.

**What to avoid:**
- Flat, unlit backgrounds with no depth
- White form inputs on dark pages (breaks the mood instantly)
- Sharp geometric shapes or tech-conference aesthetic
- Blue tones anywhere (the reference uses zero blue)
- Corporate grid layouts that feel like a dashboard
- Thin, light-weight typography that feels delicate

---

## 4. PAGE STRUCTURE (Top to Bottom)

### Section 1: HERO (Above the Fold)
**This is the entire conversion decision on mobile.** Everything the visitor needs to act should be visible without scrolling on a phone screen.

**Layout:**
- Logo (top-left, small)
- Headline (large, bold, 6 words or fewer)
- Subheadline (1-2 lines, concrete benefit)
- Registration form (inline, not behind a button)
- CTA button

**Headline direction:**
> Earn $200+ on a Saturday Night

**Subheadline direction:**
> Free training — learn how people are making real money promoting sports betting apps at local bars. No experience needed.

**Why this works:** Speaks in the gig worker's language (shift-based earnings), names the activity (sports betting apps at bars), removes barriers (free, no experience), and the number is specific enough to be credible without being "too good to be true."

**Headline alternatives to test:**
- "Your Bar Nights Could Pay You $200+"
- "Make Money at the Sports Bar This Weekend"
- "A Side Hustle That Doesn't Wreck Your Car"

**Form fields (4 total):**
1. First Name (text)
2. Email (email)
3. Phone (tel)
4. City (text — used for territory matching + targeting data)

**CTA button text:**
> Save My Spot

**Below CTA (microcopy):**
> Free call · 45 minutes · Limited spots per session

---

### Section 2: THE OPPORTUNITY (What You'll Learn)
**Purpose:** For visitors who didn't convert in the hero, give them a reason to keep reading. This is the "what is this" section.

**Layout:** 3-column block on desktop, stacked on mobile. Icon + bold heading + 1-2 line description.

**Three blocks:**

| Icon Concept | Heading | Description |
|-------------|---------|-------------|
| Dollar sign / cash | Earn Per Signup | Get paid $15-25 every time someone signs up through you. Top performers earn $200+ on a busy night. |
| Calendar / clock | Work When You Want | No shifts. No schedules. Show up to partner bars when it works for you — weekends, game nights, whenever. |
| Map pin / location | 14+ Cities Nationwide | Active in Boston, Denver, Philly, Austin, Chicago, and more. Get connected to a team in your area. |

**Design note:** Use the yellow/gold accent for icons or heading text. Keep descriptions in white on dark background. Each block should feel like a card or tile, not a wall of text.

---

### Section 3: HOW IT WORKS (3 Steps)
**Purpose:** Reduce perceived complexity. Make the path from "I'm interested" to "I'm earning" feel short and simple.

**Layout:** Numbered steps (1 → 2 → 3), vertical on mobile.

| Step | Heading | Description |
|------|---------|-------------|
| 01 | Register for the Free Training | Sign up here. You'll get a confirmation with the Zoom link and everything you need. |
| 02 | Attend the Live Call | Walk through the process live. You'll see exactly how it works and get your questions answered. |
| 03 | Start Earning | Get connected to a territory manager in your city and start promoting at local bars on your schedule. |

**Design note:** Large numbers (01, 02, 03) in yellow/gold, aligned left. Description text to the right. Subtle connector line or arrow between steps. This mirrors the numbered layout from the WeWin commission rates flyer.

---

### Section 4: SOCIAL PROOF
**Purpose:** Counter the "is this legit?" objection. This audience is highly skeptical.

**Content options (use what's available):**

**Option A — Stats bar (preferred if numbers are accurate):**
- "10+ states" · "20+ partner bars in Denver alone" · "200+ signups/month at top locations"

**Option B — Testimonial quotes (if Jason can provide):**
- Need: 2-3 short quotes from current/former ambassadors
- Format: "Quote text" — First Name, City
- Example: *"I made $180 my first Saturday. Way better than driving Uber." — Marcus, Denver*

**Option C — Logo trust strip:**
- App logos they partner with: DraftKings, FanDuel, Caesar's, BetMGM
- Framed as "Our ambassadors promote:" with recognizable logos
- This leverages the credibility of known brands

**Design note:** If using stats, put them in a horizontal bar with yellow/gold accent background. If using testimonials, use the speech-bubble style we saw in the mood board research (Instacart pattern). Keep it tight — 2-3 items max.

---

### Section 5: ABOUT THE TRAINING (What to Expect)
**Purpose:** For the visitors who scroll this far, tell them exactly what happens on the call so there are no surprises. Reduces no-shows too.

**Layout:** Simple text block with a subtle background differentiation (slightly lighter dark, or a thin yellow top-border).

**Content:**

**On the call, you'll:**
- Learn how sports betting affiliate marketing works (it's simpler than you think)
- See the exact signup process — live, step by step
- Get your questions answered in real-time
- Walk away knowing if this is right for you — zero pressure

**Details:**
- Duration: ~45 minutes
- Format: Live Zoom call
- Cost: Free
- When: [DATE/TIME — dynamically updated or placeholder for now]

**Design note:** This can be more text-dense than other sections since only engaged visitors reach it. But still keep it scannable — short lines, not paragraphs.

---

### Section 6: FINAL CTA (Repeat Registration Form)
**Purpose:** The visitor has now scrolled through the entire page. Give them one more chance to convert without scrolling back up.

**Layout:** Same form as the hero, repeated. Same 4 fields, same CTA button.

**Heading above form:**
> Ready to Learn More? Save Your Spot.

**Below CTA (repeat microcopy):**
> Free call · 45 minutes · Limited spots per session

---

### Section 7: FOOTER (Minimal)
- WeWin Games logo (small)
- "© 2026 WeWin Games. All rights reserved."
- Required disclosures: "Must be 21+. Results vary. This is a commission-based opportunity."
- No navigation links. No social links. Nothing that takes them off the page.

---

## 5. WHAT THE PAGE DOES *NOT* INCLUDE

- Navigation menu or hamburger menu
- Links to wewingames.com or any external site
- Specific dollar amounts as "guaranteed earnings" (compliance risk)
- The word "job" or "employment" (these are independent contractors/ambassadors)
- Subscription service mentions (that's a future product, not relevant here)
- Video embeds (adds load time, kills mobile performance)
- Multiple CTAs competing (no "learn more" vs "sign up" — only sign up)
- Stock photography of diverse office workers in meetings

---

## 6. COMPLIANCE GUARDRAILS

All copy must avoid:
- Guaranteeing specific income ("You WILL make $X")
- Using the word "job" or implying employment
- Depicting betting as risk-free or a path to financial success (for the end consumer)
- Targeting anyone under 21
- Making unsubstantiated earning claims without qualification

Safe phrasing patterns:
- "Top performers earn..." / "Ambassadors have earned..."
- "Commission-based opportunity"
- "Results vary based on effort and market"
- "Must be 21+"
- Use ranges, not fixed numbers: "$150-250 on a busy night" not "$200 guaranteed"

---

## 7. TECHNICAL SPECS

### Stack
- **Framework:** Next.js (App Router)
- **Deployment:** Vercel
- **Styling:** Tailwind CSS
- **Form handling:** Serverless API route (`/api/register`) → GHL API (wired later)
- **Tracking:** Meta Pixel in `<head>` (placeholder until BM admin access granted)

### Pages
| Route | Purpose |
|-------|---------|
| `/` | Landing page (this document) |
| `/confirmed` | Post-registration confirmation page |
| `/api/register` | Serverless function — receives form data, validates, calls GHL API |

### Form Submission Flow
```
User fills form → Client-side validation → POST to /api/register
    → Server validates → Calls GHL API (create contact + trigger workflow)
    → Returns success → Client redirects to /confirmed
    → If GHL fails: log error, still redirect (don't lose the lead)
```

### For the Coding Agent (Build Instructions)
1. Build the landing page and confirmation page with all copy and styling
2. The `/api/register` endpoint should accept POST with `{ name, email, phone, city }`
3. For now, log the data to console and redirect to `/confirmed` — GHL API key will be wired in later
4. Leave a clearly marked placeholder for the Meta Pixel snippet in the `<head>`
5. All images should use Next.js `<Image>` component for optimization
6. Page must score 90+ on mobile PageSpeed Insights
7. No client-side JavaScript frameworks beyond React (no jQuery, no Bootstrap JS)
8. Fonts: Use `next/font` with Inter or system font stack — no external font loading

### Confirmation Page (`/confirmed`)
- Simple page: "You're registered!" message
- Reiterate date/time/format of the webinar
- "Add to Calendar" link (Google Calendar / .ics download)
- "You'll receive a confirmation email shortly with your Zoom link"
- Same branding as landing page (dark background, yellow accent)
- No additional CTAs or links — they've already converted

### Performance Requirements
- First Contentful Paint < 1.5s on mobile
- Total page weight < 500KB (excluding images, which should be optimized/lazy-loaded)
- No layout shift (CLS = 0)
- Form must work without JavaScript (progressive enhancement) — server action fallback

---

## 8. IMAGE ASSETS AVAILABLE

| Asset | File | Usage |
|-------|------|-------|
| Wordmark logo | `workmark-logo.png` | Page header |
| Icon logo (WG) | `main-logo.png` | Footer / favicon |
| Bar activation photo 1 | `bar-partner-pic-1.jpg` | Social proof / "what it looks like" |
| Bar activation photo 2 | `bar-partner-pic-2.jpg` | Alternate bar scene |
| Bar activation photo 3 | `bar-partner-pic-3.jpg` | Alternate bar scene |
| Ambassador page photo | `ambassador-pg2-pic.jpg` | "The opportunity" section background or accent |

**Note:** Logo files have black backgrounds baked in. For use on the dark page background, this works. If placed on any non-black element, transparent versions will be needed. The bar partner pics and ambassador photo are real — not stock — which is exactly what we want.

---

## 9. ITEMS STILL NEEDED (Not Blockers for Build)

These can be wired in after the page is built:

| Item | Status | Blocking Build? |
|------|--------|-----------------|
| GHL API key | Pending | No — endpoint logs to console for now |
| GHL workflow setup | Not started | No — separate from page build |
| Meta Pixel ID | Waiting on BM admin access from Jason | No — placeholder in code |
| Zoom link for webinar | Pending from Jason | No — placeholder on confirmation page |
| Webinar date/time | Pending from Jason (targeting Feb 18-19, 7-8pm ET) | No — placeholder text |
| Testimonials from ambassadors | Requested from Jason | No — section can use stats bar initially |
| Transparent logo versions | May need to create | No — dark background works with current files |

---

## 10. SUCCESS METRICS (Post-Launch)

| Metric | Target | How We Measure |
|--------|--------|----------------|
| Landing page conversion rate | 20-35% (ad traffic to registration) | GHL contact creation / page visits |
| Mobile page speed score | 90+ | Google PageSpeed Insights |
| Form completion rate | 85%+ of form starters | Analytics event tracking |
| Cost per registration | $8-15 | Meta Ads Manager |
| Show rate (registration → webinar attendance) | 30-45% | Zoom attendance / registrations |

---

*This brief is the single source of truth for the landing page build. The coding agent should be able to build the complete page from this document without additional context.*
