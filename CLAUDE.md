# WeWin Games — Webinar Registration Landing Page

## Project
Single-purpose squeeze page converting cold Meta ad traffic into webinar registrations for a sports betting affiliate recruitment operation. Two pages, one API route, ship fast.

## Stack
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (no custom CSS files, no component libraries)
- **Deployment:** Vercel
- **Fonts:** `next/font` with Inter — no external font loading
- **Images:** Next.js `<Image>` component only
- **Form:** Server action with progressive enhancement + client-side validation
- **API:** `/api/register` serverless route (POST: `{ name, email, phone, city }`)

## Architecture
```
/app
  /page.tsx                → Landing page (the creative brief)
  /confirmed/page.tsx      → Post-registration confirmation
  /api/register/route.ts   → Serverless form handler
/components
  /ui/                     → Shared UI (form, CTA button, section wrappers)
/lib
  /constants.ts            → Colors, copy, config
/public
  /images/                 → Logo files, bar partner photos
```

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production build (must pass before shipping)
- `npm run lint` — ESLint check
- `npx vercel` — Deploy

## The Creative Brief
**Read `CREATIVE-BRIEF.md` before writing any code.** It is the single source of truth for all copy, section structure, design direction, colors, compliance guardrails, form fields, and technical requirements. Do not deviate from it. If something isn't specified in the brief, make a reasonable choice and note it.

## Visual Reference
**Look at `/reference/mood-target-dj-template.png` before building any UI.** This is the visual energy to match — warm dark backgrounds with depth, golden glow effects, premium nightlife feel. The creative brief Section 3 "Visual Direction — Mood Target" translates this image into specific CSS patterns. Match the feeling, not the layout.

## Critical Constraints
- **Mobile-first.** Every layout decision starts at 375px. Desktop is the afterthought.
- **No navigation.** No hamburger menu, no header links, no footer links. One page, one action.
- **No external scripts.** No jQuery, no Bootstrap, no analytics scripts except a Meta Pixel placeholder comment in `<head>`.
- **Performance:** Target 90+ mobile PageSpeed. First Contentful Paint < 1.5s. Total page weight < 500KB excluding lazy-loaded images. CLS = 0.
- **Compliance:** Never use the word "job" or "employment." Never guarantee specific income. Always qualify earnings with "top performers earn" or "results vary." Include "Must be 21+" in footer.
- **Form must work without JS** — progressive enhancement via server action fallback.

## Form Submission Flow
```
User fills form → Client-side validation → POST to /api/register
  → Server validates → logs to console (GHL API wired later)
  → Returns success → redirect to /confirmed
  → Leave clearly marked TODO comments for: GHL API integration, Meta Pixel events
```

## Design System (from brand assets)
| Token | Value |
|-------|-------|
| `bg-primary` | `#0A0A0A` (near-black) |
| `accent` | `#FFE600` (yellow/gold) |
| `accent-secondary` | `#FF8C00` (orange) |
| `text-primary` | `#FFFFFF` |
| `text-muted` | `#B0B0B0` |
| `cta-bg` | `#FFE600` |
| `cta-text` | `#0A0A0A` |

Headlines: Bold, condensed, uppercase. Body: Clean sans-serif (Inter), high readability on dark backgrounds.

## Logo Files
- `workmark-logo.png` — Page header (horizontal, reads better at mobile sizes)
- `main-logo.png` — Footer / favicon source
- Both have black backgrounds baked in. Works on dark sections. If placed on non-black elements, will need transparent versions.

## What NOT To Build
- No video embeds
- No testimonial carousel or slider
- No cookie consent banner (not needed yet)
- No "learn more" links or secondary CTAs
- No loading spinners on form (instant redirect pattern)
- Do not build a CMS, admin panel, or any backend beyond the single API route

## Placeholders (Wire Later)
Leave clearly marked `// TODO:` comments for these:
- Meta Pixel snippet in `<head>` (`// TODO: Meta Pixel ID — waiting on BM admin access`)
- GHL API call in `/api/register` (`// TODO: Wire GHL API — key pending`)
- Webinar date/time on landing page and confirmation page (`// TODO: Replace with actual date`)
- Zoom link on confirmation page (`// TODO: Replace with actual Zoom link`)
- "Add to Calendar" link on confirmation page

---

## About The Operator (Ted)

I'm not a trained developer. I'm a builder who works with AI coding tools. I've been in sales, management, and marketing for 20 years — auto industry, then home services, now building tech solutions with AI assistance.

**What this means for you:**
- I can read code, understand architecture, and debug with AI help. Don't dumb things down.
- I work in Cursor with Claude Code. I think in systems, not syntax.
- If you're choosing between "clever/elegant" and "readable/obvious," choose readable every time.
- Comment the WHY, not the WHAT. I can read `useState` — tell me why you chose that pattern.
- If a decision could go multiple ways, pick one and leave a comment explaining the tradeoff. Don't ask me.

**Working style:**
- I work in 4-hour blocks with AI assistance. Scope your execution to that.
- I have ADHD. Keep tasks focused. One deliverable at a time.
- If I ask to expand scope mid-build: push back. Finish the current thing first.
- I will overthink and try to make things bigger than they need to be. Keep me honest.

## How To Work On This Project

### Before coding:
1. Read `CREATIVE-BRIEF.md` completely
2. Propose a build plan as a checklist — wait for my OK before executing
3. Plan should be scoped to complete in one 4-hour block

### Build order:
1. Landing page layout + all copy (Section 1-7 from brief)
2. Registration form with client-side validation
3. `/api/register` endpoint (log to console, redirect to /confirmed)
4. Confirmation page
5. Responsive polish pass (375px → 768px → 1280px)
6. Performance audit (Lighthouse, fix anything below 90)

### After building:
- Run `npm run build` — must pass with zero errors
- Run `npm run lint` — must pass clean
- Test form submission end-to-end (submit → API logs → redirect → confirmation displays)
- Test on mobile viewport (375px width)
- Note any deviations from the creative brief

### Use subagents when:
- Researching Tailwind utility classes for specific design patterns
- Investigating Next.js App Router patterns you're unsure about
- Running parallel explorations (e.g., "best way to handle form validation" + "Next.js Image optimization for PNG logos on dark backgrounds")
- Keep the main context focused on building, delegate research to subagents

### Context management:
- This is a small project. One session should complete it.
- If context gets long, compact aggressively but preserve: the build plan, any deviations from the brief, and the list of TODO placeholders.
- Don't read files you don't need. The creative brief and this file are your primary inputs.

## Definition of Done
- [ ] Landing page renders all 7 sections from creative brief
- [ ] Form submits successfully and redirects to /confirmed
- [ ] /api/register logs `{ name, email, phone, city }` to console
- [ ] Confirmation page displays with placeholder date/time/Zoom link
- [ ] Mobile responsive (375px, 768px, 1280px breakpoints)
- [ ] `npm run build` passes
- [ ] `npm run lint` passes
- [ ] All TODO placeholders clearly marked for GHL, Meta Pixel, Zoom link, webinar date
- [ ] Lighthouse mobile score 90+
- [ ] No accessibility violations on form (labels, focus states, error messages)
