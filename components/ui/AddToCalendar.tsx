"use client";

const WEBINAR_ISO = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";
const WEBINAR = new Date(WEBINAR_ISO);
const DURATION_MS = 45 * 60 * 1000; // 45 minutes
const END = new Date(WEBINAR.getTime() + DURATION_MS);

const TITLE = "WeWin Games Live Training";
const DESCRIPTION =
  "Free live training — learn how people are promoting the most popular gaming and entertainment apps at local venues and events.";
// TODO: Replace with actual Zoom link from Jason
const LOCATION = "Zoom (check email for link)";

/** Format Date to Google Calendar's required yyyyMMddTHHmmssZ format */
function toGoogleCalFormat(d: Date): string {
  return d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

/** Generate .ics file content */
function generateICS(): string {
  const fmt = (d: Date) =>
    d
      .toISOString()
      .replace(/[-:]/g, "")
      .replace(/\.\d{3}/, "");

  return [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//WeWin Games//Training//EN",
    "BEGIN:VEVENT",
    `DTSTART:${fmt(WEBINAR)}`,
    `DTEND:${fmt(END)}`,
    `SUMMARY:${TITLE}`,
    `DESCRIPTION:${DESCRIPTION}`,
    `LOCATION:${LOCATION}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
}

export default function AddToCalendar() {
  const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(TITLE)}&dates=${toGoogleCalFormat(WEBINAR)}/${toGoogleCalFormat(END)}&details=${encodeURIComponent(DESCRIPTION)}&location=${encodeURIComponent(LOCATION)}`;

  function handleICSDownload() {
    const blob = new Blob([generateICS()], { type: "text/calendar" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wewin-training.ics";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <a
        href={googleUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-[#FFE600] text-[#0A0A0A] font-bold text-sm uppercase tracking-wide px-6 py-3 rounded-lg hover:bg-[#FFF033] transition-all shadow-[0_0_20px_rgba(255,230,0,0.12)]"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zm0-12H5V6h14v2z" />
        </svg>
        Google Calendar
      </a>
      <button
        onClick={handleICSDownload}
        className="inline-flex items-center justify-center gap-2 border border-white/[0.1] text-[#E8E8E8] font-semibold text-sm uppercase tracking-wide px-6 py-3 rounded-lg hover:border-[#FFE600]/30 hover:text-[#FFE600] transition-all"
      >
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
        </svg>
        Download .ics
      </button>
    </div>
  );
}
