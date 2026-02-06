export const COLORS = {
  bgPrimary: "#0A0A0A",
  accent: "#FFE600",
  accentSecondary: "#FF8C00",
  textHeadline: "#FFF8E7",
  textBody: "#E8E8E8",
  textMuted: "#B0B0B0",
  ctaBg: "#FFE600",
  ctaText: "#0A0A0A",
  inputBg: "#1a1a1a",
} as const;

// Webinar date is now driven by NEXT_PUBLIC_WEBINAR_DATE env var
// See .env.local and lib/webinar-date.ts for the single source of truth
export const WEBINAR_DURATION = "~45 minutes";

// TODO: Replace with actual Zoom link from Jason
export const ZOOM_LINK = "https://zoom.us/j/placeholder";

export const CONTACT_EMAIL = "hello@joinwewingames.com";

export const TESTIMONIALS = [
  {
    quote:
      "Made more last Saturday at Finn McCool's than I used to make in a full day of deliveries. Didn't even feel like work.",
    name: "Marcus T.",
    city: "Denver",
    type: "earner",
  },
  {
    quote:
      "I was skeptical when my boy told me about this. Thought it was some MLM thing. Went to one training call and started that weekend. Boy, was I wrong.",
    name: "Destiny R.",
    city: "Austin",
    type: "skeptic-converted",
  },
  {
    quote:
      "Just onboarded two new venues in my area this week. I'm booked Friday and Saturday for the next month. Problem I don't mind having.",
    name: "Chris M.",
    city: "Philadelphia",
    type: "entrepreneur",
  },
  {
    quote:
      "The sales portal is lowkey my favorite part. I can see exactly what I'm owed, when it's hitting, which apps are paying what. No chasing anyone for my money.",
    name: "Jordan K.",
    city: "Chicago",
    type: "transparency",
  },
  {
    quote:
      "I was driving DoorDash 30 hours a week and my car smelled like Chipotle permanently. Now I work two nights at bars and make more. Not going back.",
    name: "Aaliyah P.",
    city: "Tampa",
    type: "career-switch",
  },
  {
    quote:
      "I'm a senior at BU. I do activations Thursday and Saturday nights at spots near campus. It literally pays my rent and I'm 22 so I'd be out anyway.",
    name: "Jake S.",
    city: "Boston",
    type: "college",
  },
] as const;
