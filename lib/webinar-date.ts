/**
 * Single source of truth for the webinar date across the entire site.
 * Reads from NEXT_PUBLIC_WEBINAR_DATE env var (set in .env.local or Vercel dashboard).
 * To change the webinar date: update the env var and redeploy.
 */

const RAW_DATE = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";

/** The webinar Date object — timezone-aware from the ISO string */
export const WEBINAR_DATE = new Date(RAW_DATE);

/**
 * Format the webinar date for display in the visitor's local timezone.
 * Returns something like "Mon, Feb 17 · 8:00 PM EST" adapted to their tz.
 */
export function formatWebinarDate(): string {
  const weekday = WEBINAR_DATE.toLocaleDateString("en-US", { weekday: "short" });
  const month = WEBINAR_DATE.toLocaleDateString("en-US", { month: "short" });
  const day = WEBINAR_DATE.getDate();
  const time = WEBINAR_DATE.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
  return `${weekday}, ${month} ${day} · ${time}`;
}

/**
 * Short format for compact display: "Feb 17"
 */
export function formatWebinarDateShort(): string {
  const month = WEBINAR_DATE.toLocaleDateString("en-US", { month: "short" });
  const day = WEBINAR_DATE.getDate();
  return `${month} ${day}`;
}

/**
 * Time-only format: "8:00 PM EST" (in visitor's local tz)
 */
export function formatWebinarTime(): string {
  return WEBINAR_DATE.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}

/**
 * Day of week: "Tues" or "Mon"
 */
export function formatWebinarDay(): string {
  return WEBINAR_DATE.toLocaleDateString("en-US", { weekday: "short" });
}
