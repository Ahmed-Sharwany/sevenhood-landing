"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const benefits = {
  EN: [
    {
      icon: "📊",
      title: "Real-Time Analytics",
      description: "Full visibility into occupancy, revenue, maintenance trends, and resident satisfaction scores across all your properties.",
    },
    {
      icon: "⚙️",
      title: "Automated Operations",
      description: "Eliminate manual work with automated billing, scheduled maintenance, visitor logs, and service provider coordination.",
    },
    {
      icon: "🤝",
      title: "White-Label Ready",
      description: "Deploy under your brand. Custom colors, domain, and app name — your community platform, powered by Sevenhood.",
    },
  ],
  AR: [
    {
      icon: "📊",
      title: "تحليلات فورية",
      description: "رؤية شاملة لنسب الإشغال والإيرادات واتجاهات الصيانة ومؤشرات رضا السكان عبر جميع عقاراتك.",
    },
    {
      icon: "⚙️",
      title: "عمليات آلية متكاملة",
      description: "تخلّص من العمل اليدوي بالفوترة الآلية وجدولة الصيانة وسجلات الزوار وتنسيق مزودي الخدمات.",
    },
    {
      icon: "🤝",
      title: "جاهز للعلامة البيضاء",
      description: "انشر المنصة تحت علامتك التجارية — ألوانك ونطاقك واسم تطبيقك الخاص، مدعوم بقوة سابع جار.",
    },
  ],
};

const metrics = {
  EN: [
    { value: "94%", label: "Resident Satisfaction" },
    { value: "3×", label: "Faster Issue Resolution" },
    { value: "60%", label: "Reduction in Manual Work" },
    { value: "99.9%", label: "Platform Uptime" },
  ],
  AR: [
    { value: "94%", label: "رضا السكان" },
    { value: "3×", label: "أسرع في حل المشكلات" },
    { value: "60%", label: "تقليل العمل اليدوي" },
    { value: "99.9%", label: "استمرارية التشغيل" },
  ],
};

