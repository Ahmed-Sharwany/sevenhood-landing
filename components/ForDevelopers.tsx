"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const benefits = {
  EN: [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
      title: "Real-Time Analytics",
      description: "Full visibility into occupancy, revenue, maintenance trends, and resident satisfaction across all your properties.",
      stat: "97.3%", statLabel: "Avg occupancy",
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>),
      title: "Automated Operations",
      description: "Eliminate manual work with automated billing, scheduled maintenance, visitor logs, and service provider coordination.",
      stat: "−68%", statLabel: "Admin overhead",
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>),
      title: "White-Label Ready",
      description: "Deploy under your brand. Custom colors, domain, and app name — your community platform, powered by Sevenhood.",
      stat: "< 48h", statLabel: "Time to launch",
    },
  ],
  AR: [
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
      title: "تحليلات فورية",
      description: "رؤية شاملة لنسب الإشغال والإيرادات واتجاهات الصيانة ومؤشرات رضا السكان.",
      stat: "٩٧٫٣٪", statLabel: "متوسط الإشغال",
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>),
      title: "عمليات آلية متكاملة",
      description: "تخلّص من العمل اليدوي بالفوترة الآلية وجدولة الصيانة وتنسيق مزودي الخدمات.",
      stat: "٦٨٪−", statLabel: "تخفيض التكاليف الإدارية",
    },
    {
      icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>),
      title: "متاح بعلامتك التجارية الخاصة",
      description: "انشر المنصة باسمك وهويتك البصرية — ألوانك ونطاقك واسم تطبيقك.",
      stat: "< ٤٨ ساعة", statLabel: "وقت الإطلاق",
    },
  ],
};

const commitments = {
  EN: [
    { icon: "🇸🇦", label: "Saudi-Native Platform", sub: "Built in the Kingdom, for the Kingdom" },
    { icon: "⭐", label: "Vision 2030 Aligned",  sub: "Supporting the Kingdom's property vision" },
    { icon: "🔒", label: "PDPL Compliant",       sub: "Full data privacy & security compliance" },
    { icon: "🌐", label: "Natively Bilingual",   sub: "Arabic & English — equal first-class" },
  ],
  AR: [
    { icon: "🇸🇦", label: "منصة سعودية أصيلة",     sub: "بُنيت في المملكة، لخدمة المملكة" },
    { icon: "⭐", label: "متوافق مع رؤية 2030",   sub: "داعم للتحول العقاري في المملكة" },
    { icon: "🔒", label: "ملتزم بحماية البيانات", sub: "امتثال كامل لنظام حماية البيانات الشخصية" },
    { icon: "🌐", label: "ثنائي اللغة فعلاً",      sub: "عربي وإنجليزي، بمستوى احترافي متساوٍ" },
  ],
};

