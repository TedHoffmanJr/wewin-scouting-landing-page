"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const WEBINAR_ISO = process.env.NEXT_PUBLIC_WEBINAR_DATE || "2026-02-17T20:00:00-05:00";
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

/** Compact flip-clock digit card sized for the sticky bar */
function FlipCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative w-9 h-10 sm:w-10 sm:h-11 md:w-11 md:h-12 rounded overflow-hidden bg-[#111] border border-[#FFE600]/15 shadow-[0_0_10px_rgba(255,230,0,0.04)]">
        {/* Top half — slightly lighter */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[#1a1a0a]/80" />
        {/* Flip seam */}
        <div className="absolute inset-x-0 top-1/2 h-px bg-black/60 z-10" />
        {/* Top edge highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-[#FFE600]/[0.06]" />
        {/* Number */}
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

/**
 * Sticky countdown bar fixed to the top of the viewport.
 * Glassmorphism effect — page content scrolls underneath.
 * Renders its own fixed container, so place anywhere in the tree.
 */
export default function CountdownTimer() {
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

  return (
    <div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A0A0A]/80 border-b border-white/[0.05] shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
      <div className="relative flex items-center justify-center px-4 sm:px-6 md:px-8 py-2.5 sm:py-3">
        {/* Logo — positioned left, absolutely so countdown stays centered */}
        <Image
          src="/images/wordmark-logo.png"
          alt="WeWin Games"
          width={801}
          height={399}
          className="absolute left-4 sm:left-6 md:left-8 h-7 sm:h-8 md:h-9 w-auto"
          priority
        />

        {/* Countdown group — centered in the bar */}
        <div className="flex items-center gap-2.5 sm:gap-4 md:gap-5">
          <span className="text-[#B0B0B0] text-[10px] sm:text-xs uppercase tracking-widest font-medium hidden md:inline">
            Next Live Training In
          </span>

          {!mounted ? (
            renderCards({ d: "--", h: "--", m: "--", s: "--" })
          ) : !timeLeft ? (
            <span className="text-[#FFE600] text-sm sm:text-base font-bold uppercase tracking-tight">
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
      </div>
    </div>
  );
}
