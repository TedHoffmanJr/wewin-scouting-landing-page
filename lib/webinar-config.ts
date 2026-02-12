// lib/webinar-config.ts
// Single source of truth for Zoom link, calendar generation, and ICS downloads.
// All values pulled from env vars — update in Vercel dashboard and redeploy to change.

export const webinarConfig = {
  zoomLink:
    process.env.NEXT_PUBLIC_WEBINAR_ZOOM_LINK ||
    "https://us06web.zoom.us/j/84590785058?pwd=dBRhwCWYtnZKSGKLMQ9kZYgr5VVRJJ.1",
  dateDisplay:
    process.env.NEXT_PUBLIC_WEBINAR_DATE_DISPLAY || "Thursday, February 19th",
  timeDisplay: process.env.NEXT_PUBLIC_WEBINAR_TIME_DISPLAY || "7:00 PM EST",
  duration: parseInt(process.env.NEXT_PUBLIC_WEBINAR_DURATION || "45", 10),
  isoStart: process.env.NEXT_PUBLIC_WEBINAR_ISO_START || "20260219T190000",
  isoEnd: process.env.NEXT_PUBLIC_WEBINAR_ISO_END || "20260219T200000",
  meetingId: "845 9078 5058",
  passcode: "608098",
} as const;

/**
 * Generates a Google Calendar event URL.
 * Opens in a new tab — user clicks "Save" in Google Calendar.
 */
export function getGoogleCalendarUrl(): string {
  const { isoStart, isoEnd, zoomLink, meetingId, passcode } = webinarConfig;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "WeWin Games Live Training",
    dates: `${isoStart}/${isoEnd}`,
    details: `Join us for a free 45-minute live training session.\n\nZoom Link: ${zoomLink}\n\nMeeting ID: ${meetingId}\nPasscode: ${passcode}`,
    location: zoomLink,
    ctz: "America/New_York",
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/**
 * Generates an ICS file content string for download.
 * Works with Apple Calendar, Outlook, and any other ICS-compatible app.
 */
export function generateIcsContent(): string {
  const { isoStart, isoEnd, zoomLink, meetingId, passcode } = webinarConfig;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//WeWin Games//Webinar Registration//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    "TZID:America/New_York",
    "BEGIN:STANDARD",
    "TZNAME:EST",
    "TZOFFSETFROM:-0400",
    "TZOFFSETTO:-0500",
    "DTSTART:19701101T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU",
    "END:STANDARD",
    "BEGIN:DAYLIGHT",
    "TZNAME:EDT",
    "TZOFFSETFROM:-0500",
    "TZOFFSETTO:-0400",
    "DTSTART:19700308T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU",
    "END:DAYLIGHT",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `DTSTART;TZID=America/New_York:${isoStart}`,
    `DTEND;TZID=America/New_York:${isoEnd}`,
    "SUMMARY:WeWin Games Live Training",
    `DESCRIPTION:Join us for a free 45-minute live training.\\n\\nZoom Link: ${zoomLink}\\n\\nMeeting ID: ${meetingId}\\nPasscode: ${passcode}`,
    `LOCATION:${zoomLink}`,
    `URL:${zoomLink}`,
    `UID:wewin-webinar-${isoStart}@joinwewingames.com`,
    "STATUS:CONFIRMED",
    "BEGIN:VALARM",
    "TRIGGER:-PT15M",
    "ACTION:DISPLAY",
    "DESCRIPTION:WeWin Games Training starts in 15 minutes",
    "END:VALARM",
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  return lines.join("\r\n");
}
