import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Sevenhood <noreply@sevenhood.app>",
        to: ["hello@sevenhood.app"],
        reply_to: email,
        subject: `Demo Request — ${name}${company ? ` | ${company}` : ""}`,
        html: `
          <div style="font-family: -apple-system, 'Geist', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #FBF8F2; padding: 0; border-radius: 16px; overflow: hidden;">

            <!-- Header -->
            <div style="background: #0B0C0A; padding: 28px 32px; display: flex; align-items: center; gap: 10px;">
              <div style="width: 32px; height: 32px; background: #C9A56B; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
                <span style="color: #0B0C0A; font-size: 17px; font-weight: 700; line-height: 1;">S</span>
              </div>
              <span style="font-size: 16px; font-weight: 600; color: #F4F1EA; letter-spacing: -0.02em;">Sevenhood</span>
            </div>

            <!-- Body -->
            <div style="padding: 32px; background: #FBF8F2;">
              <p style="font-size: 11px; font-family: 'Courier New', monospace; text-transform: uppercase; letter-spacing: 0.1em; color: #C9A56B; margin: 0 0 12px 0;">New Enquiry</p>
              <h2 style="color: #0B0C0A; font-size: 22px; font-weight: 600; margin: 0 0 6px 0; letter-spacing: -0.02em;">
                Demo Request
              </h2>
              <p style="color: #6B6D68; font-size: 14px; margin: 0 0 28px 0; line-height: 1.5;">
                A new demo request was submitted via the contact form at sevenhood.app
              </p>

              <!-- Details card -->
              <div style="background: #FFFFFF; border-radius: 12px; border: 1px solid rgba(11,12,10,.08); overflow: hidden; margin-bottom: 28px;">
                <div style="padding: 14px 20px; border-bottom: 1px solid rgba(11,12,10,.06); display: flex; gap: 16px;">
                  <span style="font-size: 12px; color: #9B9D98; width: 130px; flex-shrink: 0; padding-top: 1px;">Name</span>
                  <span style="font-size: 14px; color: #0B0C0A; font-weight: 500;">${name}</span>
                </div>
                <div style="padding: 14px 20px; border-bottom: 1px solid rgba(11,12,10,.06); display: flex; gap: 16px;">
                  <span style="font-size: 12px; color: #9B9D98; width: 130px; flex-shrink: 0; padding-top: 1px;">Email</span>
                  <a href="mailto:${email}" style="font-size: 14px; color: #A88349; font-weight: 500; text-decoration: none;">${email}</a>
                </div>
                ${company ? `
                <div style="padding: 14px 20px; display: flex; gap: 16px;">
                  <span style="font-size: 12px; color: #9B9D98; width: 130px; flex-shrink: 0; padding-top: 1px;">Community / Company</span>
                  <span style="font-size: 14px; color: #0B0C0A; font-weight: 500;">${company}</span>
                </div>
                ` : `<div style="padding: 14px 20px; display: flex; gap: 16px;">
                  <span style="font-size: 12px; color: #9B9D98; width: 130px; flex-shrink: 0; padding-top: 1px;">Community</span>
                  <span style="font-size: 14px; color: #9B9D98;">—</span>
                </div>`}
              </div>

              <!-- CTA -->
              <a href="mailto:${email}?subject=Re%3A%20Your%20Sevenhood%20Demo%20Request"
                 style="display: inline-block; background: #0B0C0A; color: #F4F1EA; padding: 12px 24px; border-radius: 100px; text-decoration: none; font-weight: 500; font-size: 14px; letter-spacing: -0.01em;">
                Reply to ${name} →
              </a>
            </div>

            <!-- Footer -->
            <div style="padding: 20px 32px; border-top: 1px solid rgba(11,12,10,.08); background: #FBF8F2;">
              <p style="color: #9B9D98; font-size: 11px; font-family: 'Courier New', monospace; margin: 0; letter-spacing: 0.04em;">
                SENT FROM SEVENHOOD.APP · hello@sevenhood.app
              </p>
            </div>
          </div>
        `,
      }),
    });

    if (!res.ok) {
      const err = await res.json();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
