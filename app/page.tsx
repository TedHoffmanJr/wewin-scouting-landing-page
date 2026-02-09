import Image from "next/image";
import Link from "next/link";
import RegistrationForm from "@/components/ui/RegistrationForm";
import CountdownTimer from "@/components/ui/CountdownTimer";
import WebinarDate from "@/components/ui/WebinarDate";
import { TESTIMONIALS } from "@/lib/constants";

export default function LandingPage() {
  return (
    <main className="min-h-screen pt-[72px] sm:pt-[76px]">
      {/* Sticky countdown bar — fixed to top of viewport, content scrolls under it */}
      <CountdownTimer />

      {/* ============================================================
          SECTION 1: HERO — Above the fold
          New headline: no dollar amounts, no "sports betting"
          ============================================================ */}
      <section className="relative flex flex-col px-5 pt-6 pb-12 md:px-8 lg:min-h-screen lg:px-16 overflow-hidden">
        {/* Warm radial spotlight background — fallback for when hero images aren't available */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 200, 0, 0.04) 0%, rgba(255, 140, 0, 0.02) 40%, #0A0A0A 100%)",
          }}
        />

        {/* Hero background image — desktop and mobile versions */}
        <Image
          src="/images/hero-bar-activation-desktop.webp"
          alt=""
          fill
          className="object-cover hidden md:block brightness-[0.65] saturate-[1.1]"
          priority
          sizes="100vw"
        />
        <Image
          src="/images/hero-bar-activation-mobile.webp"
          alt=""
          fill
          className="object-cover md:hidden brightness-[0.65] saturate-[1.1]"
          priority
          sizes="100vw"
        />
        {/* Warm overlay on top of hero image for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/90 pointer-events-none" />

        {/* Logo now lives in the sticky countdown bar at top of viewport */}

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-6xl mx-auto w-full">
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#FFF8E7] leading-[1.05] mb-4">
              The Side Gig That{" "}
              <span className="text-[#FFE600]">Pays You to Go Out</span>
            </h1>
            <p className="text-lg md:text-xl text-[#E8E8E8] leading-relaxed max-w-xl mb-2">
              Free training. Learn how people are getting paid to set up at
              sports bars on game night and help fans download popular apps.
              No experience needed.
            </p>
          </div>

          <div className="flex-shrink-0 lg:w-[420px]">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: TRUST STRIP — Stats bar
          Broad national stats, not Denver-specific
          ============================================================ */}
      <section className="relative px-5 py-16 md:py-20 md:px-8 lg:px-16 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 230, 0, 0.02) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-12 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FFE600] mb-1 drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                14+
              </div>
              <div className="text-[#B0B0B0] text-sm md:text-base uppercase tracking-wider">
                Cities Nationwide
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FFE600] mb-1 drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                100+
              </div>
              <div className="text-[#B0B0B0] text-sm md:text-base uppercase tracking-wider">
                Partner Venues
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FFE600] mb-1 drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                5,000+
              </div>
              <div className="text-[#B0B0B0] text-sm md:text-base uppercase tracking-wider">
                Activations Completed
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 3: THE OPPORTUNITY — Editorial layout, NOT AI-slop cards
          Using Option A: large bold statement left, detail right, alternating.
          Real photos as section accents instead of emoji icons.
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255, 200, 0, 0.02) 0%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] text-center mb-16 md:mb-20">
            The Opportunity
          </h2>

          {/* Block 1: Get Paid Per Activation — photo left, text right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center mb-16 md:mb-24">
            <div className="w-full md:w-2/5 relative rounded-2xl overflow-hidden border border-[#FFE600]/20 aspect-[4/3]">
              <Image
                src="/images/earn-per-activation.webp"
                alt="Ambassador running an activation at a partner venue"
                fill
                className="object-cover brightness-[0.9] saturate-[1.1] sepia-[.1]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-4">
                Get Paid for Every Signup
              </h3>
              <p className="text-[#E8E8E8] text-lg leading-relaxed mb-3">
                Show up to a partner bar on game night. Set up a prize wheel.
                Talk to people who are already there watching the game and help
                them download popular apps. You get paid for every signup.*
              </p>
              <p className="text-[#E8E8E8] text-lg leading-relaxed mb-3">
                Top ambassadors in active markets have reported earning
                $150–250+ on a busy night.
              </p>
              <p className="text-[#B0B0B0] text-xs italic">
                *Results not typical. Individual results vary based on effort
                and market.
              </p>
            </div>
          </div>

          {/* Block 2: Your Schedule — text left, photo right */}
          <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center mb-16 md:mb-24">
            <div className="w-full md:w-2/5 relative rounded-2xl overflow-hidden border border-[#FFE600]/20 aspect-[4/3]">
              <Image
                src="/images/high-five.webp"
                alt="Ambassador high-fiving a customer at a partner bar during an activation event"
                fill
                className="object-cover brightness-[0.9] saturate-[1.1] sepia-[.1]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-4">
                Your Schedule, Your Call
              </h3>
              <p className="text-[#E8E8E8] text-lg leading-relaxed">
                No shifts. No clocking in. Pick your nights: weekends, game
                nights, special events. Run activations when it works for you,
                where it works for you. Track every signup and payout in real
                time through the sales portal. No chasing anyone for your money.
              </p>
            </div>
          </div>

          {/* Block 3: 14+ Cities — photo left, text right */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="w-full md:w-2/5 relative rounded-2xl overflow-hidden border border-[#FFE600]/20 aspect-[4/3]">
              <Image
                src="/images/bar-top-ladies.webp"
                alt="Ambassador walking through a busy sports bar during game night"
                fill
                className="object-cover brightness-[0.9] saturate-[1.1] sepia-[.1]"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
            </div>
            <div className="w-full md:w-3/5">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-4">
                14+ Cities and Growing
              </h3>
              <p className="text-[#E8E8E8] text-lg leading-relaxed">
                Active teams in Boston, Denver, Philly, Austin, Chicago, Tampa,
                and more. Get connected to a territory in your area or help us
                open a new one. This isn&apos;t a desk gig. It&apos;s entrepreneurial.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 4: WHAT TO EXPECT ON THE CALL
          Sells the call itself while attention is high
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 40%, rgba(255, 200, 0, 0.02) 0%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          {/* Glass card container */}
          <div className="backdrop-blur-md bg-white/[0.04] border border-[#FFE600]/20 rounded-2xl p-8 md:p-10 shadow-[0_0_60px_rgba(255,200,0,0.12)]">
            <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-8 text-center md:text-left">
              What to Expect on the Call
            </h2>

            <ul className="space-y-4 mb-10">
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
                <span className="text-[#E8E8E8] leading-relaxed">
                  See how the most popular apps are compensating people like you at
                  activation events
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
                <span className="text-[#E8E8E8] leading-relaxed">
                  Experience the exact signup process you&apos;ll be promoting,
                  live on the call
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
                <span className="text-[#E8E8E8] leading-relaxed">
                  Get your questions answered in real-time
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
                <span className="text-[#E8E8E8] leading-relaxed">
                  Walk away knowing if this is right for you. Zero pressure
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
                <span className="text-[#E8E8E8] leading-relaxed">
                  See the sales portal where you track every signup and payout in
                  real time
                </span>
              </li>
            </ul>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                <div className="text-[#FFE600] font-bold text-lg">~45 min</div>
                <div className="text-[#B0B0B0] text-sm">Duration</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                <div className="text-[#FFE600] font-bold text-lg">Live Zoom</div>
                <div className="text-[#B0B0B0] text-sm">Format</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                <div className="text-[#FFE600] font-bold text-lg">Free</div>
                <div className="text-[#B0B0B0] text-sm">Cost</div>
              </div>
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-4 text-center">
                <WebinarDate />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 5: HOW IT WORKS — 3 numbered steps
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16 overflow-hidden">
        {/* Background image — blurred and darkened */}
        <Image
          src="/images/how-it-works-bg.webp"
          alt=""
          fill
          className="object-cover brightness-[0.45] blur-sm"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0A0A0A]/30 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] text-center mb-12 md:mb-16">
            How It Works
          </h2>

          <div className="space-y-10 md:space-y-12">
            {/* Step 01 */}
            <div className="flex gap-5 md:gap-8 items-start">
              <div className="flex-shrink-0 text-5xl md:text-6xl font-extrabold text-[#FFE600]/80 leading-none">
                01
              </div>
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-2">
                  Register for the Free Training
                </h3>
                <p className="text-[#E8E8E8] leading-relaxed">
                  Sign up right here. You&apos;ll get a confirmation with
                  everything you need to join the call.
                </p>
              </div>
            </div>

            <div className="ml-6 md:ml-8 w-px h-6 bg-[#FFE600]/20" />

            {/* Step 02 */}
            <div className="flex gap-5 md:gap-8 items-start">
              <div className="flex-shrink-0 text-5xl md:text-6xl font-extrabold text-[#FFE600]/80 leading-none">
                02
              </div>
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-2">
                  Attend the Live Call
                </h3>
                <p className="text-[#E8E8E8] leading-relaxed">
                  See exactly how it works. Live walkthrough, real Q&A. No
                  pitch, no pressure.
                </p>
              </div>
            </div>

            <div className="ml-6 md:ml-8 w-px h-6 bg-[#FFE600]/20" />

            {/* Step 03 */}
            <div className="flex gap-5 md:gap-8 items-start">
              <div className="flex-shrink-0 text-5xl md:text-6xl font-extrabold text-[#FFE600]/80 leading-none">
                03
              </div>
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-2">
                  Get Connected
                </h3>
                <p className="text-[#E8E8E8] leading-relaxed">
                  Meet a territory leader in your city who will get you trained
                  and set up to start running activations on your own schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 6: TESTIMONIALS — Staggered masonry layout
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 40%, rgba(255, 200, 0, 0.025) 0%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] text-center mb-12 md:mb-16">
            What People Are Saying
          </h2>

          {/* Staggered masonry: 2 columns on desktop, alternating card sizes */}
          <div className="columns-1 md:columns-2 gap-5 md:gap-6 space-y-5 md:space-y-6">
            {TESTIMONIALS.map((t, i) => {
              // Alternate between larger and compact cards for visual rhythm
              const isLarge = i === 0 || i === 3 || i === 4;
              return (
                <div
                  key={t.name}
                  className={`break-inside-avoid backdrop-blur-sm border border-white/[0.06] rounded-2xl transition-all hover:border-[#FFE600]/20 hover:shadow-[0_0_20px_rgba(255,230,0,0.06)] ${
                    isLarge
                      ? "bg-white/[0.03] p-7 md:p-8"
                      : "bg-white/[0.02] p-5 md:p-6"
                  }`}
                >
                  {/* Gold quote mark */}
                  <span
                    className={`block text-[#FFE600]/40 font-serif leading-none mb-3 ${
                      isLarge ? "text-5xl" : "text-4xl"
                    }`}
                  >
                    &ldquo;
                  </span>
                  <p
                    className={`text-[#E8E8E8] leading-relaxed mb-4 ${
                      isLarge ? "text-lg" : "text-base"
                    }`}
                  >
                    {t.quote}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#FFF8E7] font-semibold text-sm">
                      {t.name}
                    </span>
                    <span className="text-[#FFE600]/70 text-xs font-medium uppercase tracking-wider bg-[#FFE600]/[0.07] px-2.5 py-1 rounded-full">
                      {t.city}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Required testimonial disclaimer */}
          <p className="text-[#B0B0B0]/60 text-xs text-center mt-8 max-w-2xl mx-auto italic">
            Individual results may vary. These testimonials are not necessarily
            representative of all participants. Earnings depend on effort,
            market, and other factors.
          </p>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 7: YOUR HOSTS — Jason + Ted
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(255, 200, 0, 0.015) 0%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] text-center mb-12 md:mb-16">
            Your Hosts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Jason Wexler */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#FFE600]/30 overflow-hidden mb-5 shadow-[0_0_20px_rgba(255,230,0,0.08)] relative">
                <Image
                  src="/images/headshot-jason.webp"
                  alt="Jason Wexler"
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-bold text-[#FFF8E7] mb-1">
                Jason Wexler
              </h3>
              <p className="text-[#FFE600] text-sm font-medium uppercase tracking-wider mb-3">
                Territory Director, WeWin Games
              </p>
              <p className="text-[#E8E8E8] text-sm leading-relaxed max-w-xs">
                Jason has built ambassador teams across multiple territories and
                personally onboarded every activator in the network.
              </p>
            </div>

            {/* Ted Hoffman Jr. */}
            <div className="flex flex-col items-center text-center">
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-[#FFE600]/30 overflow-hidden mb-5 shadow-[0_0_20px_rgba(255,230,0,0.08)] relative">
                <Image
                  src="/images/headshot-ted.webp"
                  alt="Ted Hoffman Jr."
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-xl font-bold text-[#FFF8E7] mb-1">
                Ted Hoffman Jr.
              </h3>
              <p className="text-[#FFE600] text-sm font-medium uppercase tracking-wider mb-3">
                Digital Growth Partner, Adaptive Growth Partners
              </p>
              <p className="text-[#E8E8E8] text-sm leading-relaxed max-w-xs">
                Ted runs the digital recruitment and training pipeline,
                connecting new ambassadors with opportunities nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 8: FINAL CTA — Repeat registration form
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(255, 200, 0, 0.03) 0%, transparent 100%)",
          }}
        />
        <div className="relative z-10 max-w-lg mx-auto">
          <RegistrationForm heading="Ready to Learn More? Save Your Spot." />
        </div>
      </section>

      {/* ============================================================
          SECTION 9: FOOTER — Compliance links, contact, disclaimers
          ============================================================ */}
      <footer className="border-t border-white/[0.05] px-5 py-10 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
          <Image
            src="/images/main-logo.png"
            alt="WeWin Games"
            width={96}
            height={96}
            quality={100}
            className="h-10 w-auto"
          />
          <p className="text-[#B0B0B0] text-sm">
            © 2026 WeWin Games. All rights reserved.
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
            <span>·</span>
            <Link href="/terms" className="underline hover:text-[#B0B0B0]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
