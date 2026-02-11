import Image from "next/image";
import Link from "next/link";

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-[#B0B0B0] text-sm mb-10">
            Effective: February 2026
          </p>

          <div className="space-y-8 text-[#E8E8E8] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                What Data We Collect
              </h2>
              <p>
                When you register for our webinar through the form on this site,
                we collect the following information:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-[#E8E8E8]/90">
                <li>First name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>City</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                How We Use Your Data
              </h2>
              <p>Your information is used to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-[#E8E8E8]/90">
                <li>Send you webinar confirmation and access details</li>
                <li>Follow up with relevant information about the opportunity</li>
                <li>Connect you with a territory team in your area</li>
                <li>Send occasional updates related to WeWin Games</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Third-Party Services
              </h2>
              <p>
                Your data may be shared with the following services for the
                purposes described:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-[#E8E8E8]/90">
                <li>
                  <strong>GoHighLevel (GHL)</strong>: Customer relationship
                  management and automated follow-up communications
                </li>
                <li>
                  <strong>Meta (Facebook)</strong>: Ad performance tracking via
                  the Meta Pixel. This helps us measure and optimize our
                  advertising effectiveness.
                </li>
                <li>
                  <strong>Vercel</strong>: Website hosting and serverless
                  function execution
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Data Retention
              </h2>
              <p>
                We retain your information for legitimate business purposes. If
                you would like your data deleted, you can request deletion at any
                time by contacting us at{" "}
                <a
                  href="mailto:hello@joinwewingames.com"
                  className="text-[#FFE600] underline"
                >
                  hello@joinwewingames.com
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-[#E8E8E8]/90">
                <li>Request access to the data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt out of future communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                SMS &amp; Text Messaging
              </h2>
              <p>
                By providing your phone number and submitting the registration
                form, you consent to receive text messages from We Win Games
                related to the webinar, including:
              </p>
              <ul className="list-disc list-inside mt-3 space-y-1 text-[#E8E8E8]/90">
                <li>Registration confirmations</li>
                <li>Webinar reminders and access links</li>
              </ul>
              <p className="mt-3">
                Message frequency may vary. Message and data rates may apply.
                You may opt out at any time by replying <strong>STOP</strong> to
                any message. Reply <strong>HELP</strong> for assistance.
              </p>
              <p className="mt-3">
                Your SMS consent is not shared with or sold to third parties
                for their marketing purposes. Phone numbers are shared only
                with our SMS service provider for the purpose of delivering
                messages you have consented to receive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Data Sales
              </h2>
              <p>We do not sell your personal information.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#FFF8E7] mb-3">
                Contact
              </h2>
              <p>
                For questions about this privacy policy or your data, contact us
                at{" "}
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
            <Link href="/terms" className="underline hover:text-[#B0B0B0]">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
