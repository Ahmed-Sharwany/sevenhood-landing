"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

function SevenMark({ size = 52, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true" style={{ color }}>
      <mask id="hero-mark" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="white" />
        <path
          d="M 46 22 C 14 22 14 32 32 32 C 50 32 50 42 18 42"
          stroke="black" strokeWidth="5.2" strokeLinecap="round" strokeLinejoin="round" fill="none"
        />
      </mask>
      <rect x="4" y="4" width="56" height="56" rx="15" fill="currentColor" mask="url(#hero-mark)" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[18px] h-[18px]" fill="currentColor">
      <path d="M3.18 23.76c.39.22.84.22 1.23 0l11.45-6.57-2.53-2.54L3.18 23.76zM.5 1.86C.19 2.2 0 2.71 0 3.38v17.25c0 .67.19 1.18.5 1.52l.08.08 9.66-9.66v-.23L.58 1.78.5 1.86zm15.04 8.29l-2.56-2.56-9.8-5.63c-.39-.22-.84-.22-1.23 0C1.56 2.19 1.31 2.72 1.31 3.38v.41l12.22 7.02 1.01-1.01.5-.65zm1.96 1.13l-1.51.87-2.02 1.16 2.54 2.54 2.82-1.62c.79-.46.79-1.2 0-1.66l-1.83-1.29z" />
    </svg>
  );
}

