import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  // Support both JSON and form-encoded submissions (progressive enhancement)
  let name: string, email: string, phone: string, city: string;

  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const body = await request.json();
    name = body.name;
    email = body.email;
    phone = body.phone;
    city = body.city;
  } else {
    const formData = await request.formData();
    name = formData.get("name") as string;
    email = formData.get("email") as string;
    phone = formData.get("phone") as string;
    city = formData.get("city") as string;
  }

  // Server-side validation
  if (!name?.trim() || !email?.trim() || !phone?.trim() || !city?.trim()) {
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

  const registration = {
    name: name.trim(),
    email: email.trim(),
    phone: phone.trim(),
    city: city.trim(),
    registeredAt: new Date().toISOString(),
  };

  // Log to console for now
  console.log("📋 New webinar registration:", registration);

  // TODO: Wire GHL API — key pending
  // Expected: POST to GHL with contact data + trigger registration workflow
  // If GHL fails: log error, still redirect (don't lose the lead)

  // TODO: Fire Meta Pixel "Lead" event server-side if using Conversions API

  // Handle form-encoded (no-JS) submissions with a redirect
  if (!contentType.includes("application/json")) {
    return NextResponse.redirect(new URL("/confirmed", request.url));
  }

  return NextResponse.json({ success: true });
}
