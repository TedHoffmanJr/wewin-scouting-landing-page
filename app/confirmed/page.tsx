import Image from "next/image";
import Link from "next/link";
import { webinarConfig } from "@/lib/webinar-config";
import AddToCalendar from "@/components/ui/AddToCalendar";
import InlineCountdown from "@/components/ui/InlineCountdown";
import PixelEvent from "@/components/ui/PixelEvent";

export default function ConfirmedPage() {
  const { zoomLink, dateDisplay, timeDisplay, duration, meetingId, passcode } =
    webinarConfig;

  return (
    <main className="min-h-screen flex flex-col">
      {/* Background glow */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 200, 0, 0.04) 0%, rgba(255, 140, 0, 0.02) 40%, #0A0A0A 100%)",
        }}
      />

      <PixelEvent event="CompleteRegistration" />

      <div className="relative z-10 flex-1 flex flex-col px-5 pt-6 pb-12 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <Image
            src="/images/wordmark-logo.png"
            alt="WeWin Games"
            width={140}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </div>

        {/* Confirmation content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="max-w-lg text-center">
            {/* Gold check */}
            <div className="w-16 h-16 rounded-full bg-[#FFE600]/10 border-2 border-[#FFE600] flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(255,230,0,0.15)]">
              <span className="text-[#FFE600] text-3xl">&#10003;</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-4">
              You&apos;re Registered!
            </h1>

            <p className="text-lg text-[#E8E8E8] mb-10 leading-relaxed">
              You&apos;ll receive a confirmation email shortly. Here&apos;s what
              you need to know:
            </p>

            {/* Webinar details */}
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8 mb-8 text-left space-y-4">
              <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  What
                </span>
                <span className="text-[#FFF8E7] font-semibold">
                  WeWin Games Live Training
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  When
                </span>
                <span className="text-[#FFF8E7] font-semibold">
                  {dateDisplay} &middot; {timeDisplay}
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  Duration
                </span>
                <span className="text-[#FFF8E7] font-semibold">
                  ~{duration} minutes
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  Format
                </span>
                <span className="text-[#FFF8E7] font-semibold">
                  Live Zoom Call
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  Cost
                </span>
                <span className="text-[#FFE600] font-bold">Free</span>
              </div>
            </div>

            {/* Inline countdown */}
            <div className="mb-8">
              <InlineCountdown />
            </div>

            {/* JOIN ZOOM — Primary CTA */}
            <a
              href={zoomLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-[#FFE600] text-[#0A0A0A] font-bold text-lg uppercase tracking-wide py-4 px-6 rounded-lg hover:bg-[#FFF033] transition-all shadow-[0_0_30px_rgba(255,230,0,0.15)] mb-3"
            >
              Join Zoom Meeting
            </a>

            <p className="text-[#B0B0B0] text-sm mb-8">
              Meeting ID: {meetingId} &middot; Passcode: {passcode}
            </p>

            {/* Add to Calendar buttons */}
            <div className="mb-6">
              <AddToCalendar />
            </div>

            <p className="text-[#B0B0B0] text-sm">
              Bookmark the Zoom link above and add it to your calendar.
              We&apos;ll see you {dateDisplay} at {timeDisplay}!
            </p>
          </div>
        </div>
      </div>

      {/* Footer — same compliance elements as landing page */}
      <footer className="relative z-10 border-t border-white/[0.05] px-5 py-8 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
          <Image
            src="/images/main-logo.png"
            alt="WeWin Games"
            width={96}
            height={96}
            quality={100}
            className="h-10 w-auto"
          />
          <p className="text-[#B0B0B0] text-sm">
            &copy; 2026 WeWin Games. All rights reserved.
          </p>
          <p className="text-[#B0B0B0]/70 text-xs max-w-lg">
            Must be 21+. Results not typical. Individual results will vary. This
            is a performance-based opportunity. No income is guaranteed.
          </p>
          <p className="text-[#B0B0B0]/60 text-xs">
            Contact:{" "}
            <a
              href="mailto:hello@joinwewingames.com"
              className="underline hover:text-[#B0B0B0]"
            >
              hello@joinwewingames.com
            </a>
          </p>
          <div className="flex gap-4 text-xs text-[#B0B0B0]/50">
            <Link href="/privacy" className="underline hover:text-[#B0B0B0]">
              Privacy Policy
            </Link>
            <span>&middot;</span>
            <Link href="/terms" className="underline hover:text-[#B0B0B0]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
