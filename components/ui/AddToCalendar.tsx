"use client";

import { getGoogleCalendarUrl, generateIcsContent } from "@/lib/webinar-config";

export default function AddToCalendar() {
  const googleUrl = getGoogleCalendarUrl();

  function handleICSDownload() {
    const icsContent = generateIcsContent();
    const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wewin-games-training.ics";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