const pillars = {
  EN: [
    { label: "Vision 2030 Aligned" },
    { label: "Early Access Available" },
    { label: "Fully Bilingual" },
  ],
  AR: [
    { label: "متوافق مع رؤية 2030" },
    { label: "وصول مبكر متاح" },
    { label: "ثنائي اللغة بالكامل" },
  ],
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        });
      },
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const ps = isAr ? pillars.AR : pillars.EN;

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-bg min-h-screen flex items-center relative overflow-hidden pt-[68px]"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Subtle geometric accent — floating behind content */}
      <div
        className="pointer-events-none absolute top-28 right-16 opacity-[0.06]"
        aria-hidden="true"
      >
        <svg width="320" height="320" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="158" stroke="var(--ink-950)" strokeWidth="1" />
          <circle cx="160" cy="160" r="110" stroke="var(--ink-950)" strokeWidth="1" />
          <circle cx="160" cy="160" r="62" stroke="var(--ink-950)" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
        <div
          className={`grid lg:grid-cols-2 gap-16 items-center ${
            isAr ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* ── Left: copy ── */}
          <div className={`flex flex-col gap-8 ${isAr ? "order-1 lg:order-2 items-end" : ""}`}>

            {/* Eyebrow */}
            <div className="reveal" style={{ transitionDelay: "0.05s" }}>
              <span className="eyebrow">
                <span className="dot" />
                {isAr ? "متاح الآن في المملكة العربية السعودية" : "Now Available in Saudi Arabia"}
              </span>
            </div>

            {/* Headline */}
            <div className="reveal" style={{ transitionDelay: "0.12s" }}>
              {isAr ? (
                <h1
                  className="text-[clamp(52px,7vw,96px)] leading-[0.95] tracking-[-0.03em] font-medium"
                  style={{ fontFamily: "IBM Plex Sans Arabic, sans-serif" }}
                >
                  <span className="text-[--fg]">حياة فاخرة.</span>
                  <br />
                  <span
                    className="font-serif italic font-normal"
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      background: "linear-gradient(90deg, #8F6F36, #C9A56B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    إدارة ذكية.
                  </span>
                </h1>
              ) : (
                <h1 className="text-[clamp(52px,7vw,96px)] leading-[0.95] tracking-[-0.035em]">
                  <span className="font-medium text-[--fg]">Premium</span>
                  <br />
                  <em
                    className="font-serif font-normal italic"
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      background: "linear-gradient(90deg, #8F6F36, #C9A56B)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    living
                  </em>
                  <span className="font-medium text-[--fg]">, brilliantly</span>
                  <br />
                  <span className="font-medium text-[--fg]">managed.</span>
                </h1>
              )}
            </div>

            {/* Sub */}
            <div className="reveal" style={{ transitionDelay: "0.2s" }}>
              <p
                className="text-[18px] leading-[1.55] text-[--fg-muted] max-w-[50ch]"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {isAr
                  ? "سابع جار يربط السكان والمشغلين ومزودي الخدمات في منصة سكنية متكاملة، مصممة خصيصاً للمجتمعات الراقية في المملكة العربية السعودية."
                  : "Sevenhood connects residents, operators, and service providers in one seamless platform — built exclusively for Saudi Arabia's finest residential communities."}
              </p>
            </div>

            {/* CTAs */}
            <div
              className={`reveal flex flex-col sm:flex-row gap-3 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ transitionDelay: "0.28s" }}
            >
              <a
                href="#download"
                className="btn btn-primary btn-lg"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                <AppleIcon />
                {isAr ? "حمّل التطبيق" : "Download App"}
              </a>
              <a
                href="https://admin.sevenhood.app"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost btn-lg"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                </svg>
                {isAr ? "وحدة تحكم المشغل" : "Operator Console"}
              </a>
            </div>

            {/* Store badges */}
            <div
              className={`reveal flex flex-col sm:flex-row gap-2.5 ${isAr ? "sm:flex-row-reverse" : ""}`}
              style={{ transitionDelay: "0.34s" }}
            >
              {[
                { icon: <AppleIcon />, sub: isAr ? "متاح على" : "Download on the", main: "App Store" },
                { icon: <GoogleIcon />, sub: isAr ? "احصل عليه من" : "Get it on", main: "Google Play" },
              ].map((store, i) => (
                <a
                  key={i}
                  href="#download"
                  className="flex items-center gap-3 px-4 py-3 rounded-[var(--r-lg)] border border-[--hairline-strong] hover:bg-[--bg-sunken] transition-all duration-[140ms] bg-[--bg-elev]"
                  style={{ boxShadow: "var(--sh-1)" }}
                >
                  <div className="text-[--fg-muted]">{store.icon}</div>
                  <div className={isAr ? "text-right" : ""}>
                    <p className="text-[10.5px] text-[--fg-soft] font-mono uppercase tracking-[.08em]"
                       style={{ fontFamily: "Geist Mono, monospace" }}>
                      {store.sub}
                    </p>
                    <p className="text-[13.5px] font-medium text-[--fg] tracking-[-0.01em]">
                      {store.main}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Trust pillars */}
            <div
              className={`reveal flex flex-wrap gap-2 ${isAr ? "justify-end" : ""}`}
              style={{ transitionDelay: "0.4s" }}
            >
              {ps.map((p, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[--hairline-strong] text-[12px] text-[--fg-muted]"
                  style={{ fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist Mono, monospace",
                           letterSpacing: isAr ? 0 : ".06em", textTransform: isAr ? "none" : "uppercase" }}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[--sage-600] inline-block" />
                  {p.label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: app preview ── */}
          <div
            className={`reveal relative ${isAr ? "order-2 lg:order-1" : ""}`}
            style={{ transitionDelay: "0.18s" }}
          >
            <div className="relative mx-auto max-w-[320px]">
              {/* Warm glow */}
              <div className="absolute inset-0 bg-[#C9A56B]/20 blur-3xl rounded-full scale-75 pointer-events-none" />

              {/* Phone frame */}
              <div className="relative z-10 mx-auto w-[280px] animate-float">
                <div
                  className="relative rounded-[2.8rem] border border-[--hairline] overflow-hidden aspect-[9/19]"
                  style={{
                    background: "var(--bone-100)",
                    boxShadow: "var(--sh-3), 0 0 0 1px rgba(11,12,10,.06)",
                  }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[--ink-950] rounded-b-2xl z-20" />

                  {/* Screen */}
                  <div
                    className="absolute inset-0 flex flex-col overflow-hidden"
                    style={{ background: "var(--bone-50)" }}
                  >
                    {/* Status bar */}
                    <div className="pt-8 px-5 flex justify-between items-center">
                      <span className="text-[--fg-soft] text-[10px] font-mono">9:41</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4 h-2 border border-[--ink-300] rounded-sm">
                          <div className="w-3 h-full bg-[--ink-300] rounded-sm" />
                        </div>
                      </div>
                    </div>

                    {/* Header */}
                    <div className="px-5 pt-3 pb-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-[--fg-soft] text-[9px] font-mono uppercase tracking-[.08em]">
                            {isAr ? "صباح الخير" : "Good morning"}
                          </p>
                          <p className="text-[--fg] font-medium text-[12px] tracking-[-0.01em]">
                            {isAr ? "خالد المنصوري" : "Khaled Al-Mansouri"}
                          </p>
                        </div>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold"
                          style={{
                            background: "linear-gradient(135deg, var(--gold-500), var(--gold-700))",
                            color: "#fff",
                          }}
                        >
                          K
                        </div>
                      </div>
                    </div>

                    {/* Property card */}
                    <div
                      className="mx-4 mb-2.5 p-3 rounded-[var(--r-lg)] border border-[--hairline]"
                      style={{ background: "var(--bg-elev)", boxShadow: "var(--sh-1)" }}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-[--gold-600] text-[9px] font-mono uppercase tracking-[.1em]">
                            Roshn Front
                          </p>
                          <p className="text-[--fg] font-medium text-[11px] mt-0.5 tracking-[-0.01em]">
                            {isAr ? "فيلا 7، البوابة أ" : "Villa 7, Gate A"}
                          </p>
                        </div>
                        <div
                          className="w-7 h-7 rounded-[var(--r-sm)] flex items-center justify-center text-[13px]"
                          style={{ background: "var(--gold-50)" }}
                        >
                          🏡
                        </div>
                      </div>
                    </div>

                    {/* Quick actions */}
                    <div className="px-4 mb-2.5">
                      <p className="text-[--fg-soft] text-[9px] font-mono uppercase tracking-[.1em] mb-1.5">
                        {isAr ? "الإجراءات السريعة" : "Quick Actions"}
                      </p>
                      <div className="grid grid-cols-4 gap-1.5">
                        {[
                          { icon: "🔧", en: "Fix",  ar: "صيانة" },
                          { icon: "🏊", en: "Pool", ar: "مسبح" },
                          { icon: "🚗", en: "Gate", ar: "بوابة" },
                          { icon: "💬", en: "Chat", ar: "دردشة" },
                        ].map((action) => (
                          <div key={action.en} className="flex flex-col items-center gap-1">
                            <div
                              className="w-9 h-9 rounded-[var(--r-sm)] flex items-center justify-center text-[15px] border border-[--hairline]"
                              style={{ background: "var(--bg-elev)" }}
                            >
                              {action.icon}
                            </div>
                            <span className="text-[--fg-soft] text-[8.5px] font-mono">
                              {isAr ? action.ar : action.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity item */}
                    <div
                      className="mx-4 p-2.5 rounded-[var(--r-md)] border border-[--hairline] flex items-center gap-2.5"
                      style={{ background: "var(--bg-elev)" }}
                    >
                      <div
                        className="w-7 h-7 rounded-[var(--r-sm)] flex items-center justify-center text-[12px] shrink-0"
                        style={{ background: "rgba(86,102,86,.12)" }}
                      >
                        ✅
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-[--fg] text-[10.5px] font-medium truncate">
                          {isAr ? "اكتمال الصيانة" : "Maintenance complete"}
                        </p>
                        <p className="text-[--fg-soft] text-[9px] font-mono">
                          {isAr ? "وحدة التكييف · الآن" : "A/C unit serviced · just now"}
                        </p>
                      </div>
                    </div>

                    {/* Bottom nav */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[56px] flex items-center justify-around px-2 border-t border-[--hairline]"
                      style={{ background: "rgba(251,248,242,.95)", backdropFilter: "blur(12px)" }}
                    >
                      {["🏠", "📅", "🔧", "👥", "⚙️"].map((icon, i) => (
                        <button
                          key={i}
                          className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-[var(--r-sm)] ${
                            i === 0 ? "text-[--gold-600]" : "text-[--ink-300]"
                          }`}
                        >
                          <span className="text-[15px]">{icon}</span>
                          {i === 0 && (
                            <div className="w-1 h-1 rounded-full bg-[--gold-500]" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification — visitor */}
              <div
                className="absolute -left-10 top-24 animate-float z-20 rounded-[14px] p-3 flex items-center gap-2.5 shadow-sh-2"
                style={{
                  background: "var(--bg-elev)",
                  border: "1px solid var(--hairline)",
                  animationDelay: "0.8s",
                  boxShadow: "var(--sh-2)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-[10px] flex items-center justify-center text-[13px] shrink-0"
                  style={{ background: "var(--ink-50)" }}
                >
                  🔑
                </div>
                <div>
                  <p className="text-[--fg] text-[11px] font-medium leading-tight">
                    {isAr ? "وصل زائر" : "Visitor Arrived"}
                  </p>
                  <p className="text-[--fg-soft] text-[10px] font-mono">
                    {isAr ? "البوابة ب · قبل دقيقتين" : "Gate B · 2 min ago"}
                  </p>
                </div>
              </div>

              {/* Floating notification — AI */}
              <div
                className="absolute -right-8 bottom-32 animate-float z-20 rounded-[14px] p-3 flex items-center gap-2.5"
                style={{
                  background: "var(--ink-950)",
                  border: "1px dashed rgba(201,165,107,.4)",
                  animationDelay: "2.5s",
                  boxShadow: "var(--sh-2)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-[10px] flex items-center justify-center text-[13px] shrink-0"
                  style={{ background: "rgba(201,165,107,.12)" }}
                >
                  ✦
                </div>
                <div>
                  <p className="text-[11px] font-medium leading-tight" style={{ color: "#F4F1EA" }}>
                    {isAr ? "التصميم جاهز" : "AI Design Ready"}
                  </p>
                  <p className="text-[10px] font-mono" style={{ color: "var(--gold-500)" }}>
                    {isAr ? "غرفة المعيشة · مكتمل" : "Living room · Done"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hairline separator at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[--hairline]" />
    </section>
  );
}
