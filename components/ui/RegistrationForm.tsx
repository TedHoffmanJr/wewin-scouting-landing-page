"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

export default function RegistrationForm({
  heading,
}: {
  heading?: string;
}) {
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(formData: FormData): Record<string, string> {
    const errs: Record<string, string> = {};
    const name = (formData.get("name") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const city = (formData.get("city") as string)?.trim();

    if (!name || name.length < 2) errs.name = "Please enter your first name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";
    if (!phone || phone.replace(/\D/g, "").length < 10)
      errs.phone = "Please enter a valid phone number";
    if (!city || city.length < 2) errs.city = "Please enter your city";

    return errs;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validate(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: (formData.get("name") as string).trim(),
          email: (formData.get("email") as string).trim(),
          phone: (formData.get("phone") as string).trim(),
          city: (formData.get("city") as string).trim(),
        }),
      });

      if (res.ok) {
        router.push("/confirmed");
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
        setSubmitting(false);
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
      setSubmitting(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      {heading && (
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-tight text-[#FFF8E7] mb-6 text-center">
          {heading}
        </h2>
      )}

      {/* Glass-morphism form container */}
      <form
        ref={formRef}
        method="POST"
        action="/api/register"
        onSubmit={handleSubmit}
        className="backdrop-blur-md bg-[#0A0A0A]/50 border border-white/[0.08] rounded-2xl p-6 md:p-8 space-y-4"
      >
        {errors.form && (
          <p className="text-red-400 text-sm text-center">{errors.form}</p>
        )}

        <div>
          <label htmlFor={`name-${heading ? "bottom" : "top"}`} className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id={`name-${heading ? "bottom" : "top"}`}
            name="name"
            placeholder="First Name"
            autoComplete="given-name"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20 transition-all"
          />
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor={`email-${heading ? "bottom" : "top"}`} className="sr-only">
            Email
          </label>
          <input
            type="email"
            id={`email-${heading ? "bottom" : "top"}`}
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20 transition-all"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor={`phone-${heading ? "bottom" : "top"}`} className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            id={`phone-${heading ? "bottom" : "top"}`}
            name="phone"
            placeholder="Phone Number"
            autoComplete="tel"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20 transition-all"
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor={`city-${heading ? "bottom" : "top"}`} className="sr-only">
            City
          </label>
          <input
            type="text"
            id={`city-${heading ? "bottom" : "top"}`}
            name="city"
            placeholder="Your City"
            autoComplete="address-level2"
            required
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20 transition-all"
          />
          {errors.city && (
            <p className="text-red-400 text-xs mt-1">{errors.city}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-[#FFE600] text-[#0A0A0A] font-bold text-lg uppercase tracking-wide py-4 rounded-lg shadow-[0_0_30px_rgba(255,230,0,0.15)] hover:bg-[#FFF033] hover:shadow-[0_0_40px_rgba(255,230,0,0.3)] transition-all disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {submitting ? "Saving..." : "Save My Spot"}
        </button>

        <p className="text-[#B0B0B0] text-xs text-center">
          Free call · 45 minutes · Limited spots per session
        </p>

        <p className="text-[#B0B0B0]/50 text-[10px] text-center leading-snug mt-1">
          By submitting this form, you consent to receive SMS messages from{" "}
          <strong className="text-[#B0B0B0]/70">We Win Games</strong> at the
          phone number provided, including webinar confirmations, reminders,
          and access links. Message frequency may vary. Message &amp; data
          rates may apply. Reply HELP for help or STOP to opt out. View
          our{" "}
          <a href="/privacy" className="underline hover:text-[#B0B0B0]/80">Privacy Policy</a>
          {" "}&amp;{" "}
          <a href="/terms" className="underline hover:text-[#B0B0B0]/80">Terms of Service</a>.
        </p>
      </form>
    </div>
  );
}
