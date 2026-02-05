import Image from "next/image";

export default function ConfirmedPage() {
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

      <div className="relative z-10 flex-1 flex flex-col px-5 pt-6 pb-12 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="mb-12 md:mb-16">
          <Image
            src="/images/workmark-logo.png"
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
              <span className="text-[#FFE600] text-3xl">✓</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-4">
              You&apos;re Registered!
            </h1>

            <p className="text-lg text-[#E8E8E8] mb-10 leading-relaxed">
              You&apos;ll receive a confirmation email shortly with your Zoom
              link. Here&apos;s what you need to know:
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
                {/* TODO: Replace with actual date */}
                <span className="text-[#FFF8E7] font-semibold">
                  Tues, Feb 18 · 7:00 PM ET
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  Duration
                </span>
                <span className="text-[#FFF8E7] font-semibold">~45 minutes</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/[0.05] pb-3">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  Format
                </span>
                <span className="text-[#FFF8E7] font-semibold">Live Zoom Call</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#B0B0B0] text-sm uppercase tracking-wider">
                  Cost
                </span>
                <span className="text-[#FFE600] font-bold">Free</span>
              </div>
            </div>

            {/* TODO: Add "Add to Calendar" link (Google Calendar / .ics download) */}
            {/* TODO: Replace with actual Zoom link */}
            <p className="text-[#B0B0B0] text-sm">
              Check your email for the Zoom link. Mark your calendar — we&apos;ll
              see you there.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-5 py-8 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
          <Image
            src="/images/main-logo.png"
            alt="WeWin Games"
            width={48}
            height={48}
            className="h-10 w-auto opacity-70"
          />
          <p className="text-[#B0B0B0] text-sm">
            © 2026 WeWin Games. All rights reserved.
          </p>
          <p className="text-[#B0B0B0]/70 text-xs max-w-md">
            Must be 21+. Results vary. This is a commission-based opportunity.
          </p>
        </div>
      </footer>
    </main>
  );
}
