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
          <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px;">
            <div style="margin-bottom: 24px;">
              <div style="display: inline-flex; align-items: center; gap: 8px;">
                <div style="width: 32px; height: 32px; background: #0D2818; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
                  <span style="color: #C87C2A; font-size: 18px; font-weight: 700;">7</span>
                </div>
                <span style="font-size: 18px; font-weight: 700; color: #0D2818;">Sevenhood</span>
              </div>
            </div>

            <h2 style="color: #0D2818; font-size: 22px; font-weight: 700; margin-bottom: 8px;">
              New Demo Request
            </h2>
            <p style="color: #666; font-size: 14px; margin-bottom: 24px;">
              Someone filled out the contact form on sevenhood.app
            </p>

            <div style="background: #F5F0E8; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 13px; width: 140px;">Name</td>
                  <td style="padding: 8px 0; color: #0D2818; font-size: 14px; font-weight: 600;">${name}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 13px;">Email</td>
                  <td style="padding: 8px 0; color: #C87C2A; font-size: 14px; font-weight: 600;">
                    <a href="mailto:${email}" style="color: #C87C2A; text-decoration: none;">${email}</a>
                  </td>
                </tr>
                ${company ? `
                <tr>
                  <td style="padding: 8px 0; color: #666; font-size: 13px;">Community / Company</td>
                  <td style="padding: 8px 0; color: #0D2818; font-size: 14px; font-weight: 600;">${company}</td>
                </tr>
                ` : ""}
              </table>
            </div>

            <a href="mailto:${email}?subject=Re: Your Sevenhood Demo Request"
               style="display: inline-block; background: #C87C2A; color: white; padding: 12px 24px; border-radius: 10px; text-decoration: none; font-weight: 600; font-size: 14px;">
              Reply to ${name} →
            </a>

            <p style="color: #999; font-size: 12px; margin-top: 32px; border-top: 1px solid #eee; padding-top: 16px;">
              This message was sent from the contact form at sevenhood.app
            </p>
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
