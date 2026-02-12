"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";

const US_STATES = [
  "AL","AK","AZ","AR","CA","CO","CT","DE","FL","GA",
  "HI","ID","IL","IN","IA","KS","KY","LA","ME","MD",
  "MA","MI","MN","MS","MO","MT","NE","NV","NH","NJ",
  "NM","NY","NC","ND","OH","OK","OR","PA","RI","SC",
  "SD","TN","TX","UT","VT","VA","WA","WV","WI","WY",
  "DC",
] as const;

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
    const firstName = (formData.get("firstName") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const city = (formData.get("city") as string)?.trim();
    const state = (formData.get("state") as string)?.trim();

    if (!firstName || firstName.length < 2) errs.firstName = "Please enter your first name";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errs.email = "Please enter a valid email";
    if (!phone || phone.replace(/\D/g, "").length < 10)
      errs.phone = "Please enter a valid phone number";
    if (!city || city.length < 2) errs.city = "Please enter your city";
    if (!state) errs.state = "Select state";

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
          firstName: (formData.get("firstName") as string).trim(),
          email: (formData.get("email") as string).trim(),
          phone: (formData.get("phone") as string).trim(),
          city: (formData.get("city") as string).trim(),
          state: (formData.get("state") as string).trim(),
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

  const suffix = heading ? "bottom" : "top";
  const inputClass =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#666] focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20 transition-all";

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
          <label htmlFor={`firstName-${suffix}`} className="sr-only">
            First Name
          </label>
          <input
            type="text"
            id={`firstName-${suffix}`}
            name="firstName"
            placeholder="First Name"
            autoComplete="given-name"
            required
            className={inputClass}
          />
          {errors.firstName && (
            <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label htmlFor={`email-${suffix}`} className="sr-only">
            Email
          </label>
          <input
            type="email"
            id={`email-${suffix}`}
            name="email"
            placeholder="Email Address"
            autoComplete="email"
            required
            className={inputClass}
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor={`phone-${suffix}`} className="sr-only">
            Phone
          </label>
          <input
            type="tel"
            id={`phone-${suffix}`}
            name="phone"
            placeholder="Phone Number"
            autoComplete="tel"
            required
            className={inputClass}
          />
          {errors.phone && (
            <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* City + State on the same row */}
        <div className="flex gap-3">
          <div className="flex-1">
            <label htmlFor={`city-${suffix}`} className="sr-only">
              City
            </label>
            <input
              type="text"
              id={`city-${suffix}`}
              name="city"
              placeholder="Your City"
              autoComplete="address-level2"
              required
              className={inputClass}
            />
            {errors.city && (
              <p className="text-red-400 text-xs mt-1">{errors.city}</p>
            )}
          </div>
          <div className="w-[5.5rem]">
            <label htmlFor={`state-${suffix}`} className="sr-only">
              State
            </label>
            <select
              id={`state-${suffix}`}
              name="state"
              required
              defaultValue=""
              autoComplete="address-level1"
              className="w-full bg-[#1a1a1a] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#FFE600] focus:ring-2 focus:ring-[#FFE600]/20 transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20viewBox%3D%220%200%2012%2012%22%3E%3Cpath%20fill%3D%22%23666%22%20d%3D%22M6%208L1%203h10z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:12px] bg-[right_12px_center] bg-no-repeat pr-8"
            >
              <option value="" disabled className="bg-[#1a1a1a] text-[#666]">
                State
              </option>
              {US_STATES.map((s) => (
                <option key={s} value={s} className="bg-[#1a1a1a] text-white">
                  {s}
                </option>
              ))}
            </select>
            {errors.state && (
              <p className="text-red-400 text-xs mt-1">{errors.state}</p>
            )}
          </div>
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
          By submitting this form, you consent to receive SMS text messages
          from{" "}
          <strong className="text-[#B0B0B0]/70">Adaptive Growth Partners</strong>{" "}
          on behalf of{" "}
          <strong className="text-[#B0B0B0]/70">We Win Games</strong>{" "}
          at the phone number provided regarding webinar registration
          information, event reminders, and access links. Message frequency
          may vary. Message &amp; data rates may apply. Reply HELP for help
          or STOP to opt out.
        </p>

        <div className="flex justify-center gap-3 text-[10px] text-[#B0B0B0]/50">
          <a href="/privacy" className="underline hover:text-[#B0B0B0]/80">Privacy Policy</a>
          <span>·</span>
          <a href="/terms" className="underline hover:text-[#B0B0B0]/80">Terms of Service</a>
        </div>
      </form>
    </div>
  );
}
