"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const features = [
  {
    no: "01",
    accentColor: "rgba(201,165,107,1)",
    accentBg: "rgba(201,165,107,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    visual: (
      <div className="flex flex-col gap-1.5">
        {["Sevenhood Tower A — 340 units", "Roshn Front Phase 2 — 180 units", "Diriyah Gate Residences — 72 units"].map((r, i) => (
          <div key={i} className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(201,165,107,0.08)", border: "1px solid rgba(201,165,107,0.15)" }}>
            <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: i === 0 ? "#C9A56B" : "rgba(201,165,107,0.4)" }} />
            <span style={{ fontSize: "10px", color: "rgba(11,12,10,0.7)", fontFamily: "Geist Mono, monospace", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r}</span>
          </div>
        ))}
      </div>
    ),
    en: { title: "Portfolio Management",     description: "Manage your entire portfolio of projects, buildings, towers, and units from a single unified dashboard. Full visibility across all your assets." },
    ar: { title: "إدارة المحافظ العقارية",  description: "أدِر مشاريعك ومبانيك وأبراجك ووحداتك بالكامل من لوحة تحكم موحدة — رؤية شاملة لجميع أصولك." },
    span: "lg:col-span-2",
  },
  {
    no: "02",
    accentColor: "rgba(62,88,120,1)",
    accentBg: "rgba(62,88,120,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    visual: (
      <div className="flex flex-col gap-1.5">
        {[
          { name: "Swimming Pool", time: "10:00 AM", status: "Confirmed", dot: "#C9A56B" },
          { name: "Gym Session", time: "06:00 PM", status: "Pending", dot: "rgba(201,165,107,0.4)" },
        ].map((b, i) => (
          <div key={i} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(62,88,120,0.08)", border: "1px solid rgba(62,88,120,0.15)" }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: b.dot }} />
              <span style={{ fontSize: "10px", color: "rgba(11,12,10,0.7)", fontFamily: "Geist, sans-serif", fontWeight: 500 }}>{b.name}</span>
            </div>
            <span style={{ fontSize: "9px", color: "rgba(11,12,10,0.45)", fontFamily: "Geist Mono, monospace" }}>{b.time}</span>
          </div>
        ))}
      </div>
    ),
    en: { title: "Smart Bookings",   description: "Reserve amenities — pools, gyms, meeting rooms — with intelligent conflict prevention and instant confirmations." },
    ar: { title: "الحجوزات الذكية",  description: "احجز المرافق بسهولة مع منع التعارضات تلقائياً وتأكيد فوري." },
    span: "lg:col-span-1",
  },
  {
    no: "03",
    accentColor: "rgba(181,97,74,1)",
    accentBg: "rgba(181,97,74,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    visual: (
      <div className="flex flex-col gap-1.5">
        {[
          { text: "A/C Repair", status: "Done ✅", dot: "#8FA08F" },
          { text: "Elevator",   status: "In Progress", dot: "#C9A56B" },
          { text: "Plumbing",   status: "Pending", dot: "rgba(181,97,74,0.7)" },
        ].map((t, i) => (
          <div key={i} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(181,97,74,0.07)", border: "1px solid rgba(181,97,74,0.12)" }}>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: t.dot }} />
              <span style={{ fontSize: "10px", color: "rgba(11,12,10,0.7)", fontFamily: "Geist, sans-serif", fontWeight: 500 }}>{t.text}</span>
            </div>
            <span style={{ fontSize: "9px", color: "rgba(11,12,10,0.5)", fontFamily: "Geist Mono, monospace" }}>{t.status}</span>
          </div>
        ))}
      </div>
    ),
    en: { title: "Maintenance Requests", description: "Submit, track, and resolve tickets in real-time. Photo uploads, priority levels, and technician assignment built in." },
    ar: { title: "طلبات الصيانة",        description: "أرسل طلبات الصيانة وتابعها لحظة بلحظة — مع رفع الصور وتحديد الأولويات وتعيين الفنيين." },
    span: "lg:col-span-1",
  },
  {
    no: "04",
    accentColor: "rgba(86,102,86,1)",
    accentBg: "rgba(86,102,86,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    visual: (
      <div className="flex flex-col gap-1.5">
        {["🎓 Fayrouz's graduation — proud neighbour!", "🔔 Water maintenance Wed 8–10am", "🌙 Rooftop iftar this Friday?"].map((post, i) => (
          <div key={i} className="px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(86,102,86,0.08)", border: "1px solid rgba(86,102,86,0.14)" }}>
            <span style={{ fontSize: "9.5px", color: "rgba(11,12,10,0.65)", fontFamily: "Geist, sans-serif", display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{post}</span>
          </div>
        ))}
      </div>
    ),
    en: { title: "Community Hub",  description: "Connect with neighbours, discover events, share announcements, and build the social fabric of your community." },
    ar: { title: "مركز المجتمع",    description: "تواصل مع جيرانك، شارك في الفعاليات وأعلِن الأخبار — وابنِ روابط مجتمعية حقيقية." },
    span: "lg:col-span-1",
  },
  {
    no: "05",
    accentColor: "rgba(143,111,54,1)",
    accentBg: "rgba(143,111,54,0.08)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    visual: (
      <div className="flex flex-col gap-1.5">
        {[
          { name: "Abdullah Al-Otaibi", type: "One-time", status: "Active" },
          { name: "Cleaning Service",   type: "Recurring", status: "Active" },
        ].map((v, i) => (
          <div key={i} className="flex items-center justify-between px-2.5 py-1.5 rounded-lg" style={{ background: "rgba(143,111,54,0.08)", border: "1px solid rgba(143,111,54,0.15)" }}>
            <div>
              <p style={{ fontSize: "10px", color: "rgba(11,12,10,0.75)", fontFamily: "Geist, sans-serif", fontWeight: 600 }}>{v.name}</p>
              <p style={{ fontSize: "8.5px", color: "rgba(11,12,10,0.4)", fontFamily: "Geist Mono, monospace" }}>{v.type}</p>
            </div>
            <span style={{ fontSize: "8.5px", color: "#8FA08F", fontFamily: "Geist Mono, monospace", background: "rgba(86,102,86,0.12)", padding: "2px 7px", borderRadius: "99px", border: "1px solid rgba(86,102,86,0.2)" }}>{v.status}</span>
          </div>
        ))}
      </div>
    ),
    en: { title: "Visitor Access Control", description: "Issue digital visitor passes, manage gate access, track arrivals, and maintain full security logs." },
    ar: { title: "إدارة الزوار",           description: "أصدر تصاريح زيارة رقمية، أدِر البوابات بأمان تام، وتتبّع الوصول مع سجلات أمنية كاملة." },
    span: "lg:col-span-1",
  },
  {
    no: "06",
    accentColor: "rgba(201,165,107,1)",
    accentBg: "rgba(201,165,107,0.06)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    visual: (
      <div className="flex flex-col gap-2">
        <div className="relative h-14 rounded-xl overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(201,165,107,0.12), rgba(143,111,54,0.08))" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex items-center gap-2">
              <span style={{ fontSize: "20px" }}>✦</span>
              <span style={{ fontSize: "9.5px", color: "rgba(11,12,10,0.5)", fontFamily: "Geist Mono, monospace" }}>AI rendering...</span>
            </div>
          </div>
          <div className="absolute bottom-1.5 left-2 right-2 h-1 rounded-full overflow-hidden" style={{ background: "rgba(201,165,107,0.2)" }}>
            <div className="h-full rounded-full shimmer" style={{ width: "70%", background: "linear-gradient(90deg, #C9A56B, #DBBC8A)" }} />
          </div>
        </div>
        <p style={{ fontSize: "9px", color: "rgba(11,12,10,0.4)", fontFamily: "Geist Mono, monospace", textAlign: "center" }}>Living room · Scandinavian style</p>
      </div>
    ),
    en: { title: "AI Interior Design",      description: "Transform your home with AI-powered design. Upload your space, describe your vision, and get professional-grade results." },
    ar: { title: "تصميم بالذكاء الاصطناعي", description: "حوّل منزلك بسحر الذكاء الاصطناعي — ارفع صورة مساحتك وصِف رؤيتك واحصل على نتائج مذهلة." },
    span: "lg:col-span-2",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.08 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="features"
      className="section-padding"
      style={{ background: "var(--bg-elev)" }}
      ref={sectionRef}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className={`mb-16 flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
          <div className="reveal">
            <span className="eyebrow">
              <span className="dot" />
              {isAr ? "مميزات المنصة" : "Platform Features"}
            </span>
          </div>

          <div className="reveal" style={{ transitionDelay: "0.08s" }}>
            {isAr ? (
              <h2
                className="font-medium"
                style={{
                  fontFamily: "IBM Plex Sans Arabic, sans-serif",
                  fontSize: "clamp(38px,5vw,64px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.02em",
                }}
              >
                كل ما يحتاجه مجتمعك
                <br />
                <em
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--fg-muted)",
                  }}
                >
                  للازدهار والنجاح
                </em>
              </h2>
            ) : (
              <h2
                className="font-medium"
                style={{
                  fontSize: "clamp(38px,5vw,64px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.035em",
                }}
              >
                Everything your community
                <br />
                <em
                  style={{
                    fontFamily: "Instrument Serif, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: "var(--fg-muted)",
                  }}
                >
                  needs to thrive
                </em>
              </h2>
            )}
          </div>

          <p
            className="reveal text-[17px] leading-[1.6] text-[--fg-muted]"
            style={{
              maxWidth: "56ch",
              transitionDelay: "0.14s",
              ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
            }}
          >
            {isAr
              ? "سابع جار يجمع كل الأدوات التي يحتاجها سكانك وفريق إدارتك — في منصة واحدة مصممة بإتقان."
              : "Sevenhood brings together every tool your residents and management team need — in one beautifully designed platform."}
          </p>
        </div>

        {/* Asymmetric bento grid */}
        <div
          className="reveal grid gap-px rounded-[var(--r-2xl)] overflow-hidden"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            background: "var(--hairline)",
            border: "1px solid var(--hairline)",
            transitionDelay: "0.1s",
          }}
        >
          {features.map((feature, index) => {
            const text = isAr ? feature.ar : feature.en;
            return (
              <div
                key={index}
                className={`group relative bg-[--bg-elev] p-7 flex flex-col gap-5 cursor-default overflow-hidden transition-colors duration-200 hover:bg-[--bg-sunken] ${feature.span}`}
              >
                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: `linear-gradient(90deg, ${feature.accentColor}, transparent)` }}
                />

                {/* Number */}
                <div className={`flex items-start justify-between gap-4 ${isAr ? "flex-row-reverse" : ""}`}>
                  <span
                    className="font-mono uppercase text-[--fg-soft]"
                    style={{ fontSize: "10.5px", letterSpacing: ".16em", fontFamily: "Geist Mono, monospace" }}
                  >
                    {feature.no}
                  </span>
                  <div
                    className="w-10 h-10 rounded-[10px] flex items-center justify-center border border-[--hairline] transition-all duration-200 group-hover:scale-105"
                    style={{
                      color: feature.accentColor,
                      background: feature.accentBg,
                      borderColor: `${feature.accentColor}22`,
                    }}
                  >
                    {feature.icon}
                  </div>
                </div>

                {/* Text */}
                <div className={`flex flex-col gap-2 ${isAr ? "text-right" : ""}`}>
                  <h3
                    className="text-[18px] font-semibold tracking-[-0.015em] text-[--fg]"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {text.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.65] text-[--fg-muted]"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {text.description}
                  </p>
                </div>

                {/* Visual mini-demo */}
                <div className="mt-auto pt-3 border-t border-[--hairline]">
                  {feature.visual}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div
          className={`reveal mt-8 p-8 rounded-[var(--r-2xl)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 ${isAr ? "md:flex-row-reverse" : ""}`}
          style={{
            background: "linear-gradient(135deg, var(--ink-950), var(--ink-800))",
            border: "1px solid rgba(201,165,107,0.12)",
            transitionDelay: "0.25s",
          }}
        >
          <div className={`flex flex-col gap-2 ${isAr ? "items-end text-right" : ""}`}>
            <h3
              className="text-[20px] font-semibold tracking-[-0.015em]"
              style={{ color: "#F4F1EA", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
            >
              {isAr ? "هل أنت مستعد لتحويل مجتمعك؟" : "Ready to transform your community?"}
            </h3>
            <p
              className="text-[14px]"
              style={{ color: "var(--ink-300)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
            >
              {isAr ? "انضم إلى برنامج الوصول المبكر اليوم." : "Join the early access program today."}
            </p>
          </div>
          <div className={`flex gap-3 shrink-0 ${isAr ? "flex-row-reverse" : ""}`}>
            <a href="#download" className="btn btn-gold" style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}>
              {isAr ? "حمّل التطبيق" : "Download App"}
            </a>
            <a href="#operators" className="btn btn-ghost" style={{ borderColor: "rgba(244,241,234,.2)", color: "rgba(244,241,234,.7)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}>
              {isAr ? "للمشغلين" : "For Operators"}
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
