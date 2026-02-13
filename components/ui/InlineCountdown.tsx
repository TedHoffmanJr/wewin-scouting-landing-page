"use client";

import { useState, useEffect } from "react";

const WEBINAR_ISO =
  process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";
const TARGET = new Date(WEBINAR_ISO).getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = TARGET - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

function FlipCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-11 h-12 sm:w-12 sm:h-14 rounded-lg overflow-hidden bg-[#111] border border-[#FFE600]/15 shadow-[0_0_10px_rgba(255,230,0,0.04)]">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#1a1a0a]/80" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 z-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#FFE600]/[0.06]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#FFE600] text-base sm:text-lg font-extrabold tabular-nums tracking-tight">
            {value}
          </span>
        </div>
      </div>
      <span className="text-[#B0B0B0]/70 text-[9px] sm:text-[10px] uppercase tracking-wider font-medium mt-1">
        {label}
      </span>
    </div>
  );
}

/**
 * Inline countdown — centered flip-clock digits with a label.
 * Designed to sit between content sections, not as a sticky bar.
 */
export default function InlineCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderCards = (values: {
    d: string;
    h: string;
    m: string;
    s: string;
  }) => (
    <div className="flex items-center gap-2 sm:gap-3">
      <FlipCard value={values.d} label="Days" />
      <span className="text-[#FFE600]/30 text-base font-bold -mt-4">:</span>
      <FlipCard value={values.h} label="Hrs" />
      <span className="text-[#FFE600]/30 text-base font-bold -mt-4">:</span>
      <FlipCard value={values.m} label="Min" />
      <span className="text-[#FFE600]/30 text-base font-bold -mt-4">:</span>
      <FlipCard value={values.s} label="Sec" />
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-3 py-2">
      <span className="text-[#B0B0B0] text-xs uppercase tracking-widest font-medium">
        Starts In
      </span>
      {!mounted ? (
        renderCards({ d: "--", h: "--", m: "--", s: "--" })
      ) : !timeLeft ? (
        <span className="text-[#FFE600] text-lg font-bold uppercase tracking-tight">
          Live Now!
        </span>
      ) : (
        renderCards({
          d: pad(timeLeft.days),
          h: pad(timeLeft.hours),
          m: pad(timeLeft.minutes),
          s: pad(timeLeft.seconds),
        })
      )}
    </div>
  );
}
