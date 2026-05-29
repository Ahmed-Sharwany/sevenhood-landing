"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-[17px] h-[17px]" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

const stats = {
  EN: [
    { number: "2,400+", label: "Units Managed" },
    { number: "15+",    label: "Communities" },
    { number: "97%",    label: "Satisfaction" },
    { number: "<24h",   label: "Onboarding" },
  ],
  AR: [
    { number: "٢٤٠٠+", label: "وحدة مُدارة" },
    { number: "١٥+",   label: "مجتمع سكني" },
    { number: "٩٧٪",   label: "رضا السكان" },
    { number: "<٢٤ ساعة", label: "تفعيل المنصة" },
  ],
};

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { isAr } = useLang();
  const statList = isAr ? stats.AR : stats.EN;

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".reveal, .reveal-scale");
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.06 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="hero-dark-bg grain-overlay relative min-h-screen flex flex-col justify-between overflow-hidden pt-[68px]"
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* ── Animated aurora orbs ── */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* ── S-mark watermark ── */}
      <div
        className="pointer-events-none absolute -top-8 right-0 opacity-[0.04] select-none"
        aria-hidden="true"
        style={{ transform: isAr ? "scaleX(-1)" : undefined }}
      >
        <svg width="560" height="560" viewBox="0 0 64 64" fill="none">
          <mask id="wm" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
            <rect x="4" y="4" width="56" height="56" rx="15" fill="white" />
            <path d="M 46 22 C 14 22 14 32 32 32 C 50 32 50 42 18 42" stroke="black" strokeWidth="5.2" strokeLinecap="round" fill="none" />
          </mask>
          <rect x="4" y="4" width="56" height="56" rx="15" fill="#C9A56B" mask="url(#wm)" />
        </svg>
      </div>

      {/* ── Subtle grid ── */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.018]" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#C9A56B" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full flex-1 flex items-center">
        <div
          className={`grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-10 xl:gap-16 items-center py-20 w-full`}
          style={{ direction: isAr ? "rtl" : "ltr" }}
        >

          {/* ── Copy column ── */}
          <div className={`flex flex-col gap-7 ${isAr ? "items-end text-right" : ""}`}>

            {/* Badge */}
            <div className="stagger-child">
              <span
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                style={{
                  background: "rgba(201,165,107,0.1)",
                  border: "1px solid rgba(201,165,107,0.28)",
                  fontFamily: "Geist Mono, monospace",
                  fontSize: "11px",
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  color: "#C9A56B",
                }}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full inline-block"
                  style={{ background: "#C9A56B", boxShadow: "0 0 8px rgba(201,165,107,0.8)", animation: "pulse 2s ease-in-out infinite" }}
                />
                {isAr ? "متاح الآن في المملكة العربية السعودية" : "Now Available · Saudi Arabia"}
              </span>
            </div>

            {/* Headline */}
            <div className="stagger-child">
              {isAr ? (
                <h1
                  style={{
                    fontFamily: "IBM Plex Sans Arabic, sans-serif",
                    fontSize: "clamp(54px, 8vw, 108px)",
                    lineHeight: "0.95",
                    letterSpacing: "-0.02em",
                  }}
                >
                  <span style={{ color: "#FBF8F2", fontWeight: 600 }}>حياة فاخرة،</span>
                  <br />
                  <em
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      background: "linear-gradient(110deg, #8F6F36, #C9A56B, #E8CC9A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    إدارة ذكية.
                  </em>
                </h1>
              ) : (
                <h1
                  style={{
                    fontSize: "clamp(54px, 8vw, 108px)",
                    lineHeight: "0.94",
                    letterSpacing: "-0.04em",
                  }}
                >
                  <span style={{ color: "#FBF8F2", fontWeight: 600 }}>Premium</span>
                  {" "}
                  <em
                    style={{
                      fontFamily: "Instrument Serif, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      background: "linear-gradient(110deg, #8F6F36, #C9A56B, #E8CC9A)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    living,
                  </em>
                  <br />
                  <span style={{ color: "#FBF8F2", fontWeight: 600 }}>brilliantly</span>
                  <br />
                  <span
                    style={{
                      color: "rgba(251,248,242,0.32)",
                      fontWeight: 400,
                      fontFamily: "Instrument Serif, serif",
                      fontStyle: "italic",
                    }}
                  >
                    managed.
                  </span>
                </h1>
              )}
            </div>

            {/* Description */}
            <div className="stagger-child">
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.65",
                  color: "rgba(251,248,242,0.5)",
                  maxWidth: "44ch",
                  fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined,
                }}
              >
                {isAr
                  ? "سابع جار يربط السكان والمشغلين ومزودي الخدمات في منصة سكنية متكاملة، مصممة خصيصاً للمجتمعات الراقية في المملكة العربية السعودية."
                  : "Sevenhood connects residents, operators, and service providers in one seamless platform — built exclusively for Saudi Arabia's finest residential communities."}
              </p>
            </div>

            {/* CTA buttons */}
            <div
              className={`stagger-child flex flex-wrap gap-3 ${isAr ? "flex-row-reverse" : ""}`}
            >
              <a
                href="#download"
                className="inline-flex items-center gap-2.5 rounded-full font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "linear-gradient(135deg, #C9A56B, #A88349)",
                  color: "#0B0C0A",
                  padding: "15px 30px",
                  fontSize: "15px",
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined,
                  boxShadow: "0 8px 32px rgba(201,165,107,0.35), 0 1px 0 rgba(255,255,255,0.2) inset",
                }}
              >
                <AppleIcon />
                {isAr ? "حمّل التطبيق" : "Download App"}
              </a>
              <a
                href="https://admin.sevenhood.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  background: "rgba(251,248,242,0.05)",
                  color: "rgba(251,248,242,0.75)",
                  border: "1.5px solid rgba(251,248,242,0.14)",
                  padding: "15px 30px",
                  fontSize: "15px",
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined,
                  backdropFilter: "blur(10px)",
                }}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
                </svg>
                {isAr ? "وحدة تحكم المشغل" : "Operator Console"}
              </a>
            </div>

            {/* Stats row */}
            <div className="stagger-child w-full">
              <div
                className="hero-stats-row border-glow-anim"
                style={{ direction: isAr ? "rtl" : "ltr" }}
              >
                {statList.map((s, i) => (
                  <div
                    key={i}
                    className="hero-stat"
                    style={{ textAlign: isAr ? "right" : "left" }}
                  >
                    <span className="hero-stat-number" style={{ fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined }}>
                      {s.number}
                    </span>
                    <span className="hero-stat-label" style={{ fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined, letterSpacing: isAr ? 0 : ".1em" }}>
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust items */}
            <div
              className={`stagger-child hero-trust-strip`}
              style={{ direction: isAr ? "rtl" : "ltr" }}
            >
              {(isAr
                ? ["متوافق مع رؤية 2030", "معتمد PDPL", "ثنائي اللغة", "مبني في المملكة"]
                : ["Vision 2030 Aligned", "PDPL Compliant", "Natively Bilingual", "KSA-Built"]
              ).map((label, i) => (
                <span
                  key={i}
                  className="hero-trust-item"
                  style={{
                    fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : undefined,
                    letterSpacing: isAr ? 0 : ".08em",
                    textTransform: isAr ? "none" : "uppercase",
                    fontSize: isAr ? "11px" : undefined,
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10">
                    <path d="M5 0.5l1.2 2.4 2.8.4-2 1.95.47 2.75L5 6.77 2.53 7.99 3 5.24 1 3.3l2.8-.4L5 .5z" fill="#C9A56B" opacity="0.55" />
                  </svg>
                  {label}
                </span>
              ))}
            </div>
          </div>

          {/* ── Phone column ── */}
          <div
            className={`relative flex justify-center ${isAr ? "lg:justify-start" : "lg:justify-end"}`}
          >
            {/* Ambient glow behind phone */}
            <div
              className="absolute pointer-events-none"
              style={{
                width: "380px",
                height: "480px",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                background: "radial-gradient(ellipse 80% 70% at 50% 55%, rgba(201,165,107,0.22) 0%, rgba(201,165,107,0.08) 45%, transparent 70%)",
                filter: "blur(30px)",
              }}
            />

            {/* Phone wrapper */}
            <div className="relative z-10 phone-perspective">
              {/* Phone shell */}
              <div
                className="relative mx-auto"
                style={{ width: "280px" }}
              >
                <div
                  className="relative rounded-[2.8rem] overflow-hidden"
                  style={{
                    aspectRatio: "9/19",
                    background: "#0D0F0C",
                    border: "1.5px solid rgba(201,165,107,0.18)",
                    boxShadow: "0 60px 120px rgba(0,0,0,.85), 0 0 0 1px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.07)",
                  }}
                >
                  {/* Notch */}
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 z-20 rounded-b-2xl"
                    style={{ width: "90px", height: "22px", background: "#060707" }}
                  />

                  {/* Screen content */}
                  <div className="absolute inset-0 flex flex-col" style={{ background: "#F5F1EA" }}>

                    {/* Status bar */}
                    <div className="pt-8 px-5 flex justify-between items-center">
                      <span style={{ color: "rgba(11,12,10,0.4)", fontSize: "10px", fontFamily: "Geist Mono, monospace" }}>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="10" viewBox="0 0 12 10" fill="rgba(11,12,10,0.3)">
                          <rect x="0" y="6" width="2" height="4" rx="0.5"/>
                          <rect x="3" y="4" width="2" height="6" rx="0.5"/>
                          <rect x="6" y="2" width="2" height="8" rx="0.5"/>
                          <rect x="9" y="0" width="2" height="10" rx="0.5"/>
                        </svg>
                        <div className="w-[18px] h-[9px] border rounded-sm flex items-center px-[2px]" style={{ borderColor: "rgba(11,12,10,0.25)" }}>
                          <div className="w-full h-[5px] rounded-[1px]" style={{ background: "rgba(11,12,10,0.25)" }} />
                        </div>
                      </div>
                    </div>

                    {/* Greeting */}
                    <div className="px-5 pt-3 pb-2">
                      <p style={{ color: "rgba(11,12,10,0.38)", fontSize: "9px", fontFamily: "Geist Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        {isAr ? "صباح الخير" : "Good morning"}
                      </p>
                      <p style={{ color: "#0B0C0A", fontWeight: 700, fontSize: "15px", letterSpacing: "-0.02em", marginTop: "1px" }}>
                        {isAr ? "خالد المنصوري" : "Khaled Al-Mansouri"}
                      </p>
                    </div>

                    {/* Building card */}
                    <div className="mx-4 mb-3 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(11,12,10,0.07)", boxShadow: "0 4px 16px rgba(0,0,0,.08)" }}>
                      <div className="relative h-[72px]" style={{ background: "linear-gradient(135deg, #0B0C0A 0%, #1E211C 100%)" }}>
                        {/* Subtle pattern */}
                        <div className="absolute inset-0 opacity-10">
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                              <pattern id="micro" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C9A56B" strokeWidth="0.4"/>
                              </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#micro)" />
                          </svg>
                        </div>
                        {/* S-mark watermark */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-15">
                          <svg width="36" height="36" viewBox="0 0 64 64" fill="none">
                            <mask id="ph-m" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
                              <rect x="4" y="4" width="56" height="56" rx="15" fill="white"/>
                              <path d="M 46 22 C 14 22 14 32 32 32 C 50 32 50 42 18 42" stroke="black" strokeWidth="5.2" strokeLinecap="round" fill="none"/>
                            </mask>
                            <rect x="4" y="4" width="56" height="56" rx="15" fill="#C9A56B" mask="url(#ph-m)"/>
                          </svg>
                        </div>
                        <div className="absolute bottom-2 left-3 right-3 flex justify-between items-end">
                          <div>
                            <p style={{ color: "#C9A56B", fontSize: "8px", fontFamily: "Geist Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase" }}>
                              {isAr ? "روشن فرونت" : "Roshn Front"}
                            </p>
                            <p style={{ color: "#FBF8F2", fontWeight: 600, fontSize: "11px" }}>
                              {isAr ? "فيلا 7، البوابة أ" : "Villa 7, Gate A"}
                            </p>
                          </div>
                          <span
                            className="px-2 py-0.5 rounded-full text-[8px]"
                            style={{
                              background: "rgba(201,165,107,0.18)",
                              border: "1px solid rgba(201,165,107,0.3)",
                              color: "#C9A56B",
                              fontFamily: "Geist Mono, monospace",
                            }}
                          >
                            Floor 5
                          </span>
                        </div>
                      </div>

                      {/* Quick actions */}
                      <div className="grid grid-cols-4" style={{ background: "white", borderTop: "1px solid rgba(11,12,10,0.05)" }}>
                        {[
                          { icon: "🔧", en: "Fix", ar: "صيانة" },
                          { icon: "🏊", en: "Pool", ar: "مسبح" },
                          { icon: "🚗", en: "Gate", ar: "بوابة" },
                          { icon: "💬", en: "Chat", ar: "دردشة" },
                        ].map((a) => (
                          <div key={a.en} className="flex flex-col items-center gap-0.5 py-2.5">
                            <span style={{ fontSize: "15px" }}>{a.icon}</span>
                            <span style={{ color: "rgba(11,12,10,0.38)", fontSize: "8px", fontFamily: "Geist Mono, monospace" }}>
                              {isAr ? a.ar : a.en}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Activity feed */}
                    <div className="px-4 flex flex-col gap-1.5">
                      <p style={{ color: "rgba(11,12,10,0.35)", fontSize: "8px", fontFamily: "Geist Mono, monospace", letterSpacing: ".1em", textTransform: "uppercase" }}>
                        {isAr ? "النشاط الأخير" : "Recent Activity"}
                      </p>
                      {[
                        { icon: "✅", text: isAr ? "اكتملت الصيانة" : "Maintenance complete", sub: isAr ? "وحدة التكييف · الآن" : "A/C unit · just now", bg: "rgba(86,102,86,.1)" },
                        { icon: "🔔", text: isAr ? "طلب زيارة جديد" : "New visitor request", sub: isAr ? "البوابة ب · ٣ دقائق" : "Gate B · 3 min ago", bg: "rgba(201,165,107,.1)" },
                        { icon: "📅", text: isAr ? "حجز المسبح مؤكد" : "Pool booking confirmed", sub: isAr ? "الغد · ١٠:٠٠ ص" : "Tomorrow · 10:00 AM", bg: "rgba(62,88,120,.1)" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2 rounded-xl"
                          style={{ background: "white", border: "1px solid rgba(11,12,10,0.055)" }}
                        >
                          <div className="w-7 h-7 rounded-lg flex items-center justify-center text-[12px] shrink-0" style={{ background: item.bg }}>
                            {item.icon}
                          </div>
                          <div className="min-w-0">
                            <p className="truncate" style={{ color: "#0B0C0A", fontSize: "10px", fontWeight: 600 }}>{item.text}</p>
                            <p style={{ color: "rgba(11,12,10,0.38)", fontSize: "8.5px", fontFamily: "Geist Mono, monospace" }}>{item.sub}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Bottom nav */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-[52px] flex items-center justify-around border-t"
                      style={{ borderColor: "rgba(11,12,10,0.07)", background: "rgba(245,241,234,0.96)", backdropFilter: "blur(16px)" }}
                    >
                      {["🏠", "📅", "🔧", "👥", "⚙️"].map((icon, i) => (
                        <button
                          key={i}
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: "2px",
                            padding: "4px 8px",
                            color: i === 0 ? "#C9A56B" : "rgba(11,12,10,0.28)",
                          }}
                        >
                          <span style={{ fontSize: "16px" }}>{icon}</span>
                          {i === 0 && (
                            <div
                              style={{ width: "4px", height: "4px", borderRadius: "2px", background: "#C9A56B" }}
                            />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating card: Visitor */}
              <div
                className="absolute animate-float z-20 rounded-[14px] p-3 flex items-center gap-2.5"
                style={{
                  left: isAr ? "auto" : "-72px",
                  right: isAr ? "-72px" : "auto",
                  top: "76px",
                  background: "rgba(251,248,242,0.97)",
                  border: "1px solid rgba(11,12,10,0.07)",
                  boxShadow: "0 12px 40px rgba(0,0,0,.35), 0 1px 0 rgba(255,255,255,.9) inset",
                  backdropFilter: "blur(16px)",
                  animationDelay: "0.5s",
                  minWidth: "158px",
                }}
              >
                <div className="w-8 h-8 rounded-[10px] flex items-center justify-center text-[13px] shrink-0" style={{ background: "rgba(201,165,107,0.12)", border: "1px solid rgba(201,165,107,0.2)" }}>
                  🔑
                </div>
                <div>
                  <p style={{ color: "#0B0C0A", fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>
                    {isAr ? "وصل زائر" : "Visitor Arrived"}
                  </p>
                  <p style={{ color: "rgba(11,12,10,0.4)", fontSize: "9.5px", fontFamily: "Geist Mono, monospace" }}>
                    {isAr ? "البوابة ب · الآن" : "Gate B · just now"}
                  </p>
                </div>
              </div>

              {/* Floating card: AI */}
              <div
                className="absolute animate-float z-20 rounded-[14px] p-3 flex items-center gap-2.5"
                style={{
                  right: isAr ? "auto" : "-64px",
                  left: isAr ? "-64px" : "auto",
                  bottom: "110px",
                  background: "#0B0C0A",
                  border: "1px solid rgba(201,165,107,0.25)",
                  boxShadow: "0 12px 40px rgba(0,0,0,.6), 0 0 0 1px rgba(201,165,107,0.08)",
                  animationDelay: "2s",
                  minWidth: "150px",
                }}
              >
                <div
                  className="w-8 h-8 rounded-[10px] flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, rgba(201,165,107,0.15), rgba(201,165,107,0.08))", border: "1px solid rgba(201,165,107,0.2)", fontSize: "14px" }}
                >
                  ✦
                </div>
                <div>
                  <p style={{ color: "#FBF8F2", fontSize: "11px", fontWeight: 700, lineHeight: 1.3 }}>
                    {isAr ? "التصميم جاهز" : "AI Design Ready"}
                  </p>
                  <p style={{ color: "#C9A56B", fontSize: "9.5px", fontFamily: "Geist Mono, monospace" }}>
                    {isAr ? "غرفة المعيشة · مكتمل" : "Living room · Done"}
                  </p>
                </div>
              </div>

              {/* Floating card: Payment */}
              <div
                className="absolute animate-float z-20 rounded-[12px] px-3 py-2.5 flex items-center gap-2"
                style={{
                  left: isAr ? "auto" : "-52px",
                  right: isAr ? "-52px" : "auto",
                  bottom: "220px",
                  background: "rgba(86,102,86,0.9)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  boxShadow: "0 8px 24px rgba(0,0,0,.4)",
                  backdropFilter: "blur(16px)",
                  animationDelay: "3.5s",
                  minWidth: "140px",
                }}
              >
                <div className="w-6 h-6 rounded-lg flex items-center justify-center text-[11px] shrink-0" style={{ background: "rgba(255,255,255,0.15)" }}>
                  💳
                </div>
                <div>
                  <p style={{ color: "#F4F1EA", fontSize: "10px", fontWeight: 600, lineHeight: 1.3 }}>
                    {isAr ? "الدفع مكتمل" : "Payment Done"}
                  </p>
                  <p style={{ color: "rgba(244,241,234,0.55)", fontSize: "8.5px", fontFamily: "Geist Mono, monospace" }}>
                    Q2 2026 · 3,200 SAR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom gradient & scroll indicator ── */}
      <div className="relative z-10 pb-10 flex flex-col items-center gap-3">
        <div className="scroll-indicator">
          <span
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: "9px",
              letterSpacing: ".14em",
              textTransform: "uppercase",
              color: "rgba(251,248,242,0.25)",
            }}
          >
            {isAr ? "اسحب للأسفل" : "Scroll to explore"}
          </span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(201,165,107,0.45)" strokeWidth="1.5">
            <path d="M12 5v14M6 13l6 6 6-6" />
          </svg>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(11,12,10,0.6))" }}
      />
    </section>
  );
}
