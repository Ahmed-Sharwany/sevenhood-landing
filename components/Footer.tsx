"use client";

import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";

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
      // Open a pre-filled email to hello@sevenhood.app
      const subject = isAr
        ? `طلب عرض توضيحي — ${form.name} | ${form.company}`
        : `Demo Request — ${form.name} | ${form.company}`;
      const body = isAr
        ? `الاسم: ${form.name}\nالبريد الإلكتروني: ${form.email}\nالمجتمع / الشركة: ${form.company}`
        : `Name: ${form.name}\nEmail: ${form.email}\nCommunity / Company: ${form.company}`;

      const mailtoLink = `mailto:hello@sevenhood.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;

      // Mark as success after short delay
      setTimeout(() => setStatus("success"), 800);
    } catch {
      setStatus("error");
    }
  };

  const platformLinks = isAr
    ? [
        { en: "Features", ar: "المميزات" },
        { en: "For Residents", ar: "للسكان" },
        { en: "For Operators", ar: "للمشغلين" },
        { en: "Pricing", ar: "الأسعار" },
        { en: "Integrations", ar: "التكاملات" },
      ]
    : [
        { en: "Features", ar: "المميزات" },
        { en: "For Residents", ar: "للسكان" },
        { en: "For Operators", ar: "للمشغلين" },
        { en: "Pricing", ar: "الأسعار" },
        { en: "Integrations", ar: "التكاملات" },
      ];

  const companyLinks = isAr
    ? [
        { label: "من نحن" },
        { label: "الوظائف" },
        { label: "المدونة" },
        { label: "الصحافة" },
        { label: "اتصل بنا" },
      ]
    : [
        { label: "About Us" },
        { label: "Careers" },
        { label: "Blog" },
        { label: "Press Kit" },
        { label: "Contact" },
      ];

  return (
    <footer
      id="contact"
      className="bg-[#04100A] border-t border-white/8"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Contact strip */}
      <div className="border-b border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className={`grid md:grid-cols-2 gap-12 items-center ${isAr ? "" : ""}`}>

            {/* Left: headline */}
            <div className={`space-y-4 ${isAr ? "text-right" : ""}`}>
              <span className="badge bg-gold/15 border border-gold/30 text-gold text-xs">
                {isAr ? "تواصل معنا" : "Get in Touch"}
              </span>
              {isAr ? (
                <h2
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  هل أنت مستعد لجلب سابع جار
                  <br />
                  إلى مجتمعك؟
                </h2>
              ) : (
                <h2 className="text-3xl font-bold text-white">
                  Ready to bring Sevenhood
                  <br />
                  to your community?
                </h2>
              )}
              <p
                className="text-white/55 leading-relaxed"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr
                  ? "فريقنا مستعد لتقديم عرض توضيحي مخصص لك وإعداد مجتمعك خلال أيام."
                  : "Our team is ready to walk you through a personalised demo and get your community onboarded within days."}
              </p>
              <a
                href="mailto:hello@sevenhood.app"
                className={`flex items-center gap-2 text-gold hover:text-gold-light text-sm font-medium transition-colors ${isAr ? "flex-row-reverse justify-end" : ""}`}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@sevenhood.app
              </a>
            </div>

            {/* Right: form */}
            <div className="space-y-4">
              {status === "success" ? (
                <div className={`p-8 rounded-2xl bg-green-500/10 border border-green-500/20 text-center space-y-3`}>
                  <div className="text-4xl">✅</div>
                  <p
                    className="text-white font-semibold text-lg"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {isAr ? "شكراً لتواصلك!" : "Thanks for reaching out!"}
                  </p>
                  <p
                    className="text-white/60 text-sm"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {isAr
                      ? "فتحنا بريدك الإلكتروني بمعلوماتك. أرسل الرسالة وسنرد خلال 24 ساعة."
                      : "Your email client has opened with your details. Send the message and we'll reply within 24 hours."}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="text-gold text-sm font-medium hover:text-gold-light transition-colors"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {isAr ? "إرسال رسالة أخرى" : "Send another message"}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder={isAr ? "اسمك" : "Your name"}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      className="px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                      style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif", textAlign: "right" } : undefined}
                    />
                    <input
                      type="email"
                      placeholder={isAr ? "البريد الإلكتروني" : "Email address"}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      className="px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                      style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif", textAlign: "right" } : undefined}
                    />
                    <input
                      type="text"
                      placeholder={isAr ? "المجتمع / الشركة" : "Community / Company"}
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="sm:col-span-2 px-4 py-3 bg-white/5 border border-white/15 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold/50 focus:bg-white/8 transition-all"
                      style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif", textAlign: "right" } : undefined}
                    />
                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="sm:col-span-2 py-3.5 bg-gold hover:bg-gold-light disabled:opacity-70 text-white font-semibold rounded-xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 disabled:cursor-not-allowed"
                      style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                    >
                      {status === "sending"
                        ? (isAr ? "جارٍ الإرسال..." : "Opening email...")
                        : (isAr ? "طلب عرض توضيحي ←" : "Request a Demo →")}
                    </button>
                  </div>
                  <p
                    className="text-white/30 text-xs text-center"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16 ${isAr ? "" : ""}`}>
          {/* Brand column */}
          <div className={`col-span-2 md:col-span-1 space-y-5 ${isAr ? "text-right" : ""}`}>
            <a href="#" className={`flex items-center gap-3 group ${isAr ? "flex-row-reverse" : ""}`}>
              <div className="w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" fill="#C87C2A" opacity="0.15" />
                  <polygon points="20,2 38,11 38,29 20,38 2,29 2,11" stroke="#C87C2A" strokeWidth="1.5" fill="none" />
                  <text x="20" y="25" textAnchor="middle" fill="#C87C2A" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">7</text>
                </svg>
              </div>
              <div className={isAr ? "text-right" : ""}>
                <span className="text-white font-bold text-xl block">
                  {isAr ? "سابع جار" : "Sevenhood"}
                </span>
                <p className="text-gold/70 text-xs">
                  {isAr ? "Sevenhood" : "سابع جار"}
                </p>
              </div>
            </a>

            <p
              className="text-white/45 text-sm leading-relaxed"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr
                ? "منصة إدارة المجتمعات الراقية، مصممة للمشاريع السكنية الفاخرة في المملكة العربية السعودية."
                : "The premium community management platform built for Saudi Arabia's finest residential developments."}
            </p>

            {/* Social */}
            <div className={`flex gap-3 ${isAr ? "flex-row-reverse" : ""}`}>
              {[
                { label: "X", icon: "𝕏" },
                { label: "LinkedIn", icon: "in" },
                { label: "Instagram", icon: "◉" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/6 border border-white/10 hover:bg-white/12 hover:border-gold/30 flex items-center justify-center text-white/60 hover:text-white text-sm font-bold transition-all duration-200"
                  aria-label={s.label}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div className={`space-y-5 ${isAr ? "text-right" : ""}`}>
            <h3
              className="text-white font-semibold text-sm"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "المنصة" : "Platform"}
            </h3>
            <ul className="space-y-3">
              {platformLinks.map((link) => (
                <li key={link.en}>
                  <a
                    href="#"
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 block"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {isAr ? link.ar : link.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className={`space-y-5 ${isAr ? "text-right" : ""}`}>
            <h3
              className="text-white font-semibold text-sm"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "الشركة" : "Company"}
            </h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href="#"
                    className="text-white/45 hover:text-white text-sm transition-colors duration-200 block"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className={`space-y-5 ${isAr ? "text-right" : ""}`}>
            <h3
              className="text-white font-semibold text-sm"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr ? "تواصل معنا" : "Contact"}
            </h3>
            <div className="space-y-4">
              <div>
                <p
                  className="text-white/30 text-xs mb-1"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "البريد الإلكتروني" : "Email"}
                </p>
                <a
                  href="mailto:hello@sevenhood.app"
                  className="text-gold hover:text-gold-light text-sm transition-colors font-medium"
                >
                  hello@sevenhood.app
                </a>
              </div>
              <div>
                <p
                  className="text-white/30 text-xs mb-1"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "الموقع" : "Location"}
                </p>
                <p
                  className="text-white/55 text-sm"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia"}
                </p>
              </div>
              <div>
                <p
                  className="text-white/30 text-xs mb-2"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {isAr ? "تحميل" : "Download"}
                </p>
                <div className={`flex gap-2 ${isAr ? "flex-row-reverse" : ""}`}>
                  <a href="#download" className="px-3 py-1.5 bg-white/8 border border-white/15 hover:border-gold/40 rounded-lg text-white/60 hover:text-white text-xs transition-all duration-200">
                    App Store
                  </a>
                  <a href="#download" className="px-3 py-1.5 bg-white/8 border border-white/15 hover:border-gold/40 rounded-lg text-white/60 hover:text-white text-xs transition-all duration-200">
                    Google Play
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className={`flex flex-col md:flex-row items-center justify-between gap-4 ${isAr ? "md:flex-row-reverse" : ""}`}>
            <div className={`flex flex-col md:flex-row items-center gap-4 text-white/30 text-xs ${isAr ? "md:flex-row-reverse" : ""}`}>
              <span>© {currentYear} Sevenhood Technologies.</span>
              <span
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                جميع الحقوق محفوظة
              </span>
            </div>
            <div className={`flex items-center gap-6 ${isAr ? "flex-row-reverse" : ""}`}>
              {(isAr
                ? ["سياسة الخصوصية", "شروط الاستخدام", "سياسة الكوكيز"]
                : ["Privacy Policy", "Terms of Service", "Cookie Policy"]
              ).map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-white/30 hover:text-white/60 text-xs transition-colors duration-200"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
