import Image from "next/image";
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 20%, rgba(255, 200, 0, 0.02) 0%, #0A0A0A 100%)",
        }}
      />

      <div className="relative z-10 flex-1 px-5 pt-6 pb-16 md:px-8 lg:px-16">
        {/* Logo */}
        <div className="mb-12">
          <Link href="/">
            <Image
              src="/images/wordmark-logo.png"
              alt="WeWin Games"
              width={140}
              height={40}
              className="h-8 md:h-10 w-auto"
              priority
            />
          </Link>
        </div>

        <article className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-tight text-[#FFF8E7] mb-8">
            Terms of Service
          </h1>
          <p className="text-[#B0B0B0] text-sm mb-10">
            Effective: February 2026
          </p>

          <div className="space-y-8 text-[#E8E8E8] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                About This Registration
              </h2>
              <p>
                This website provides registration for a free informational
                training webinar hosted by WeWin Games and Adaptive Growth
                Partners. No purchase is required to register or attend.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Nature of the Opportunity
              </h2>
              <p>
                The opportunity discussed during the training is a
                performance-based, independent contractor opportunity. It is not
                employment. No employer-employee relationship is created or
                implied by attending the training or participating in the program.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Earnings Disclaimer
              </h2>
              <p>
                Earnings are not guaranteed and vary by individual effort, market
                conditions, and other factors. Any earnings figures shared during
                the training or on this website represent results reported by
                specific individuals and are not necessarily representative of all
                participants. Results not typical. Individual results will vary.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Age Requirement
              </h2>
              <p>
                You must be at least 18 years of age to register and at least
                21 years of age to participate in activation events. By
                registering, you confirm that you meet these age requirements.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                SMS &amp; Text Messaging Terms
              </h2>
              <p>
                By submitting the registration form with your phone number, you
                agree to receive text messages from Adaptive Growth Partners on
                behalf of We Win Games, including
                webinar confirmations, reminders, and access links. Message
                frequency may vary. Message and data rates may apply.
              </p>
              <p className="mt-3">
                You may opt out of messages at any time by replying{" "}
                <strong>STOP</strong> to any message. Reply{" "}
                <strong>HELP</strong> for assistance. Opting out of SMS does not
                affect your webinar registration.
              </p>
              <p className="mt-3">
                Your consent to receive SMS messages is not a condition of
                registration or participation. SMS consent information is not
                shared with third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Carrier Liability Disclaimer
              </h2>
              <p>
                Wireless carriers are not liable for delayed or undelivered
                messages. Message delivery is subject to effective transmission
                from your wireless service provider. Adaptive Growth Partners
                and We Win Games are not responsible for messages that are not
                delivered due to carrier issues or device incompatibility.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Modifications
              </h2>
              <p>
                We reserve the right to modify, reschedule, or cancel the
                training at any time. Registered participants will be notified of
                any changes via the email address provided during registration.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Contact
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a
                  href="mailto:hello@joinwewingames.com"
                  className="text-[#FFE600] underline"
                >
                  hello@joinwewingames.com
                </a>
                .
              </p>
            </section>
          </div>
        </article>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/[0.05] px-5 py-8 md:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-3 text-center">
          <p className="text-[#B0B0B0] text-sm">
            © 2026 WeWin Games. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-[#B0B0B0]/50">
            <Link href="/" className="underline hover:text-[#B0B0B0]">
              Back to Home
            </Link>
            <span>·</span>
            <Link href="/privacy" className="underline hover:text-[#B0B0B0]">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
