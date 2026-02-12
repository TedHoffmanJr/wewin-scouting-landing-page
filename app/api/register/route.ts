import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Support both JSON and form-encoded submissions (progressive enhancement)
  let firstName: string,
    email: string,
    phone: string,
    city: string,
    state: string;

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    firstName = body.firstName;
    email = body.email;
    phone = body.phone;
    city = body.city;
    state = body.state;
  } else {
    const formData = await request.formData();
    firstName = formData.get("firstName") as string;
    email = formData.get("email") as string;
    phone = formData.get("phone") as string;
    city = formData.get("city") as string;
    state = formData.get("state") as string;
  }

  // Server-side validation
  if (
    !firstName?.trim() ||
    !email?.trim() ||
    !phone?.trim() ||
    !city?.trim() ||
    !state?.trim()
  ) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    return NextResponse.json(
      { error: "Invalid email address" },
      { status: 400 }
    );
  }

  const phoneDigits = phone.trim().replace(/\D/g, "");
  if (phoneDigits.length < 10) {
    return NextResponse.json(
      { error: "Phone number must be at least 10 digits" },
      { status: 400 }
    );
  }

  const registration = {
    firstName: firstName.trim(),
    email: email.trim(),
    phone: phone.trim(),
    city: city.trim(),
    state: state.trim(),
    registeredAt: new Date().toISOString(),
  };

  // Always log full registration for manual recovery via Vercel logs
  console.log("New webinar registration:", JSON.stringify(registration));

  // --- GHL API: Create/upsert contact ---
  const GHL_API_KEY = process.env.GHL_API_KEY;
  const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

  if (GHL_API_KEY && GHL_LOCATION_ID) {
    try {
      const ghlResponse = await fetch(
        "https://services.leadconnectorhq.com/contacts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${GHL_API_KEY}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify({
            firstName: registration.firstName,
            email: registration.email,
            phone: `+1${phoneDigits}`,
            city: registration.city,
            state: registration.state,
            locationId: GHL_LOCATION_ID,
            tags: [
              "wewin-webinar",
              "webinar-2026-02-19",
              "source-meta-ads",
            ],
            source: "joinwewingames.com",
          }),
        }
      );

      if (!ghlResponse.ok) {
        const errorBody = await ghlResponse.text();
        console.error(
          `GHL API error (${ghlResponse.status}): ${errorBody}`,
          { registration }
        );
      } else {
        const ghlData = await ghlResponse.json();
        console.log("GHL contact created:", ghlData.contact?.id);
      }
    } catch (ghlError) {
      console.error("GHL API call failed:", ghlError, { registration });
    }
  } else {
    console.warn("GHL API keys not configured — skipping CRM integration.", {
      registration,
    });
  }

  // Handle form-encoded (no-JS) submissions with a redirect
  if (!contentType.includes("application/json")) {
    return NextResponse.redirect(new URL("/confirmed", request.url));
  }

  return NextResponse.json({ success: true });
}
