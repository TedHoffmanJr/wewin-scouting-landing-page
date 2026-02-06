"use client";

import { useState, useEffect } from "react";

const WEBINAR_ISO = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";
const WEBINAR = new Date(WEBINAR_ISO);

/**
 * Displays the webinar date/time formatted to the visitor's local timezone.
 * Renders a compact two-line block: short date on top, day + time below.
 * Used inside the "What to Expect" details grid.
 */
export default function WebinarDate() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // SSR placeholder — avoids hydration mismatch since we don't know the user's tz on the server
  if (!mounted) {
    return (
      <>
        <div className="text-[#FFE600] font-bold text-lg">Loading...</div>
        <div className="text-[#B0B0B0] text-sm">&nbsp;</div>
      </>
    );
  }

  const monthDay = WEBINAR.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  const dayOfWeek = WEBINAR.toLocaleDateString("en-US", { weekday: "short" });

  const time = WEBINAR.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <>
      <div className="text-[#FFE600] font-bold text-lg">{monthDay}</div>
      <div className="text-[#B0B0B0] text-sm">
        {dayOfWeek}, {time}
      </div>
    </>
  );
}
