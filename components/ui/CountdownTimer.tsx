"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WEBINAR_ISO = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";
const WEBINAR_ISO_END = process.env.NEXT_PUBLIC_WEBINAR_ISO_END || "";
const ZOOM_LINK = process.env.NEXT_PUBLIC_WEBINAR_ZOOM_LINK || "";

const TARGET_START = new Date(WEBINAR_ISO).getTime();
// ISO_END is compact format (20260219T200000) — parse it if present, else assume 2hr window
const TARGET_END = WEBINAR_ISO_END
  ? (() => {
      const s = WEBINAR_ISO_END.replace("T", "");
      const year = parseInt(s.slice(0, 4));
      const month = parseInt(s.slice(4, 6)) - 1;
      const day = parseInt(s.slice(6, 8));
      const hour = parseInt(s.slice(8, 10));
      const min = parseInt(s.slice(10, 12));
      return new Date(year, month, day, hour, min).getTime();
    })()
  : TARGET_START + 2 * 60 * 60 * 1000; // fallback: 2hr window

type Phase = "before" | "live" | "ended";

function getPhase(): Phase {
  const now = Date.now();
  if (now < TARGET_START) return "before";
  if (now < TARGET_END) return "live";
  return "ended";
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft | null {
  const diff = TARGET_START - Date.now();
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
      <div className="relative w-9 h-10 sm:w-10 sm:h-11 md:w-11 md:h-12 rounded overflow-hidden bg-[#111] border border-[#FFE600]/15 shadow-[0_0_10px_rgba(255,230,0,0.04)]">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#1a1a0a]/80" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 z-10" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#FFE600]/[0.06]" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[#FFE600] text-sm sm:text-base md:text-lg font-extrabold tabular-nums tracking-tight">
            {value}
          </span>
        </div>
      </div>
      <span className="text-[#B0B0B0]/70 text-[8px] sm:text-[9px] uppercase tracking-wider font-medium mt-0.5">
        {label}
      </span>
    </div>
  );
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const [phase, setPhase] = useState<Phase>("before");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setPhase(getPhase());
    setTimeLeft(getTimeLeft());
    const interval = setInterval(() => {
      setPhase(getPhase());
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const renderCards = (values: { d: string; h: string; m: string; s: string }) => (
    <div className="flex items-center gap-1.5 sm:gap-2">
      <FlipCard value={values.d} label="Days" />
      <span className="text-[#FFE600]/30 text-sm sm:text-base font-bold -mt-3">:</span>
      <FlipCard value={values.h} label="Hrs" />
      <span className="text-[#FFE600]/30 text-sm sm:text-base font-bold -mt-3">:</span>
      <FlipCard value={values.m} label="Min" />
      <span className="text-[#FFE600]/30 text-sm sm:text-base font-bold -mt-3">:</span>
      <FlipCard value={values.s} label="Sec" />
    </div>
  );

  const renderCenter = () => {
    if (!mounted) {
      return renderCards({ d: "--", h: "--", m: "--", s: "--" });
    }

    if (phase === "live") {
      return ZOOM_LINK ? (
        <a
          href={ZOOM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#FFE600] text-sm sm:text-base font-bold uppercase tracking-tight hover:underline"
        >
          🔴 Live Now — Join Here
        </a>
      ) : (
        <span className="text-[#FFE600] text-sm sm:text-base font-bold uppercase tracking-tight">
          🔴 Live Now!
        </span>
      );
    }

    if (phase === "ended") {
      return (
        <span className="text-[#B0B0B0] text-[10px] sm:text-xs uppercase tracking-widest font-medium">
          Stay tuned — next session coming soon. Register below.
        </span>
      );
    }

    // before
    return timeLeft
      ? renderCards({
          d: pad(timeLeft.days),
          h: pad(timeLeft.hours),
          m: pad(timeLeft.minutes),
          s: pad(timeLeft.seconds),
        })
      : renderCards({ d: "--", h: "--", m: "--", s: "--" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3">
        <Image
          src="/images/wordmark-logo.png"
          alt="WeWin Games"
          width={801}
          height={399}
          className="absolute left-4 sm:left-6 md:left-8 h-7 sm:h-8 md:h-9 w-auto"
          priority
        />
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5">
          {phase === "before" && (
            <span className="text-[#B0B0B0] text-[10px] sm:text-xs uppercase tracking-widest font-medium hidden md:inline">
              Next Live Training In
            </span>
          )}
          {renderCenter()}
        </div>
      </div>
    </div>
  );
}
