import Image from "next/image";
import RegistrationForm from "@/components/ui/RegistrationForm";

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      {/* ============================================================
          SECTION 1: HERO — Above the fold. The entire conversion
          decision on mobile. Everything needed to act without scrolling.
          ============================================================ */}
      <section className="relative flex flex-col px-5 pt-6 pb-12 md:px-8 lg:min-h-screen lg:px-16 overflow-hidden">
        {/* Warm radial spotlight background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(255, 200, 0, 0.04) 0%, rgba(255, 140, 0, 0.02) 40%, #0A0A0A 100%)",
          }}
        />

        {/* Logo — small, top-left, doesn't compete with headline */}
        <div className="relative z-10 mb-8 md:mb-12">
          <Image
            src="/images/workmark-logo.png"
            alt="WeWin Games"
            width={140}
            height={40}
            className="h-8 md:h-10 w-auto"
            priority
          />
        </div>

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col lg:flex-row lg:items-center lg:gap-16 max-w-6xl mx-auto w-full">
          <div className="flex-1 mb-8 lg:mb-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-[#FFF8E7] leading-[1.05] mb-4">
              Earn $200+ on a{" "}
              <span className="text-[#FFE600]">Saturday Night</span>
            </h1>
            <p className="text-lg md:text-xl text-[#E8E8E8] leading-relaxed max-w-xl mb-2">
              Free training — learn how people are making real money promoting
              sports betting apps at local bars. No experience needed.
            </p>
          </div>

          <div className="flex-shrink-0 lg:w-[420px]">
            <RegistrationForm />
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 2: THE OPPORTUNITY — What You'll Learn
          3-column on desktop, stacked on mobile.
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
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] text-center mb-12 md:mb-16">
            The Opportunity
          </h2>

          <div className="grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
            {/* Card: Earn Per Signup */}
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8">
              <div className="text-[#FFE600] text-4xl mb-4">$</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-3">
                Earn Per Signup
              </h3>
              <p className="text-[#E8E8E8] leading-relaxed">
                Get paid $15–25 every time someone signs up through you. Top
                performers earn $200+ on a busy night.
              </p>
            </div>

            {/* Card: Work When You Want */}
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8">
              <div className="text-[#FFE600] text-4xl mb-4">⏰</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-3">
                Work When You Want
              </h3>
              <p className="text-[#E8E8E8] leading-relaxed">
                No shifts. No schedules. Show up to partner bars when it works
                for you — weekends, game nights, whenever.
              </p>
            </div>

            {/* Card: 14+ Cities Nationwide */}
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-2xl p-6 md:p-8">
              <div className="text-[#FFE600] text-4xl mb-4">📍</div>
              <h3 className="text-xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-3">
                14+ Cities Nationwide
              </h3>
              <p className="text-[#E8E8E8] leading-relaxed">
                Active in Boston, Denver, Philly, Austin, Chicago, and more. Get
                connected to a team in your area.
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
          SECTION 3: HOW IT WORKS — 3 numbered steps
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
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
                  Sign up here. You&apos;ll get a confirmation with the Zoom link and
                  everything you need.
                </p>
              </div>
            </div>

            {/* Connector */}
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
                  Walk through the process live. You&apos;ll see exactly how it works
                  and get your questions answered.
                </p>
              </div>
            </div>

            {/* Connector */}
            <div className="ml-6 md:ml-8 w-px h-6 bg-[#FFE600]/20" />

            {/* Step 03 */}
            <div className="flex gap-5 md:gap-8 items-start">
              <div className="flex-shrink-0 text-5xl md:text-6xl font-extrabold text-[#FFE600]/80 leading-none">
                03
              </div>
              <div className="pt-1">
                <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-2">
                  Start Earning
                </h3>
                <p className="text-[#E8E8E8] leading-relaxed">
                  Get connected to a territory manager in your city and start
                  promoting at local bars on your schedule.
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
          SECTION 4: SOCIAL PROOF — Stats bar + bar photos
          Using stats bar (Option A) since testimonials aren't available yet.
          ============================================================ */}
      <section className="relative px-5 py-20 md:py-28 md:px-8 lg:px-16 overflow-hidden">
        {/* Subtle warm glow behind stats */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 230, 0, 0.02) 0%, transparent 60%)",
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 text-center mb-16 md:mb-20">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FFE600] mb-1 drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                10+
              </div>
              <div className="text-[#B0B0B0] text-sm md:text-base uppercase tracking-wider">
                States
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FFE600] mb-1 drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                20+
              </div>
              <div className="text-[#B0B0B0] text-sm md:text-base uppercase tracking-wider">
                Partner Bars in Denver
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold text-[#FFE600] mb-1 drop-shadow-[0_0_15px_rgba(255,230,0,0.3)]">
                200+
              </div>
              <div className="text-[#B0B0B0] text-sm md:text-base uppercase tracking-wider">
                Signups/Month at Top Locations
              </div>
            </div>
          </div>

          {/* Bar partner photos — real photos, not stock */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#FFE600]/20 aspect-[4/3]">
              <Image
                src="/images/bar-partner-pic-1.jpg"
                alt="WeWin ambassador at a partner bar"
                fill
                className="object-cover brightness-[0.9] saturate-[1.1] sepia-[.1]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              {/* Warm overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#FFE600]/20 aspect-[4/3]">
              <Image
                src="/images/bar-partner-pic-2.jpg"
                alt="Sports bar activation event"
                fill
                className="object-cover brightness-[0.9] saturate-[1.1] sepia-[.1]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-[#FFE600]/20 aspect-[4/3]">
              <Image
                src="/images/bar-partner-pic-3.jpg"
                alt="Bar partner location"
                fill
                className="object-cover brightness-[0.9] saturate-[1.1] sepia-[.1]"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF8C00]/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 5: ABOUT THE TRAINING — What to Expect
          Slightly warmer background for content differentiation.
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
          {/* Thin gold top-border accent */}
          <div className="w-12 h-0.5 bg-[#FFE600]/40 mb-8 mx-auto md:mx-0" />

          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-8 text-center md:text-left">
            What to Expect on the Call
          </h2>

          <ul className="space-y-4 mb-10">
            <li className="flex items-start gap-3">
              <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
              <span className="text-[#E8E8E8] leading-relaxed">
                Learn how sports betting affiliate marketing works (it&apos;s simpler
                than you think)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FFE600] mt-1 flex-shrink-0">✓</span>
              <span className="text-[#E8E8E8] leading-relaxed">
                See the exact signup process — live, step by step
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
                Walk away knowing if this is right for you — zero pressure
              </span>
            </li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-center">
              <div className="text-[#FFE600] font-bold text-lg">~45 min</div>
              <div className="text-[#B0B0B0] text-sm">Duration</div>
            </div>
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-center">
              <div className="text-[#FFE600] font-bold text-lg">Live Zoom</div>
              <div className="text-[#B0B0B0] text-sm">Format</div>
            </div>
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-center">
              <div className="text-[#FFE600] font-bold text-lg">Free</div>
              <div className="text-[#B0B0B0] text-sm">Cost</div>
            </div>
            <div className="backdrop-blur-sm bg-white/[0.02] border border-white/[0.05] rounded-xl p-4 text-center">
              {/* TODO: Replace with actual date */}
              <div className="text-[#FFE600] font-bold text-lg">Feb 18</div>
              <div className="text-[#B0B0B0] text-sm">Tues, 7 PM ET</div>
            </div>
          </div>
        </div>
      </section>

      {/* Thin gold divider */}
      <div className="flex justify-center">
        <div className="w-16 h-px bg-[#FFE600]/30" />
      </div>

      {/* ============================================================
          SECTION 6: FINAL CTA — Repeat registration form
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
          SECTION 7: FOOTER — Minimal
          ============================================================ */}
      <footer className="border-t border-white/[0.05] px-5 py-10 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4 text-center">
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
