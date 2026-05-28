"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const highlights = {
  EN: [
    { label: "Instant notifications for all community activity" },
    { label: "Full Arabic and English language support" },
    { label: "Bank-grade security and data privacy" },
    { label: "iOS and Android — always perfectly in sync" },
  ],
  AR: [
    { label: "إشعارات فورية لجميع أنشطة المجتمع" },
    { label: "دعم كامل للغتين العربية والإنجليزية" },
    { label: "أمان بمستوى البنوك وخصوصية تامة للبيانات" },
    { label: "iOS وAndroid — متزامنة دائماً بإتقان" },
  ],
};

const screens = [
  {
    title: { en: "Dashboard", ar: "لوحة التحكم" },
    items: { en: ["Community Overview", "Recent Alerts", "Bookings"], ar: ["نظرة عامة", "آخر التنبيهات", "الحجوزات"] },
    accent: "var(--gold-600)",
    icon: "🏡",
  },
  {
    title: { en: "Bookings", ar: "الحجوزات" },
    items: { en: ["Pool — 10:00 AM", "Gym — 06:00 PM", "Event Hall — Fri"], ar: ["المسبح — 10:00 ص", "صالة الرياضة — 6:00 م", "قاعة الأحداث"] },
    accent: "var(--lapis)",
    icon: "📅",
  },
  {
    title: { en: "Maintenance", ar: "الصيانة" },
    items: { en: ["A/C Repair · Done ✅", "Elevator · In Progress", "Gate · Pending"], ar: ["تكييف · مكتمل ✅", "مصعد · جارٍ", "بوابة · قيد الانتظار"] },
    accent: "var(--terra)",
    icon: "🔧",
  },
];

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);
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
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const items = isAr ? highlights.AR : highlights.EN;

  return (
    <section
      className="section-padding overflow-hidden"
      style={{ background: "var(--bone-100)" }}
      ref={ref}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className={`grid lg:grid-cols-2 gap-16 items-center ${isAr ? "" : ""}`}>

          {/* Copy */}
          <div className={`flex flex-col gap-7 ${isAr ? "order-2 items-end text-right" : "order-1"}`}>
            <div className="reveal">
              <span className="eyebrow">
                <span className="dot" />
                {isAr ? "تجربة التطبيق" : "The Mobile Experience"}
              </span>
            </div>

            <div className="reveal" style={{ transitionDelay: "0.08s" }}>
              {isAr ? (
                <h2
                  className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.02em] font-medium"
                  style={{ fontFamily: "IBM Plex Sans Arabic, sans-serif" }}
                >
                  صُمِّم لحياتك
                  <br />
                  <em
                    className="font-normal"
                    style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--fg-muted)" }}
                  >
                    كما تعيشها فعلاً
                  </em>
                </h2>
              ) : (
                <h2 className="text-[clamp(34px,4vw,52px)] leading-[1.05] tracking-[-0.02em] font-medium">
                  Built for the way
                  <br />
                  <em
                    className="font-normal"
                    style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", color: "var(--fg-muted)" }}
                  >
                    you actually live
                  </em>
                </h2>
              )}
            </div>

            <p
              className="reveal text-[17px] leading-[1.55] text-[--fg-muted] max-w-[52ch]"
              style={{
                transitionDelay: "0.14s",
                ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
              }}
            >
              {isAr
                ? "تطبيق سابع جار يضع القوة الكاملة لمجتمعك في متناول يدك. سواء كنت تحجز المسبح عند الفجر أو تبلّغ عن مشكلة صيانة منتصف الليل — الأمر دائماً بنقرة واحدة."
                : "The Sevenhood app puts the full power of your community in your pocket. Whether you're booking the pool at sunrise or reporting a maintenance issue at midnight — it's always just a tap away."}
            </p>

            <div
              className="reveal flex flex-col gap-2.5"
              style={{ transitionDelay: "0.2s" }}
            >
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[var(--r-lg)] border border-[--hairline] ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "var(--bg-elev)", boxShadow: "var(--sh-1)" }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[--sage-600] shrink-0" />
                  <p
                    className="text-[14px] font-medium text-[--fg]"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: "0.26s" }}>
              <a
                href="#download"
                className="btn btn-primary"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 3v13M6 10l6 6 6-6M4 20h16" />
                </svg>
                {isAr ? "حمّل مجاناً" : "Download Free"}
              </a>
            </div>
          </div>

          {/* Three screen mockups */}
          <div
            className={`reveal relative ${isAr ? "order-1" : "order-2"}`}
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="relative flex items-end justify-center gap-3">
              {screens.map((screen, i) => (
                <div
                  key={screen.title.en}
                  className={`relative transition-all duration-300 ${
                    i === 1 ? "z-20 scale-105" : "z-10 scale-95 opacity-75"
                  } hover:opacity-100 hover:scale-100 hover:z-30`}
                  style={{ width: i === 1 ? "155px" : "130px" }}
                >
                  <div
                    className="rounded-[2rem] border border-[--hairline] overflow-hidden"
                    style={{
                      background: i === 1 ? "var(--ink-950)" : "var(--ink-900)",
                      aspectRatio: "9/19",
                      boxShadow: "var(--sh-3)",
                    }}
                  >
                    <div className="flex justify-center pt-1.5">
                      <div className="w-14 h-3.5 bg-[--ink-700] rounded-b-xl" />
                    </div>
                    <div className="px-3 pt-2.5 pb-3 flex flex-col gap-2">
                      <div className="flex items-center justify-between mb-0.5">
                        <span
                          className="text-[10px] font-mono uppercase tracking-[.1em]"
                          style={{ color: "rgba(244,241,234,.45)", fontFamily: "Geist Mono, monospace" }}
                        >
                          {isAr ? screen.title.ar : screen.title.en}
                        </span>
                      </div>
                      <div
                        className="w-9 h-9 rounded-[10px] flex items-center justify-center text-[18px]"
                        style={{ background: `rgba(201,165,107,.12)`, border: `1px solid rgba(201,165,107,.2)` }}
                      >
                        {screen.icon}
                      </div>
                      {(isAr ? screen.items.ar : screen.items.en).map((item) => (
                        <div
                          key={item}
                          className="py-1.5 px-2 rounded-[8px]"
                          style={{ background: "rgba(244,241,234,.05)", border: "1px solid rgba(244,241,234,.08)" }}
                        >
                          <p
                            className="text-[9.5px] truncate"
                            style={{
                              color: "rgba(244,241,234,.6)",
                              fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist, sans-serif",
                            }}
                          >
                            {item}
                          </p>
                        </div>
                      ))}
                      <div
                        className="mt-1 h-1 rounded-full overflow-hidden"
                        style={{ background: "rgba(244,241,234,.06)" }}
                      >
                        <div
                          className="h-full rounded-full"
                          style={{ width: "65%", background: "var(--gold-600)", opacity: 0.6 }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-32 rounded-full -z-10 blur-3xl"
              style={{ background: "rgba(201,165,107,.1)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
