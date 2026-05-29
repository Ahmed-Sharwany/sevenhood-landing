"use client";

import { useEffect, useRef } from "react";
import { useLang } from "@/contexts/LanguageContext";

const highlights = {
  EN: [
    { icon: "⚡", label: "Instant notifications for all community activity" },
    { icon: "🌐", label: "Full Arabic and English language support" },
    { icon: "🔒", label: "Bank-grade security and data privacy" },
    { icon: "📱", label: "iOS and Android — always perfectly in sync" },
  ],
  AR: [
    { icon: "⚡", label: "إشعارات فورية لجميع أنشطة المجتمع" },
    { icon: "🌐", label: "دعم كامل للغتين العربية والإنجليزية" },
    { icon: "🔒", label: "أمان بمستوى البنوك وخصوصية تامة للبيانات" },
    { icon: "📱", label: "iOS وAndroid — متزامنة دائماً بإتقان" },
  ],
};

const screens = [
  {
    title: { en: "Dashboard",   ar: "الرئيسية" },
    items: { en: ["Overview", "Alerts", "Bookings"], ar: ["نظرة عامة", "التنبيهات", "الحجوزات"] },
    icon: "🏡",
    accent: "#C9A56B",
    accentBg: "rgba(201,165,107,0.12)",
    tilt: "-6deg",
    zIndex: 10,
    offset: "-60px",
  },
  {
    title: { en: "Bookings",    ar: "الحجوزات" },
    items: { en: ["Pool · 10am", "Gym · 6pm", "Event Hall"], ar: ["المسبح · 10 ص", "صالة · 6 م", "القاعة"] },
    icon: "📅",
    accent: "#3E5878",
    accentBg: "rgba(62,88,120,0.12)",
    tilt: "0deg",
    zIndex: 20,
    offset: "0px",
  },
  {
    title: { en: "Maintenance", ar: "الصيانة" },
    items: { en: ["A/C · Done ✅", "Elevator · Active", "Gate · Pending"], ar: ["تكييف · مكتمل ✅", "مصعد · جارٍ", "بوابة · قيد"] },
    icon: "🔧",
    accent: "#B5614A",
    accentBg: "rgba(181,97,74,0.12)",
    tilt: "6deg",
    zIndex: 10,
    offset: "60px",
  },
];