export default function ForDevelopers() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".op-animate").forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-10");
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const benefitList = isAr ? benefits.AR : benefits.EN;
  const metricList = isAr ? metrics.AR : metrics.EN;

  return (
    <section
      id="operators"
      className="operator-pattern section-padding"
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="op-animate opacity-0 translate-y-10 transition-all duration-600">
            <span className="badge bg-gold/15 border border-gold/30 text-gold">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              {isAr ? "للمشغلين وملاك العقارات" : "For Property Operators"}
            </span>
          </div>
          <div className="op-animate opacity-0 translate-y-10 transition-all duration-600 space-y-2">
            {isAr ? (
              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight"
                style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
              >
                مصمّم للمشغلين المحترفين
              </h2>
            ) : (
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                Built for Operators
              </h2>
            )}
          </div>
          <div className="op-animate opacity-0 translate-y-10 transition-all duration-600">
            <p
              className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed"
              style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
            >
              {isAr
                ? "امنح فريق العمليات لديك صلاحيات استثنائية. لوحة تحكم سابع جار تركّز كل شيء — من إدارة الوحدات إلى تقديم الخدمات — في واجهة واحدة قوية."
                : "Give your operations team superpowers. The Sevenhood Operator Console centralises everything — from unit management to service delivery — in one powerful interface."}
            </p>
          </div>
        </div>

        {/* Main content grid */}
        <div className={`grid lg:grid-cols-2 gap-12 items-center mb-16 ${isAr ? "" : ""}`}>
          {/* Benefits */}
          <div className={`space-y-5 ${isAr ? "order-2" : "order-1"}`}>
            {benefitList.map((benefit, i) => (
              <div
                key={i}
                className={`op-animate opacity-0 translate-y-10 transition-all duration-600 group p-6 rounded-2xl border border-white/8 bg-white/4 hover:bg-white/8 hover:border-gold/25 transition-all duration-300 ${isAr ? "text-right" : ""}`}
              >
                <div className={`flex items-start gap-5 ${isAr ? "flex-row-reverse" : ""}`}>
                  <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center text-2xl flex-shrink-0">
                    {benefit.icon}
                  </div>
                  <div className="space-y-1">
                    <h3
                      className="text-white font-semibold text-lg"
                      style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                    >
                      {benefit.title}
                    </h3>
                    <p
                      className="text-white/55 text-sm leading-relaxed"
                      style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                    >
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            <div className="op-animate opacity-0 translate-y-10 transition-all duration-600 pt-2">
              <a
                href="#contact"
                className={`group inline-flex items-center gap-3 px-7 py-4 bg-gold hover:bg-gold-light text-white font-semibold rounded-2xl transition-all duration-200 shadow-gold hover:shadow-gold-lg hover:-translate-y-0.5 ${isAr ? "flex-row-reverse" : ""}`}
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr ? "الوصول إلى لوحة التحكم" : "Access Operator Console"}
                <svg
                  className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isAr ? "rotate-180" : ""}`}
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Console mockup */}
          <div className={`op-animate opacity-0 translate-y-10 transition-all duration-600 relative ${isAr ? "order-1" : "order-2"}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gold/10 blur-3xl rounded-3xl" />
              <div className="relative bg-[#04100A] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                {/* Header bar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/8 bg-white/3">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <span className="text-white/40 text-xs font-medium">
                      {isAr ? "لوحة تحكم المشغل — سابع جار" : "Sevenhood Operator Console"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400/70 text-xs">{isAr ? "مباشر" : "Live"}</span>
                  </div>
                </div>

                {/* Sidebar + Main */}
                <div className="flex">
                  <div className="w-14 border-r border-white/8 py-4 flex flex-col items-center gap-4">
                    {["🏠", "👥", "🔧", "📊", "⚙️"].map((icon, i) => (
                      <button
                        key={i}
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm transition-all ${
                          i === 0 ? "bg-gold/20 border border-gold/30" : "hover:bg-white/5"
                        }`}
                      >
                        {icon}
                      </button>
                    ))}
                  </div>

                  <div className="flex-1 p-4 space-y-3" dir="ltr">
                    <div className="flex items-center justify-between">
                      <p className="text-white/60 text-xs font-medium">Portfolio Overview</p>
                      <span className="text-gold text-xs">All Projects ›</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Units", value: "1,240", delta: "+12" },
                        { label: "Occupied", value: "97.3%", delta: "+2.1%" },
                        { label: "Tickets", value: "23", delta: "-8" },
                      ].map((stat) => (
                        <div key={stat.label} className="p-2.5 rounded-xl bg-white/5 border border-white/8">
                          <p className="text-white/40 text-xs mb-1">{stat.label}</p>
                          <p className="text-white font-bold text-sm">{stat.value}</p>
                          <p className="text-green-400 text-xs">{stat.delta}</p>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1.5">
                      <p className="text-white/40 text-xs">Active Properties</p>
                      {[
                        { name: "Roshn Front Phase 2", units: "340 units", status: "bg-green-400" },
                        { name: "Diriyah Gate Residences", units: "180 units", status: "bg-green-400" },
                        { name: "AlUla Heritage Villas", units: "72 units", status: "bg-gold" },
                      ].map((prop) => (
                        <div
                          key={prop.name}
                          className="flex items-center justify-between py-2 px-3 rounded-xl bg-white/3 hover:bg-white/6 transition-colors border border-white/5"
                        >
                          <div className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${prop.status}`} />
                            <span className="text-white/70 text-xs">{prop.name}</span>
                          </div>
                          <span className="text-white/30 text-xs">{prop.units}</span>
                        </div>
                      ))}
                    </div>

                    <div className="p-3 rounded-xl bg-white/3 border border-white/5">
                      <p className="text-white/40 text-xs mb-2">Maintenance Requests — 7 Days</p>
                      <div className="flex items-end gap-1 h-10">
                        {[40, 65, 45, 80, 55, 70, 35].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm"
                            style={{ height: `${h}%`, background: i === 3 ? "#C87C2A" : "rgba(200,124,42,0.25)" }}
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

        {/* Metrics band */}
        <div className="op-animate opacity-0 translate-y-10 transition-all duration-600">
          <div className="gold-divider mb-10" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metricList.map((m) => (
              <div key={m.label} className={`text-center space-y-2 ${isAr ? "text-center" : ""}`}>
                <p className="text-4xl font-bold text-gold stat-number">{m.value}</p>
                <p
                  className="text-white/60 text-sm"
                  style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                >
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
