# WeWin Games — Webinar Registration Landing Page (V2 Rebuild)

## Project
Single-purpose squeeze page converting cold Meta ad traffic into webinar registrations. This is a V2 rebuild — the V1 exists and is deployed but needs significant copy, compliance, design, and structural changes. **Do not patch V1. Rebuild from the creative brief below.**

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (no custom CSS files, no component libraries)
- **Deployment:** Vercel
- **Domain:** joinwewingames.com
- **Fonts:** `next/font` with Inter — no external font loading
- **Images:** Next.js `<Image>` component only
- **Form:** Server action with progressive enhancement + client-side validation
- **API:** `/api/register` serverless route (POST: `{ name, email, phone, city }`)

## Architecture
```
/app
  /page.tsx                → Landing page
  /confirmed/page.tsx      → Post-registration confirmation
  /privacy/page.tsx        → Privacy Policy (required for Meta compliance)
  /terms/page.tsx          → Terms of Service (required for Meta compliance)
  /api/register/route.ts   → Serverless form handler
/components
  /ui/                     → Shared UI (form, CTA, section wrappers, testimonial cards)
/lib
  /constants.ts            → Colors, copy, config, testimonial data
/public
  /images/                 → All image assets (see Image Assets section)
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (must pass before shipping)
- `npm run lint` — ESLint check
- `npx vercel` — Deploy

---

## Visual Reference
**Look at `/reference/mood-target-dj-template.png` before building any UI.** This is the visual energy to match — warm dark backgrounds with depth, golden glow effects, premium nightlife feel. The V1 build was too flat and felt AI-generated. V2 must have atmosphere.

---

## ⚠️ META ADS COMPLIANCE — READ THIS FIRST

This landing page will be the destination for Meta ad campaigns under **Employment Special Ad Category** rules. Meta manually reviews landing pages within 48 hours of ad approval. Non-compliance = account suspension. Every copy and design decision must pass these filters:

### NEVER use on this page:
- The words "sports betting," "gambling," "sportsbook," "casino," "wagering"
- Brand names: "DraftKings," "FanDuel," "BetMGM," "Caesars"
- The word "job" or "employment"
- Dollar amounts in headlines (no "$200+" or "$250+" as primary headline text)
- Guaranteed income claims ("You WILL make..." / "Earn $X guaranteed")
- MLM trigger words: "make money," "passive income," "residual income," "recruit," "downline"

### ALWAYS include on this page:
- **Earnings disclaimer** near any earnings reference: "Results not typical. Individual results will vary. No income is guaranteed."
- **Testimonial disclaimer** near testimonials: "Individual results may vary. These testimonials are not necessarily representative of all participants."
- **Privacy Policy** link in footer → `/privacy`
- **Terms of Service** link in footer → `/terms`
- **Business contact info** visible on page: ted@growwithagp.com
- **"Must be 21+"** in footer
- **"Performance-based opportunity"** (not "commission-based")

### Safe phrasing:
- "Top performers have earned..." (past tense, qualified)
- "Ambassadors in active markets have reported earning..." (reported, not guaranteed)
- Use "gaming and entertainment apps/brands" instead of sports betting
- Use "activation events" instead of gambling-related language
- Use "venues and events" instead of "bars" exclusively (broaden the frame)

---

## PAGE STRUCTURE — ALL SECTIONS (Top to Bottom)

### Section 1: HERO (Above the Fold)
**This is the entire conversion decision on mobile.** Everything needed to act must be visible without scrolling on a phone screen.

**Layout:**
- Logo (top-left, small — use wordmark `workmark-logo.png`)
- Hero image (if available: bar activation scene behind/beside headline with warm overlay. If not yet available: use radial gradient background with warm golden spotlight effect)
- Headline
- Subheadline
- Registration form (inline, not behind a button)
- CTA button
- Microcopy below CTA

**Headline:**
> The Side Gig That Pays You to Go Out

**Subheadline:**
> Free training — learn how people are promoting the most popular gaming and entertainment apps at local venues and events. No experience needed.

**Form fields (4 total):**
1. First Name (text, required)
2. Email (email, required)
3. Phone (tel, required)
4. Your City (text, required — used for territory matching)

**CTA button text:**
> SAVE MY SPOT

**Microcopy below CTA:**
> Free call · 45 minutes · Limited spots per session

**Hero image slots:**
- Desktop: `/images/hero-bar-activation-desktop.webp` (1920x1080) — if file exists, use it with warm overlay. If not, use gradient-only background.
- Mobile: `/images/hero-bar-activation-mobile.webp` (750x1000) — same conditional logic.
- Implement as: `{imageExists ? <Image with overlay> : <gradient background>}` or just always use gradient with the image layered behind if present. **Do not break the build if images aren't there yet — use the gradient as reliable fallback.**

---

### Section 2: TRUST STRIP (Stats Bar)
**Position:** Directly below the hero. This is the first thing scrollers see. Builds immediate credibility.

**Layout:** Horizontal row on desktop, 2x2 grid on mobile. Large gold numbers, muted white labels below.

**Stats:**
| Number | Label |
|--------|-------|
| 14+ | Cities Nationwide |
| 100+ | Partner Venues |
| 1,000+ | Activations Completed |

**Design:** Large numbers in `text-[#FFE600]` at `text-4xl`/`text-5xl`. Subtle warm glow behind the section: `bg-gradient-to-b from-[#FFE600]/[0.02] to-transparent`. Generous padding. These numbers should feel oversized and impactful.

**Note:** "Activations Completed" is a soft metric that sounds impressive and is hard to disprove. If Ted provides a more specific verified number, swap it in. Do NOT say "20+ partner bars in Denver" — most visitors aren't from Denver. Keep stats broad and national.

---

### Section 3: THE OPPORTUNITY (What You Get)
**Purpose:** Sell the gig without sounding like a job listing or income promise.

**THIS SECTION MUST NOT LOOK LIKE AI-GENERATED FEATURE CARDS.** The V1 used emoji icons + uniform cards + safe copy. That's the definition of AI slop. Make this section feel editorial, distinctive, and high-energy.

**Design direction:** Instead of 3 identical cards with emojis, try one of these approaches:
- **Option A:** Large bold statement left, supporting detail right, alternating sides per block. More editorial, less SaaS.
- **Option B:** Full-width blocks with a real photo background (bar partner photos with warm overlay) and text overlaid. Each block is a visual moment, not a card.
- **Option C:** Single flowing section with large type callouts and supporting paragraphs. No cards at all.

Pick whichever creates the most visual interest and nightlife energy. The key constraint: it must feel distinctly different from a generic AI landing page.

**Content (3 blocks — rewrite the V1 copy):**

**Block 1: Get Paid Per Activation**
> Top ambassadors in active markets have reported earning $150-250+ on a busy night.* Show up to partner venues, run activations, get compensated per signup.
>
> *Results not typical. Individual results vary based on effort and market.

**Block 2: Your Schedule, Your Call**
> No shifts. No manager. No clocking in. Pick your nights — weekends, game nights, special events. Run activations when it works for you, where it works for you.

**Block 3: 14+ Cities and Growing**
> Active teams in Boston, Denver, Philly, Austin, Chicago, Tampa, and more. Get connected to a territory in your area — or help us open a new one. This isn't a desk gig. It's entrepreneurial.

---

### Section 4: HOW IT WORKS (3 Steps)
**Layout:** Numbered steps (01 → 02 → 03), vertical on mobile. This section was clean in V1 — keep the structure, improve the visual treatment.

| Step | Heading | Description |
|------|---------|-------------|
| 01 | Register for the Free Training | Sign up right here. You'll get a confirmation with everything you need to join the call. |
| 02 | Attend the Live Call | See exactly how it works — live walkthrough, real Q&A. No pitch, no pressure. |
| 03 | Get Connected | Meet a territory leader in your city and start running activations on your own schedule. |

**Design:** Large gold numbers (01, 02, 03) at `text-5xl` or `text-6xl`, bold. Description text to the right on desktop, below on mobile. Subtle connector line or arrow between steps. Generous vertical spacing between each step.

**Consider adding a simple graphic or icon per step** — but NOT generic emoji. If using icons, use minimal line-art style in gold/white on dark. If no icons work, the large numbers alone are sufficient. Don't force it.

---

### Section 5: TESTIMONIALS (Social Proof)
**Purpose:** Counter the "is this legit?" objection. This audience is HIGHLY skeptical. This may be the most-viewed section — visitors scroll here to validate before scrolling back up to register.

**THIS IS A SIGNATURE SECTION. GIVE IT DISTINCTIVE STYLING.**

Do NOT use a basic card carousel or uniform grid. Options:
- Staggered/masonry layout where longer quotes get larger cards and shorter ones are compact
- Alternating card sizes creating visual rhythm
- Cards with subtle warm glow on hover
- Gold quote marks as a design accent element
- City name as a small tag/badge on each card

**Testimonial Data (6 testimonials — use all):**

```json
[
  {
    "quote": "Made $230 last Saturday at Finn McCool's. Didn't even feel like work — just talking sports with people who were already watching the game.",
    "name": "Marcus T.",
    "city": "Denver",
    "type": "earner"
  },
  {
    "quote": "I was skeptical when my boy told me about this. Thought it was some MLM thing. Went to one training call and started that weekend. Boy, was I wrong.",
    "name": "Destiny R.",
    "city": "Austin",
    "type": "skeptic-converted"
  },
  {
    "quote": "Just onboarded two new venues in my area this week. I'm booked Friday and Saturday for the next month. Problem I don't mind having.",
    "name": "Chris M.",
    "city": "Philadelphia",
    "type": "entrepreneur"
  },
  {
    "quote": "The sales portal is lowkey my favorite part. I can see exactly what I'm owed, when it's hitting, which apps are paying what. No chasing anyone for my money.",
    "name": "Jordan K.",
    "city": "Chicago",
    "type": "transparency"
  },
  {
    "quote": "I was driving DoorDash 30 hours a week and my car smelled like Chipotle permanently. Now I work two nights at bars and make more. Not going back.",
    "name": "Aaliyah P.",
    "city": "Tampa",
    "type": "career-switch"
  },
  {
    "quote": "I'm a senior at BU. I do activations Thursday and Saturday nights at spots near campus. It literally pays my rent and I'm 22 so I'd be out anyway.",
    "name": "Jake S.",
    "city": "Boston",
    "type": "college"
  }
]
```

**REQUIRED DISCLAIMER at bottom of testimonials section:**
> *Individual results may vary. These testimonials are not necessarily representative of all participants. Earnings depend on effort, market, and other factors.*

---

### Section 6: YOUR HOSTS
**Purpose:** People want to know who they're getting on a Zoom call with. A face + name + one line of credibility converts more than an anonymous "register now."

**Layout:** Side by side on desktop, stacked on mobile. Circular photo crop with subtle gold border. Name, title, one line bio below each.

**Host 1:**
- Photo: `/images/headshot-jason.webp` (400x400). If not present, use a placeholder circle with initials "JW" in gold.
- Name: Jason Wexler
- Title: Territory Director, WeWin Games
- Bio: "Jason has built ambassador teams across 14+ cities and personally onboarded hundreds of activators."

**Host 2:**
- Photo: `/images/headshot-ted.webp` (400x400). If not present, use placeholder circle with initials "TH" in gold.
- Name: Ted Hoffman Jr.
- Title: Digital Growth Partner, Adaptive Growth Partners
- Bio: "Ted runs the digital recruitment and training pipeline, connecting new ambassadors with opportunities nationwide."

**Design:** Keep this section relatively simple and clean. The circular photos with gold borders should echo the nightlife premium feel. Warm photo treatment (same filter as other photos). Dark background section with subtle gradient.

---

### Section 7: WHAT TO EXPECT ON THE CALL
**Purpose:** Remove unknowns. Tell them exactly what happens so there are no surprises. Also reduces no-shows.

**Content:**

**On the call, you'll:**
- See how the most popular apps are compensating people like you at activation events
- Experience the exact signup process you'll be promoting — live on the call
- Get your questions answered in real-time
- Walk away knowing if this is right for you — zero pressure

**Details grid (2x2 on mobile, 4-across on desktop):**
| Label | Value |
|-------|-------|
| Duration | ~45 min |
| Format | Live Zoom |
| Cost | Free |
| When | Tues, Feb 18 · 7 PM ET |

**Design:** Simple, scannable. The details grid should use subtle card/tile treatment with the same warm dark background differentiation as other sections. Gold accent on the values, muted white on the labels.

**NOTE:** Do NOT say "Learn how sports betting affiliate marketing works" anywhere. Use the compliant framing above.

---

### Section 8: FINAL CTA (Repeat Registration Form)
**Layout:** Same form as the hero, repeated. Same 4 fields, same CTA button.

**Heading:**
> Ready to Learn More? Save Your Spot.

**Microcopy below CTA:**
> Free call · 45 minutes · Limited spots per session

---

### Section 9: FOOTER
- WeWin Games icon logo (`main-logo.png`) — **render at high quality, set `quality={100}` on Image component, ensure source file is at least 2x display size**
- © 2026 WeWin Games. All rights reserved.
- "Must be 21+. Results not typical. Individual results will vary. This is a performance-based opportunity. No income is guaranteed."
- Contact: ted@growwithagp.com
- Links: [Privacy Policy](/privacy) · [Terms of Service](/terms)
- No navigation links. No social links.

---

## ADDITIONAL PAGES

### Privacy Policy (`/privacy`)
Create a standard, simple privacy policy page. Same dark branding as main page. Include:
- What data we collect (name, email, phone, city from the registration form)
- How we use it (to send webinar information, follow-up communications)
- Third parties (data may be shared with GoHighLevel for CRM, Meta for ad tracking via Pixel)
- Data retention (retained for business purposes, can request deletion)
- Contact for questions: ted@growwithagp.com
- Effective date: February 2026
- "We do not sell your personal information."

This does not need to be a lawyer-reviewed masterpiece. It needs to exist, be reasonable, and satisfy Meta's manual review that a privacy policy link is present and functional.

### Terms of Service (`/terms`)
Create a standard, simple terms of service page. Same dark branding. Include:
- This is an informational registration for a free training webinar
- No purchase required, no employment is being offered or implied
- This is a performance-based, independent contractor opportunity — not employment
- Earnings are not guaranteed and vary by individual effort, market, and other factors
- Must be 21 years or older to participate
- We reserve the right to modify or cancel the training at any time
- Contact: ted@growwithagp.com

Same note: needs to exist and be functional for Meta compliance, not be legally bulletproof.

---

## VISUAL DIRECTION — MOOD TARGET

**Reference:** `/reference/mood-target-dj-template.png`

The page should feel like a premium nightlife experience — warm, social, aspirational. Think sports bar at 10pm on a Saturday: golden lighting, energy in the room. NOT corporate conference. NOT startup SaaS. NOT flat material design.

### Background Treatment
- NOT flat `#0A0A0A` everywhere. Use subtle radial gradients for depth and warmth.
- Hero: Radial gradient from warm dark (`rgba(255, 200, 0, 0.03)`) at center to pure black at edges. "Spotlight" feel.
- Between sections: Subtle gradient shifts — warmer dark for content, cooler/pure black for breathing room.

### Lighting and Glow
- Gold/amber accents get a subtle glow: `shadow-[0_0_30px_rgba(255,230,0,0.15)]` on CTA buttons, accent borders, stat numbers.
- Photos get warm overlay: `mix-blend-mode` or semi-transparent amber overlay.
- Body text: Use `#E8E8E8` or `#F0F0F0` instead of pure white to soften the read.

### Form Styling (Critical)
- Dark input fields (`bg-white/5` or `bg-[#1a1a1a]`) with subtle borders (`border-white/10`). **NOT white input boxes.**
- On focus: border transitions to gold (`border-[#FFE600]`) with gold glow (`ring-[#FFE600]/20`).
- CTA button: Solid gold `#FFE600` background, black text. On hover: brighter gold + amplified glow.
- Optional glass-morphism on form container: `backdrop-blur-sm bg-white/[0.02] border border-white/[0.05]`.

### Section Depth
- Generous vertical padding: `py-20` minimum on mobile, `py-28` on desktop. Let the dark breathe.
- Thin accent lines (1px gold, low opacity) as section dividers — short centered lines, not full-width rules.

### Photo Treatment
- All photos get warm color grade: `brightness(0.9) saturate(1.1) sepia(0.1)` or warm gradient overlay.
- Rounded corners (`rounded-xl` or `rounded-2xl`).
- Optional subtle gold border (`border border-[#FFE600]/20`).

### Typography
- Headlines: Bold, tight tracking (`tracking-tight`), uppercase, heavy weight. Warm white (`#FFF8E7`) instead of pure white.
- Body: Inter, clean, readable on dark backgrounds.

### What to AVOID
- Flat, unlit backgrounds (the #1 problem with V1)
- White form inputs on dark pages
- Emoji icons as section graphics (AI slop indicator)
- Blue tones anywhere
- Corporate grid layouts
- Thin, light-weight typography
- Uniform card sizes that scream "template"

---

## DESIGN SYSTEM

| Token | Value |
|-------|-------|
| `bg-primary` | `#0A0A0A` |
| `accent` | `#FFE600` |
| `accent-secondary` | `#FF8C00` |
| `text-primary` | `#FFF8E7` (warm white for headlines) |
| `text-body` | `#E8E8E8` (softened white for body) |
| `text-muted` | `#B0B0B0` |
| `cta-bg` | `#FFE600` |
| `cta-text` | `#0A0A0A` |
| `input-bg` | `#1a1a1a` or `white/5` |
| `input-border` | `white/10` |
| `input-focus` | `#FFE600` |

---

## IMAGE ASSETS

### Available Now
| Asset | File | Usage |
|-------|------|-------|
| Wordmark logo | `workmark-logo.png` | Page header |
| Icon logo (WG) | `main-logo.png` | Footer — **render at quality={100}, ensure crisp** |
| Bar activation photo 1 | `bar-partner-pic-1.jpg` | Opportunity section or social proof |
| Bar activation photo 2 | `bar-partner-pic-2.jpg` | Alternate bar scene |
| Bar activation photo 3 | `bar-partner-pic-3.jpg` | Alternate bar scene |
| Ambassador photo | `ambassador-pg2-pic.jpg` | Section accent |

### Coming Soon (Build With Fallbacks)
| Asset | File | Fallback |
|-------|------|----------|
| Hero bar scene (desktop) | `hero-bar-activation-desktop.webp` | Radial gradient background |
| Hero bar scene (mobile) | `hero-bar-activation-mobile.webp` | Radial gradient background |
| Jason headshot | `headshot-jason.webp` | Circle with initials "JW" in gold on dark |
| Ted headshot | `headshot-ted.webp` | Circle with initials "TH" in gold on dark |
| Sales portal screenshot | `sales-portal-screenshot.webp` | Omit from page until available |

**IMPORTANT:** All "Coming Soon" images must have graceful fallbacks. The page must look complete and professional with only the "Available Now" assets. The hero must work with gradient-only background. The hosts section must work with initial placeholders.

---

## WHAT NOT TO BUILD
- No video embeds
- No cookie consent banner
- No "learn more" links or secondary CTAs
- No loading spinners on form
- No CMS, admin panel, or backend beyond the single API route
- No ambassador PDF embeds or screenshots from WeWin's presentation (the data from those docs is incorporated into the copy above — do not show the raw PDFs)
- No exit-intent popups (Meta explicitly penalizes these)
- No countdown timers (Meta flags fake urgency)
- No auto-playing audio

---

## PLACEHOLDERS (Wire Later)
Leave clearly marked `// TODO:` comments for:
- Meta Pixel snippet in `<head>` (`// TODO: Meta Pixel ID — waiting on BM admin access`)
- Meta Pixel events: `ViewContent` on landing page, `CompleteRegistration` on /confirmed (`// TODO: Fire pixel events once ID is configured`)
- GHL API call in `/api/register` (`// TODO: Wire GHL API — key pending`)
- Webinar date/time (`// TODO: Confirm webinar date — targeting Feb 18, 7 PM ET`)
- Zoom link on confirmation page (`// TODO: Replace with actual Zoom link from Jason`)
- "Add to Calendar" link on confirmation page
- Sales portal screenshot in testimonials section (`// TODO: Add sales portal screenshot when available`)

---

## FORM SUBMISSION FLOW
```
User fills form → Client-side validation → POST to /api/register
  → Server validates → logs to console (GHL API wired later)
  → Returns success → redirect to /confirmed
  → If validation fails: return errors, don't redirect
  → Leave clearly marked TODO for: GHL API integration, Meta Pixel CompleteRegistration event
```

---

## CONFIRMATION PAGE (`/confirmed`)
- Same dark branding, warm glow treatment
- Gold checkmark icon
- "You're Registered!" heading
- Reiterate: What (WeWin Games Live Training), When (Tues Feb 18 · 7 PM ET), Duration (~45 min), Format (Live Zoom), Cost (Free)
- "Check your email for the Zoom link. Mark your calendar — we'll see you there."
- Add to Calendar link (Google Calendar / .ics) — placeholder
- Footer with logo, compliance text, privacy/terms links
- No additional CTAs or navigation

---

## PERFORMANCE REQUIREMENTS
- First Contentful Paint < 1.5s on mobile
- Total page weight < 500KB (excluding lazy-loaded images)
- No layout shift (CLS = 0)
- Form must work without JavaScript (progressive enhancement via server action fallback)
- Target Lighthouse mobile score 90+
- Images: use `loading="lazy"` on everything below the fold, `priority` on hero image only

---

## ABOUT THE OPERATOR (Ted)

I'm not a trained developer. I'm a builder who works with AI coding tools. 20 years in sales, management, and marketing — now building tech solutions with AI assistance.

**What this means for you:**
- I can read code and understand architecture. Don't dumb things down.
- I work in Cursor with Claude Code. I think in systems, not syntax.
- Choose readable over clever. Comment the WHY, not the WHAT.
- If a decision could go multiple ways, pick one and leave a comment explaining the tradeoff.

**Working style:**
- 4-hour blocks with AI assistance. Scope to that.
- ADHD. One deliverable at a time. Push back on scope creep.

---

## BUILD ORDER

1. Landing page layout with all 9 sections, all copy, all compliance elements
2. Testimonials section with distinctive styling (NOT uniform cards)
3. Registration form with client-side validation (dark styled inputs)
4. `/api/register` endpoint (log to console, redirect to /confirmed)
5. Confirmation page
6. Privacy Policy page (`/privacy`)
7. Terms of Service page (`/terms`)
8. Responsive polish pass (375px → 768px → 1280px)
9. Performance audit (Lighthouse, fix anything below 90)

### Use subagents for:
- Researching Tailwind patterns for the testimonial masonry/staggered layout
- Next.js App Router patterns for the new routes (/privacy, /terms)
- Image conditional rendering patterns (graceful fallbacks)

---

## DEFINITION OF DONE
- [ ] Landing page renders all 9 sections with updated copy
- [ ] NO mentions of "sports betting," "gambling," "DraftKings," "FanDuel," or "sportsbook" anywhere
- [ ] NO dollar amounts in the headline
- [ ] Earnings disclaimer appears near every earnings reference
- [ ] Testimonial disclaimer appears below testimonials section
- [ ] Privacy Policy page exists and is linked from footer
- [ ] Terms of Service page exists and is linked from footer
- [ ] Contact email visible on page
- [ ] "Must be 21+" in footer
- [ ] Form submits and redirects to /confirmed
- [ ] /api/register logs `{ name, email, phone, city }` to console
- [ ] Confirmation page displays with placeholder date/time/Zoom
- [ ] All image slots have graceful fallbacks for missing files
- [ ] Footer logo renders crisp (quality={100})
- [ ] Testimonials section has distinctive, non-uniform styling
- [ ] Opportunity section does NOT use emoji icons or uniform AI-slop cards
- [ ] Mobile responsive (375px, 768px, 1280px)
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] All TODO placeholders clearly marked
- [ ] Lighthouse mobile 90+
- [ ] No accessibility violations on form