export default function ForDevelopers() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const benefitList    = isAr ? benefits.AR    : benefits.EN;
  const commitmentList = isAr ? commitments.AR : commitments.EN;

  return (
    <section
      id="operators"
      className="section-padding relative overflow-hidden"
      style={{ background: "var(--ink-950)" }}
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute"
          style={{
            width: "700px", height: "700px",
            top: "-200px", right: isAr ? "auto" : "-200px", left: isAr ? "-200px" : "auto",
            background: "radial-gradient(circle, rgba(201,165,107,0.055) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: "500px", height: "500px",
            bottom: "-100px", left: isAr ? "auto" : "-100px", right: isAr ? "-100px" : "auto",
            background: "radial-gradient(circle, rgba(86,102,86,0.06) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
        />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none" aria-hidden="true">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dark-grid" width="72" height="72" patternUnits="userSpaceOnUse">
              <path d="M 72 0 L 0 0 0 72" fill="none" stroke="#C9A56B" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dark-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className={`mb-16 flex flex-col gap-5 ${isAr ? "items-end text-right" : ""}`}>
          <div className="reveal">
            <span
              className="eyebrow"
              style={{ borderColor: "rgba(201,165,107,.25)", color: "var(--gold-500)" }}
            >
              <span className="dot" style={{ background: "var(--gold-500)" }} />
              {isAr ? "للمشغلين وملاك العقارات" : "For Property Operators"}
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
                  color: "#F4F1EA",
                }}
              >
                مصمّم للمشغلين{" "}
                <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "var(--ink-300)" }}>
                  المحترفين
                </em>
              </h2>
            ) : (
              <h2
                className="font-medium"
                style={{
                  fontSize: "clamp(38px,5vw,64px)",
                  lineHeight: "1.02",
                  letterSpacing: "-0.035em",
                  color: "#F4F1EA",
                }}
              >
                Built for{" "}
                <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "var(--ink-300)" }}>
                  Operators
                </em>{" "}who demand
                <br />
                <span style={{ color: "rgba(244,241,234,0.4)" }}>the very best.</span>
              </h2>
            )}
          </div>

          <p
            className="reveal text-[17px] leading-[1.6]"
            style={{
              color: "var(--ink-300)",
              maxWidth: "52ch",
              transitionDelay: "0.14s",
              ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
            }}
          >
            {isAr
              ? "امنح فريق العمليات لديك صلاحيات استثنائية. لوحة تحكم سابع جار تركّز كل شيء في واجهة واحدة قوية."
              : "Give your operations team superpowers. The Sevenhood Operator Console centralises everything — from unit management to service delivery — in one powerful interface."}
          </p>
        </div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">

          {/* Benefits */}
          <div className={`flex flex-col gap-4 ${isAr ? "order-2" : "order-1"}`}>
            {benefitList.map((benefit, i) => (
              <div
                key={i}
                className={`reveal dark-card-hover p-6 rounded-[var(--r-lg)] flex gap-5 ${isAr ? "flex-row-reverse text-right" : ""}`}
                style={{
                  transitionDelay: `${0.06 * i}s`,
                  border: "1px solid rgba(244,241,234,.07)",
                  background: "rgba(244,241,234,.03)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0 text-[--gold-500]"
                  style={{ background: "rgba(201,165,107,.1)", border: "1px solid rgba(201,165,107,.2)" }}
                >
                  {benefit.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className={`flex items-start justify-between gap-4 mb-2 ${isAr ? "flex-row-reverse" : ""}`}>
                    <h3
                      className="text-[16px] font-semibold tracking-[-0.01em]"
                      style={{ color: "#F4F1EA", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                    >
                      {benefit.title}
                    </h3>
                    <div
                      className="shrink-0 px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(201,165,107,0.12)", border: "1px solid rgba(201,165,107,0.2)" }}
                    >
                      <span style={{ color: "#C9A56B", fontSize: "11px", fontFamily: "Geist Mono, monospace", whiteSpace: "nowrap" }}>
                        {benefit.stat}
                      </span>
                    </div>
                  </div>
                  <p
                    className="text-[14px] leading-[1.6]"
                    style={{ color: "var(--ink-400)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {benefit.description}
                  </p>
                  <p
                    className="text-[11px] mt-1"
                    style={{ color: "var(--ink-500)", fontFamily: "Geist Mono, monospace", letterSpacing: ".06em" }}
                  >
                    {benefit.statLabel}
                  </p>
                </div>
              </div>
            ))}

            <div className="reveal mt-2" style={{ transitionDelay: "0.22s" }}>
              <a
                href="#contact"
                className="btn btn-gold btn-lg"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {isAr ? "الوصول إلى لوحة التحكم" : "Access Operator Console"}
                <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Console mockup */}
          <div
            className={`reveal ${isAr ? "order-1" : "order-2"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-[var(--r-2xl)] pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 70% at 50% 30%, rgba(201,165,107,0.1) 0%, transparent 70%)", filter: "blur(30px)" }}
              />

              <div
                className="relative rounded-[var(--r-xl)] overflow-hidden"
                style={{
                  border: "1px solid rgba(244,241,234,.1)",
                  background: "var(--ink-900)",
                  boxShadow: "0 40px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(0,0,0,.5)",
                }}
              >
                {/* Window chrome */}
                <div
                  className="flex items-center justify-between px-4 py-3 border-b"
                  style={{ borderColor: "rgba(244,241,234,.07)", background: "rgba(244,241,234,.025)" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      {["rgba(255,97,89,.5)", "rgba(255,190,26,.5)", "rgba(39,201,63,.5)"].map((c, i) => (
                        <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
                      ))}
                    </div>
                    <span className="text-[11px] font-mono" style={{ color: "rgba(244,241,234,.28)", fontFamily: "Geist Mono, monospace" }}>
                      {isAr ? "لوحة تحكم المشغل — سابع جار" : "operator.sevenhood.app — Console"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#8FA08F" }} />
                    <span className="text-[10px] font-mono" style={{ color: "#8FA08F", fontFamily: "Geist Mono, monospace" }}>
                      {isAr ? "مباشر" : "Live"}
                    </span>
                  </div>
                </div>

                <div className="flex">
                  {/* Sidebar */}
                  <div
                    className="w-12 py-4 flex flex-col items-center gap-3 border-r"
                    style={{ borderColor: "rgba(244,241,234,.06)" }}
                  >
                    {[
                      (<svg key="h" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>),
                      (<svg key="u" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
                      (<svg key="t" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>),
                      (<svg key="c" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>),
                    ].map((icon, i) => (
                      <button
                        key={i}
                        className="w-8 h-8 rounded-[8px] flex items-center justify-center"
                        style={{
                          color: i === 0 ? "var(--gold-500)" : "rgba(244,241,234,.25)",
                          background: i === 0 ? "rgba(201,165,107,.12)" : "transparent",
                          border: i === 0 ? "1px solid rgba(201,165,107,.2)" : "none",
                        }}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>

                  {/* Main content */}
                  <div className="flex-1 p-4 space-y-3" dir="ltr">
                    <div className="flex items-center justify-between">
                      <p className="text-[11px] font-mono" style={{ color: "rgba(244,241,234,.3)", fontFamily: "Geist Mono, monospace" }}>
                        Portfolio Overview
                      </p>
                      <span className="text-[11px]" style={{ color: "var(--gold-500)", cursor: "pointer" }}>All Projects ›</span>
                    </div>

                    {/* Stat cards */}
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Units",    value: "1,240", delta: "+12",   good: true },
                        { label: "Occupied", value: "97.3%", delta: "+2.1%", good: true },
                        { label: "Tickets",  value: "23",    delta: "−8",    good: true },
                      ].map((stat) => (
                        <div
                          key={stat.label}
                          className="p-2.5 rounded-[8px]"
                          style={{ background: "rgba(244,241,234,.04)", border: "1px solid rgba(244,241,234,.07)" }}
                        >
                          <p className="text-[9px] font-mono mb-1" style={{ color: "rgba(244,241,234,.28)", fontFamily: "Geist Mono, monospace" }}>
                            {stat.label}
                          </p>
                          <p className="text-[14px] font-semibold" style={{ color: "#F4F1EA", letterSpacing: "-0.02em" }}>
                            {stat.value}
                          </p>
                          <p className="text-[9px]" style={{ color: "#8FA08F", fontFamily: "Geist Mono, monospace" }}>
                            {stat.delta}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Properties */}
                    <div className="space-y-1">
                      <p className="text-[9px] font-mono mb-1.5" style={{ color: "rgba(244,241,234,.2)", fontFamily: "Geist Mono, monospace", letterSpacing: ".12em" }}>
                        ACTIVE PROPERTIES
                      </p>
                      {[
                        { name: "Roshn Front Phase 2",      units: "340 units", active: true  },
                        { name: "Diriyah Gate Residences",  units: "180 units", active: true  },
                        { name: "AlUla Heritage Villas",    units: "72 units",  active: false },
                      ].map((prop) => (
                        <div
                          key={prop.name}
                          className="flex items-center justify-between py-2 px-2.5 rounded-[8px] transition-colors duration-150 hover:bg-white/[0.04] cursor-pointer"
                          style={{ background: "rgba(244,241,234,.025)", border: "1px solid rgba(244,241,234,.045)" }}
                        >
                          <div className="flex items-center gap-2">
                            <div
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: prop.active ? "#8FA08F" : "var(--gold-500)" }}
                            />
                            <span className="text-[10.5px]" style={{ color: "rgba(244,241,234,.6)" }}>{prop.name}</span>
                          </div>
                          <span className="text-[9px] font-mono" style={{ color: "rgba(244,241,234,.22)", fontFamily: "Geist Mono, monospace" }}>
                            {prop.units}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Mini bar chart */}
                    <div
                      className="p-3 rounded-[8px]"
                      style={{ background: "rgba(244,241,234,.025)", border: "1px solid rgba(244,241,234,.045)" }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-[9px] font-mono" style={{ color: "rgba(244,241,234,.22)", fontFamily: "Geist Mono, monospace", letterSpacing: ".12em" }}>
                          MAINTENANCE — 7 DAYS
                        </p>
                        <span className="text-[9px]" style={{ color: "var(--gold-500)", fontFamily: "Geist Mono, monospace" }}>↓ 12%</span>
                      </div>
                      <div className="flex items-end gap-1 h-10">
                        {[40, 65, 45, 80, 55, 70, 35].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm transition-all duration-300"
                            style={{
                              height: `${h}%`,
                              background: i === 3 ? "var(--gold-500)" : "rgba(201,165,107,.2)",
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Commitments band */}
        <div className="reveal" style={{ transitionDelay: "0.2s" }}>
          <div className="gold-divider mb-10" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {commitmentList.map((c, i) => (
              <div
                key={i}
                className={`dark-card-hover flex flex-col gap-3 p-5 rounded-[var(--r-lg)] ${isAr ? "items-end text-right" : ""}`}
                style={{ background: "rgba(244,241,234,.03)", border: "1px solid rgba(244,241,234,.07)" }}
              >
                <div className="text-[28px] leading-none">{c.icon}</div>
                <div>
                  <p
                    className="text-[14.5px] font-semibold mb-1 leading-tight"
                    style={{ color: "#F4F1EA", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {c.label}
                  </p>
                  <p
                    className="text-[12px] leading-[1.5]"
                    style={{ color: "var(--ink-400)", ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}) }}
                  >
                    {c.sub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
