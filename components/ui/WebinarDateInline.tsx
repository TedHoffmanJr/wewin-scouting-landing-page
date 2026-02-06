"use client";

import { useState, useEffect } from "react";

const WEBINAR_ISO = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";
const WEBINAR = new Date(WEBINAR_ISO);

/**
 * Inline webinar date display — formats to the visitor's local timezone.
 * Used on the confirmation page in the details table.
 * Outputs something like "Tues, Feb 17 · 8:00 PM EST"
 */
export default function WebinarDateInline() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <span className="text-[#FFF8E7] font-semibold">Loading...</span>;
  }

  const dayOfWeek = WEBINAR.toLocaleDateString("en-US", { weekday: "short" });
  const monthDay = WEBINAR.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
  const time = WEBINAR.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });

  return (
    <span className="text-[#FFF8E7] font-semibold">
      {dayOfWeek}, {monthDay} · {time}
    </span>
  );
}
