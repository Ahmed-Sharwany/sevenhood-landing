"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const screens = [
  {
    en: { title: "Dashboard", items: ["Community Overview", "Recent Alerts", "Upcoming Bookings"] },
    ar: { title: "لوحة التحكم", items: ["نظرة عامة", "آخر التنبيهات", "الحجوزات القادمة"] },
    bg: "from-[#0D2818] to-[#163820]",
    accent: "#C87C2A",
    icon: "🏡",
  },
  {
    en: { title: "Bookings", items: ["Pool — 10:00 AM", "Gym — 06:00 PM", "Event Hall — Fri"] },
    ar: { title: "الحجوزات", items: ["المسبح — 10:00 ص", "الصالة — 6:00 م", "قاعة الأحداث — جمعة"] },
    bg: "from-[#081A10] to-[#0D2818]",
    accent: "#60A5FA",
    icon: "📅",
  },
  {
    en: { title: "Maintenance", items: ["A/C Repair · Done ✅", "Elevator · In Progress", "Gate · Pending"] },
    ar: { title: "الصيانة", items: ["تكييف · مكتمل ✅", "مصعد · جارٍ", "بوابة · قيد الانتظار"] },
    bg: "from-[#1A0D06] to-[#2A1408]",
    accent: "#F97316",
    icon: "🔧",
  },
];

const highlights = {
  EN: [
    { icon: "⚡", text: "Instant notifications for all community activity" },
    { icon: "🌐", text: "Full Arabic and English language support" },
    { icon: "🔒", text: "Bank-grade security and data privacy" },
    { icon: "📱", text: "iOS and Android — always perfectly in sync" },
  ],
  AR: [
    { icon: "⚡", text: "إشعارات فورية لجميع أنشطة المجتمع" },
    { icon: "🌐", text: "دعم كامل للغتين العربية والإنجليزية" },
    { icon: "🔒", text: "أمان بمستوى البنوك وخصوصية تامة للبيانات" },
    { icon: "📱", text: "iOS وAndroid — متزامنة دائماً بإتقان" },
  ],
};

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".showcase-animate").forEach((el, i) => {
            setTimeout(() => {
              el.classList.add("opacity-100", "translate-y-0");
              el.classList.remove("opacity-0", "translate-y-12");
            }, i * 120);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const items = isAr ? highlights.AR : highlights.EN;

  return (
    <section
      className="section-padding bg-cream overflow-hidden"
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isAr ? "" : ""}`}>

          {/* Copy */}
          <div className={`space-y-7 ${isAr ? "order-2 text-right" : "order-1"}`}>
            <div className="showcase-animate opacity-0 translate-y-12 transition-all duration-600">
              <span className="badge bg-forest/8 border border-forest/15 text-forest/70">
                <span className="text-gold">◆</span>
                {isAr ? "تجربة التطبيق" : "The Mobile Experience"}
              </span>
            </div>

            <div className="showcase-animate opacity-0 translate-y-12 transition-all duration-600 space-y-3">
              {isAr ? (
                <h2
                  className="text-4xl lg:text-5xl font-bold text-forest leading-tight"
                  style={{ fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" }}
                >
                  صُمِّم لأسلوب
                  <br />
                  <span className="text-gold">حياتك الحقيقي</span>
                </h2>
              ) : (
                <h2 className="text-4xl lg:text-5xl font-bold text-forest leading-tight">
                  Built for the way
                  <br />
                  <span className="text-gold">you actually live</span>
                </h2>
              )}
            </div>

            <div className="showcase-animate opacity-0 translate-y-12 transition-all duration-600">
              <p
                className="text-forest/65 text-lg leading-relaxed"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr
                  ? "تطبيق سابع جار يضع القوة الكاملة لمجتمعك في متناول يدك. سواء كنت تحجز المسبح عند الفجر أو تبلّغ عن مشكلة صيانة منتصف الليل — الأمر دائماً بنقرة واحدة."
                  : "The Sevenhood app puts the full power of your community in your pocket. Whether you're booking the pool at sunrise or reporting a maintenance issue at midnight — it's always just a tap away."}
              </p>
            </div>

            <div className="showcase-animate opacity-0 translate-y-12 transition-all duration-600 space-y-3">
              {items.map((item) => (
                <div
                  key={item.text}
                  className={`flex items-center gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-sm ${isAr ? "flex-row-reverse" : ""}`}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <p
                    className="text-forest font-medium text-sm"
                    style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
                  >
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="showcase-animate opacity-0 translate-y-12 transition-all duration-600">
              <a
                href="#download"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest text-white font-semibold rounded-xl hover:bg-forest-light transition-all duration-200 shadow-forest hover:-translate-y-0.5"
                style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif" } : undefined}
              >
                {isAr ? "حمّل مجاناً" : "Download Free"}
                <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M8 2v8M4 7l4 4 4-4" />
                  <path d="M2 13h12" />
                </svg>
              </a>
            </div>
          </div>

          {/* Three screen mockups */}
          <div className={`showcase-animate opacity-0 translate-y-12 transition-all duration-600 relative ${isAr ? "order-1" : "order-2"}`}>
            <div className="relative flex items-end justify-center gap-4">
              {screens.map((screen, i) => (
                <div
                  key={screen.en.title}
                  className={`relative ${
                    i === 1 ? "z-20 scale-110" : "z-10 scale-95 opacity-80"
                  } transition-all duration-300 hover:opacity-100 hover:scale-100 hover:z-30`}
                  style={{ width: i === 1 ? "160px" : "140px" }}
                >
                  <div
                    className={`rounded-[2rem] border border-white/15 overflow-hidden shadow-2xl bg-gradient-to-b ${screen.bg}`}
                    style={{ aspectRatio: "9/19" }}
                  >
                    <div className="flex justify-center pt-2">
                      <div className="w-16 h-4 bg-black/60 rounded-b-xl" />
                    </div>
                    <div className="px-3 pt-3 pb-4 flex flex-col gap-2">
                      <div className={`flex items-center justify-between mb-1 ${isAr ? "flex-row-reverse" : ""}`}>
                        <span className="text-white/50 text-xs">
                          {isAr ? screen.ar.title : screen.en.title}
                        </span>
                      </div>
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl"
                        style={{ background: `${screen.accent}20`, border: `1px solid ${screen.accent}30` }}
                      >
                        {screen.icon}
                      </div>
                      {(isAr ? screen.ar.items : screen.en.items).map((item) => (
                        <div key={item} className="py-2 px-2.5 rounded-xl bg-white/5 border border-white/8">
                          <p
                            className={`text-white/70 text-xs truncate ${isAr ? "text-right" : ""}`}
                            style={isAr ? { fontFamily: "'Noto Kufi Arabic', Arial, sans-serif", fontSize: "9px" } : undefined}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                      <div className="mt-2 h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full rounded-full w-2/3" style={{ background: screen.accent, opacity: 0.5 }} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute -bottom-8 left-0 right-0 h-8 rounded-b-[2rem] opacity-20 blur-sm"
                    style={{ background: `linear-gradient(to bottom, ${screen.accent}40, transparent)` }}
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-forest/5 rounded-full blur-3xl scale-75 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
