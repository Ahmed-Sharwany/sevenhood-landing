"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

function SevenMark({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <mask id="footer-mark" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="white" />
        <path
          d="M 46 22 C 14 22 14 32 32 32 C 50 32 50 42 18 42"
          stroke="black" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </mask>
      <rect x="4" y="4" width="56" height="56" rx="15" fill="currentColor" mask="url(#footer-mark)" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { isAr } = useLang();

  const [form, setForm] = useState({ name: "", email: "", company: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); setForm({ name: "", email: "", company: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const platformLinks = [
    { en: "Features",       ar: "المميزات" },
    { en: "For Residents",  ar: "للسكان" },
    { en: "For Operators",  ar: "للمشغلين" },
    { en: "Pricing",        ar: "الأسعار" },
    { en: "Integrations",   ar: "التكاملات" },
  ];

  const companyLinks = {
    EN: ["About Us", "Careers", "Blog", "Press Kit", "Contact"],
    AR: ["من نحن", "الوظائف", "المدونة", "الصحافة", "اتصل بنا"],
  };

  return (
    <footer
      id="contact"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Contact strip */}
      <div
        style={{
          background: "var(--ink-950)",
          borderTop: "1px solid rgba(244,241,234,.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className={`grid md:grid-cols-2 gap-12 items-start`}>

            {/* Left: headline */}
            <div className={`flex flex-col gap-4 ${isAr ? "items-end text-right" : ""}`}>
              <span
                className="eyebrow"
                style={{ borderColor: "rgba(201,165,107,.25)", color: "var(--gold-500)" }}
              >
                <span className="dot" style={{ background: "var(--gold-500)" }} />
                {isAr ? "تواصل معنا" : "Get in Touch"}
              </span>

              <h2
                className="text-[32px] font-medium tracking-[-0.02em] leading-[1.1]"
                style={{
                  color: "#F4F1EA",
                  ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
                }}
              >
                {isAr ? (
                  <>هل أنت مستعد لجلب سابع جار<br />إلى مجتمعك؟</>
                ) : (
                  <>Ready to bring Sevenhood<br />to your community?</>
                )}
              </h2>

              <p
                className="text-[15.5px] leading-[1.6] max-w-[44ch]"
                style={{
                  color: "var(--ink-300)",
                  ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
                }}
              >
                {isAr
                  ? "فريقنا مستعد لتقديم عرض توضيحي مخصص لك وإعداد مجتمعك خلال أيام."
                  : "Our team is ready to walk you through a personalised demo and get your community onboarded within days."}
              </p>

              <a
                href="mailto:hello@sevenhood.app"
                className={`flex items-center gap-2 text-[13.5px] font-medium transition-colors duration-[140ms] ${isAr ? "flex-row-reverse" : ""}`}
                style={{ color: "var(--gold-500)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-400)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold-500)")}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@sevenhood.app
              </a>
            </div>

            {/* Right: form */}
            <div>
              {status === "success" ? (
                <div
                  className="p-8 rounded-[var(--r-xl)] text-center flex flex-col items-center gap-4"
                  style={{ background: "rgba(86,102,86,.12)", border: "1px solid rgba(86,102,86,.25)" }}
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: "rgba(86,102,86,.2)" }}
                  >
                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="var(--sage-400)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <p
                    className="text-[18px] font-medium"
                    style={{ color: "#F4F1EA", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {isAr ? "شكراً لتواصلك معنا!" : "Thank you for contacting us!"}
                  </p>
                  <p
                    className="text-[14px] leading-[1.55]"
                    style={{ color: "var(--ink-300)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {isAr
                      ? "تلقّينا رسالتك بنجاح. سيتواصل معك فريقنا خلال 24 ساعة."
                      : "We've received your message. Our team will get back to you within 24 hours."}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-[--gold-500] text-[13px] font-medium underline underline-offset-2 hover:text-[--gold-400] transition-colors"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {isAr ? "إرسال رسالة أخرى" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { type: "text",  key: "name",    ph: isAr ? "اسمك" : "Your name",            col: "" },
                      { type: "email", key: "email",   ph: isAr ? "البريد الإلكتروني" : "Email address", col: "" },
                    ].map(({ type, key, ph, col }) => (
                      <input
                        key={key}
                        type={type}
                        placeholder={ph}
                        value={form[key as keyof typeof form]}
                        onChange={(e) => setForm({ ...form, [key]: e.target.value })}
                        required={key !== "company"}
                        className={col}
                        style={{
                          background: "rgba(244,241,234,.06)",
                          border: "1px solid rgba(244,241,234,.12)",
                          borderRadius: "var(--r-md)",
                          padding: "12px 14px",
                          color: "#F4F1EA",
                          fontSize: "14.5px",
                          fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist, sans-serif",
                          textAlign: isAr ? "right" as const : "left" as const,
                          width: "100%",
                          outline: "none",
                        }}
                        onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; e.target.style.boxShadow = "0 0 0 4px rgba(201,165,107,.12)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "rgba(244,241,234,.12)"; e.target.style.boxShadow = "none"; }}
                      />
                    ))}
                  </div>
                  <input
                    type="text"
                    placeholder={isAr ? "المجتمع / الشركة" : "Community / Company"}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    style={{
                      background: "rgba(244,241,234,.06)",
                      border: "1px solid rgba(244,241,234,.12)",
                      borderRadius: "var(--r-md)",
                      padding: "12px 14px",
                      color: "#F4F1EA",
                      fontSize: "14.5px",
                      fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist, sans-serif",
                      textAlign: isAr ? "right" as const : "left" as const,
                      width: "100%",
                      outline: "none",
                    }}
                    onFocus={(e) => { e.target.style.borderColor = "var(--gold-500)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(244,241,234,.12)"; }}
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn btn-gold"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      opacity: status === "sending" ? 0.7 : 1,
                      cursor: status === "sending" ? "not-allowed" : "pointer",
                      ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
                    }}
                  >
                    {status === "sending" ? (
                      <span className="flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        {isAr ? "جارٍ الإرسال..." : "Sending..."}
                      </span>
                    ) : (
                      isAr ? "طلب عرض توضيحي" : "Request a Demo →"
                    )}
                  </button>

                  {status === "error" && (
                    <p
                      className="text-[--terra] text-[12.5px] text-center"
                      style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                    >
                      {isAr
                        ? "حدث خطأ. يرجى المحاولة مجدداً أو التواصل عبر hello@sevenhood.app"
                        : "Something went wrong. Please try again or email hello@sevenhood.app"}
                    </p>
                  )}

                  <p
                    className="text-[12px] text-center"
                    style={{ color: "rgba(244,241,234,.25)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {isAr
                      ? "سنتواصل معك خلال 24 ساعة. لا بريد عشوائي، أبداً."
                      : "We'll get back to you within 24 hours. No spam, ever."}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div
        style={{
          background: "var(--ink-900)",
          borderTop: "1px solid rgba(244,241,234,.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">

            {/* Brand */}
            <div className={`col-span-2 md:col-span-1 flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
              <a href="#" className={`flex items-center gap-2.5 group ${isAr ? "flex-row-reverse" : ""}`}>
                <div style={{ color: "var(--gold-500)" }}>
                  <SevenMark size={26} />
                </div>
                <div className={isAr ? "text-right" : ""}>
                  {isAr ? (
                    <span className="text-[15px] font-semibold tracking-[-0.02em] block"
                      style={{ color: "#F4F1EA", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
                      سابع جار
                    </span>
                  ) : (
                    <span className="text-[15px] font-semibold tracking-[-0.02em] block" style={{ color: "#F4F1EA" }}>
                      Sevenhood
                    </span>
                  )}
                </div>
              </a>

              <p
                className="text-[13.5px] leading-[1.6]"
                style={{ color: "var(--ink-400)", maxWidth: "26ch", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
              >
                {isAr
                  ? "منصة إدارة المجتمعات الراقية، مصممة للمشاريع السكنية الفاخرة في المملكة العربية السعودية."
                  : "The premium community management platform built for Saudi Arabia's finest residential developments."}
              </p>

              <div className={`flex gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                {["𝕏", "in", "◉"].map((s, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[11px] font-bold transition-all duration-[140ms]"
                    style={{
                      background: "rgba(244,241,234,.06)",
                      border: "1px solid rgba(244,241,234,.08)",
                      color: "rgba(244,241,234,.4)",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--gold-500)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,165,107,.3)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.4)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,241,234,.08)"; }}
                  >
                    {s}
                  </a>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div className={`flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
              <h3
                className="text-[12.5px] font-mono uppercase tracking-[.14em]"
                style={{ color: "rgba(244,241,234,.3)", fontFamily: "Geist Mono, monospace" }}
              >
                {isAr ? "المنصة" : "Platform"}
              </h3>
              <ul className="flex flex-col gap-3">
                {platformLinks.map((link) => (
                  <li key={link.en}>
                    <a
                      href="#"
                      className="text-[13.5px] transition-colors duration-[140ms]"
                      style={{ color: "rgba(244,241,234,.4)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.8)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.4)")}
                    >
                      {isAr ? link.ar : link.en}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div className={`flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
              <h3
                className="text-[12.5px] font-mono uppercase tracking-[.14em]"
                style={{ color: "rgba(244,241,234,.3)", fontFamily: "Geist Mono, monospace" }}
              >
                {isAr ? "الشركة" : "Company"}
              </h3>
              <ul className="flex flex-col gap-3">
                {(isAr ? companyLinks.AR : companyLinks.EN).map((label) => (
                  <li key={label}>
                    <a
                      href="#"
                      className="text-[13.5px] transition-colors duration-[140ms]"
                      style={{ color: "rgba(244,241,234,.4)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.8)")}
                      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.4)")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className={`flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
              <h3
                className="text-[12.5px] font-mono uppercase tracking-[.14em]"
                style={{ color: "rgba(244,241,234,.3)", fontFamily: "Geist Mono, monospace" }}
              >
                {isAr ? "تواصل معنا" : "Contact"}
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="text-[11px] font-mono mb-1" style={{ color: "rgba(244,241,234,.25)", fontFamily: "Geist Mono, monospace" }}>
                    {isAr ? "البريد الإلكتروني" : "Email"}
                  </p>
                  <a
                    href="mailto:hello@sevenhood.app"
                    className="text-[13.5px] font-medium transition-colors duration-[140ms]"
                    style={{ color: "var(--gold-500)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold-400)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--gold-500)")}
                  >
                    hello@sevenhood.app
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-mono mb-1" style={{ color: "rgba(244,241,234,.25)", fontFamily: "Geist Mono, monospace" }}>
                    {isAr ? "الموقع" : "Location"}
                  </p>
                  <p
                    className="text-[13.5px]"
                    style={{ color: "rgba(244,241,234,.4)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                  </p>
                </div>
                <div>
                  <p className="text-[11px] font-mono mb-2" style={{ color: "rgba(244,241,234,.25)", fontFamily: "Geist Mono, monospace" }}>
                    {isAr ? "تحميل" : "Download"}
                  </p>
                  <div className={`flex gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    {["App Store", "Google Play"].map((s) => (
                      <a
                        key={s}
                        href="#download"
                        className="px-3 py-1.5 rounded-[var(--r-sm)] text-[11.5px] transition-all duration-[140ms]"
                        style={{
                          background: "rgba(244,241,234,.06)",
                          border: "1px solid rgba(244,241,234,.1)",
                          color: "rgba(244,241,234,.45)",
                          fontFamily: "Geist Mono, monospace",
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,165,107,.4)"; (e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.8)"; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(244,241,234,.1)"; (e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.45)"; }}
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(244,241,234,.06)" }}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
            <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isAr ? "md:flex-row-reverse" : ""}`}>
              <div className={`flex flex-col md:flex-row items-center gap-4 text-[12px] ${isAr ? "md:flex-row-reverse" : ""}`}>
                {isAr ? (
                  <span style={{ color: "rgba(244,241,234,.25)", fontFamily: "IBM Plex Sans Arabic, sans-serif" }}>
                    © {currentYear} Sevenhood Technologies. جميع الحقوق محفوظة
                  </span>
                ) : (
                  <span style={{ color: "rgba(244,241,234,.25)", fontFamily: "Geist Mono, monospace" }}>
                    © {currentYear} Sevenhood Technologies. All rights reserved.
                  </span>
                )}
              </div>
              <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
                {(isAr
                  ? ["سياسة الخصوصية", "شروط الاستخدام", "سياسة الكوكيز"]
                  : ["Privacy Policy", "Terms of Service", "Cookie Policy"]
                ).map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-[11.5px] transition-colors duration-[140ms]"
                    style={{
                      color: "rgba(244,241,234,.25)",
                      ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : { fontFamily: "Geist Mono, monospace" }),
                    }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.55)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(244,241,234,.25)")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
