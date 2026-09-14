import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const formLink = process.env.GOOGLE_FORM_LINK;
  const fieldIdName = process.env.GOOGLE_FORM_FIELD_ID_NAME;
  const fieldIdEmail = process.env.GOOGLE_FORM_FIELD_ID_EMAIL;
  const fieldIdMessage = process.env.GOOGLE_FORM_FIELD_ID_MESSAGE;
  const fieldIdSocial = process.env.GOOGLE_FORM_FIELD_ID_SOCIAL;

  if (!formLink || !fieldIdName || !fieldIdEmail || !fieldIdMessage) {
    return new NextResponse(
      "Please configure the env variables: GOOGLE_FORM_LINK and field IDs",
      { status: 500 }
    );
  }

  try {
    const body = await req.json();
    const { name = "", message = "", social = "", email = "" } = body;

    const params = new URLSearchParams();
    params.append(fieldIdName, name);
    params.append(fieldIdEmail, email);
    params.append(fieldIdMessage, message);
    if (fieldIdSocial) params.append(fieldIdSocial, social);

    const submitUrl = `${formLink.replace(/\/$/, "")}/formResponse`;

    // Opt-in debug only — does not skip submissions in local development.
    if (process.env.DEBUG_CONTACT === "true") {
      return NextResponse.json({ submitUrl, body: params.toString() });
    }

    const res = await fetch(submitUrl, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
      redirect: "follow",
      cache: "no-store",
    });

    // Google Forms often responds with a redirect (3xx) after a successful save.
    if (res.status >= 400) {
      const text = await res.text().catch(() => "");
      console.error("Google Forms submission failed:", res.status, text);
      return new NextResponse(`Failed to submit form: ${res.status}`, {
        status: 502,
      });
    }

    return NextResponse.json("Success!");
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