export default function AppShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const { isAr } = useLang();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.08 }
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
        <div className={`grid lg:grid-cols-2 gap-16 xl:gap-24 items-center`}>

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
                  className="font-medium"
                  style={{
                    fontFamily: "IBM Plex Sans Arabic, sans-serif",
                    fontSize: "clamp(34px,4.5vw,56px)",
                    lineHeight: "1.04",
                    letterSpacing: "-0.02em",
                  }}
                >
                  صُمِّم لحياتك
                  <br />
                  <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "var(--fg-muted)" }}>
                    كما تعيشها فعلاً
                  </em>
                </h2>
              ) : (
                <h2
                  className="font-medium"
                  style={{
                    fontSize: "clamp(34px,4.5vw,56px)",
                    lineHeight: "1.04",
                    letterSpacing: "-0.035em",
                  }}
                >
                  Built for the way
                  <br />
                  <em style={{ fontFamily: "Instrument Serif, serif", fontStyle: "italic", fontWeight: 400, color: "var(--fg-muted)" }}>
                    you actually live
                  </em>
                </h2>
              )}
            </div>

            <p
              className="reveal text-[17px] leading-[1.6] text-[--fg-muted]"
              style={{
                transitionDelay: "0.14s",
                maxWidth: "50ch",
                ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
              }}
            >
              {isAr
                ? "تطبيق سابع جار يضع القوة الكاملة لمجتمعك في متناول يدك. سواء كنت تحجز المسبح عند الفجر أو تبلّغ عن مشكلة صيانة منتصف الليل — الأمر دائماً بنقرة واحدة."
                : "The Sevenhood app puts the full power of your community in your pocket. Whether you're booking the pool at sunrise or reporting a maintenance issue at midnight — it's always just a tap away."}
            </p>

            {/* Feature checkmarks */}
            <div className="reveal flex flex-col gap-2.5" style={{ transitionDelay: "0.2s" }}>
              {items.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3.5 px-4 py-3 rounded-[var(--r-lg)] border border-[--hairline] card-elevated ${isAr ? "flex-row-reverse" : ""}`}
                  style={{ background: "var(--bg-elev)" }}
                >
                  <div
                    className="w-8 h-8 rounded-[8px] flex items-center justify-center text-[14px] shrink-0"
                    style={{ background: "var(--gold-50)", border: "1px solid var(--gold-200)" }}
                  >
                    {item.icon}
                  </div>
                  <p
                    className="text-[14px] font-medium text-[--fg]"
                    style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ transitionDelay: "0.28s" }}>
              <a
                href="#download"
                className="btn btn-primary btn-lg"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {isAr ? "حمّل مجاناً" : "Download Free"}
                <svg className={`w-4 h-4 ${isAr ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Three phone screens — fanned */}
          <div
            className={`reveal relative flex justify-center items-end ${isAr ? "order-1" : "order-2"}`}
            style={{ transitionDelay: "0.08s", height: "520px" }}
          >
            {/* Background glow */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
              style={{
                width: "380px",
                height: "280px",
                background: "radial-gradient(ellipse 80% 80% at 50% 100%, rgba(201,165,107,0.18) 0%, transparent 70%)",
                filter: "blur(20px)",
              }}
            />

            {screens.map((screen, i) => (
              <div
                key={screen.title.en}
                className="absolute bottom-0 group"
                style={{
                  width: i === 1 ? "160px" : "138px",
                  zIndex: screen.zIndex,
                  transform: `translateX(${screen.offset}) rotate(${screen.tilt})`,
                  transformOrigin: "bottom center",
                  transition: "transform 0.4s var(--ease-emph), z-index 0s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `translateX(${screen.offset}) rotate(0deg) translateY(-12px)`;
                  (e.currentTarget as HTMLElement).style.zIndex = "30";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform = `translateX(${screen.offset}) rotate(${screen.tilt})`;
                  (e.currentTarget as HTMLElement).style.zIndex = String(screen.zIndex);
                }}
              >
                <div
                  className="rounded-[2rem] overflow-hidden"
                  style={{
                    aspectRatio: "9/19",
                    background: i === 1 ? "var(--ink-950)" : "var(--ink-900)",
                    border: `1px solid ${screen.accent}22`,
                    boxShadow: i === 1
                      ? `0 40px 80px rgba(0,0,0,.6), 0 0 0 1px rgba(0,0,0,.5), 0 0 40px ${screen.accent}18`
                      : "0 24px 60px rgba(0,0,0,.5), 0 0 0 1px rgba(0,0,0,.4)",
                  }}
                >
                  {/* Notch */}
                  <div className="flex justify-center pt-1.5">
                    <div className="w-12 h-3 rounded-b-xl" style={{ background: "rgba(0,0,0,0.8)" }} />
                  </div>

                  <div className="px-3.5 pt-2.5 pb-3 flex flex-col gap-2.5">
                    {/* Screen title */}
                    <div className="flex items-center gap-2 mb-0.5">
                      <div
                        className="w-7 h-7 rounded-[8px] flex items-center justify-center text-[14px]"
                        style={{ background: screen.accentBg, border: `1px solid ${screen.accent}30` }}
                      >
                        {screen.icon}
                      </div>
                      <span
                        className="text-[10px] font-mono uppercase tracking-[.1em]"
                        style={{ color: screen.accent, fontFamily: "Geist Mono, monospace" }}
                      >
                        {isAr ? screen.title.ar : screen.title.en}
                      </span>
                    </div>

                    {/* Items */}
                    {(isAr ? screen.items.ar : screen.items.en).map((item) => (
                      <div
                        key={item}
                        className="py-2 px-2.5 rounded-[8px]"
                        style={{
                          background: "rgba(244,241,234,.05)",
                          border: "1px solid rgba(244,241,234,.08)",
                        }}
                      >
                        <p
                          className="text-[9.5px] truncate"
                          style={{
                            color: "rgba(244,241,234,.65)",
                            fontFamily: isAr ? "IBM Plex Sans Arabic, sans-serif" : "Geist, sans-serif",
                          }}
                        >
                          {item}
                        </p>
                      </div>
                    ))}

                    {/* Progress bar */}
                    <div className="mt-1 h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(244,241,234,.06)" }}>
                      <div
                        className="h-full rounded-full"
                        style={{
                          width: i === 0 ? "78%" : i === 1 ? "55%" : "35%",
                          background: screen.accent,
                          opacity: 0.5,
                        }}
                      />
                    </div>

                    {/* Mini chart (center phone only) */}
                    {i === 1 && (
                      <div className="flex items-end gap-0.5 h-8 mt-1">
                        {[50, 70, 45, 85, 60, 75, 40].map((h, j) => (
                          <div
                            key={j}
                            className="flex-1 rounded-sm"
                            style={{
                              height: `${h}%`,
                              background: j === 3 ? screen.accent : `${screen.accent}30`,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
