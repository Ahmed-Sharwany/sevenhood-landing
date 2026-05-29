"use client";

import { useState, useEffect } from "react";
import { useLang } from "@/contexts/LanguageContext";

/* ── Sevenhood mark: filled rounded tile with geometric S cutout ── */
function SevenMark({ size = 32, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      style={{ color }}
    >
      <mask id="navbar-mark" maskUnits="userSpaceOnUse" x="0" y="0" width="64" height="64">
        <rect x="4" y="4" width="56" height="56" rx="15" fill="white" />
        <path
          d="M 46 22 C 14 22 14 32 32 32 C 50 32 50 42 18 42"
          stroke="black"
          strokeWidth="5.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </mask>
      <rect x="4" y="4" width="56" height="56" rx="15" fill="currentColor" mask="url(#navbar-mark)" />
    </svg>
  );
}

const navLinks = {
  EN: [
    { href: "#features",   label: "Features" },
    { href: "#operators",  label: "For Operators" },
    { href: "#download",   label: "Download" },
    { href: "#contact",    label: "Contact" },
  ],
  AR: [
    { href: "#features",   label: "المميزات" },
    { href: "#operators",  label: "للمشغلين" },
    { href: "#download",   label: "تحميل التطبيق" },
    { href: "#contact",    label: "اتصل بنا" },
  ],
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, isAr } = useLang();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = isAr ? navLinks.AR : navLinks.EN;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "nav-blur" : "bg-transparent"
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo lockup */}
          <a
            href="#"
            className="flex items-center gap-[10px] group shrink-0"
            aria-label="Sevenhood"
          >
            <SevenMark size={28} color={isScrolled ? "#C9A56B" : "#C9A56B"} />
            <div className="flex flex-col leading-none">
              {isAr ? (
                <span
                  className="font-semibold text-[15px] tracking-[-0.025em]"
                  style={{
                    fontFamily: "IBM Plex Sans Arabic, sans-serif",
                    color: isScrolled ? "rgba(251,248,242,0.9)" : "rgba(251,248,242,0.9)",
                  }}
                >
                  سابع جار
                </span>
              ) : (
                <span
                  className="font-semibold text-[15px] tracking-[-0.025em]"
                  style={{ color: isScrolled ? "rgba(251,248,242,0.9)" : "rgba(251,248,242,0.9)" }}
                >
                  Sevenhood
                </span>
              )}
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[13.5px] rounded-[var(--r-sm)] transition-all duration-[140ms]"
                style={{
                  color: "rgba(251,248,242,0.55)",
                  ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(251,248,242,0.9)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(251,248,242,0.55)")}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-2">
            {/* Language toggle */}
            <button
              onClick={() => setLang(isAr ? "EN" : "AR")}
              className="btn btn-quiet btn-sm text-[13px] font-mono tracking-[.06em] uppercase"
              style={{ fontFamily: "Geist Mono, monospace", color: "rgba(251,248,242,0.45)" }}
            >
              {isAr ? "EN" : "عربي"}
            </button>

            {/* Operator Console */}
            <a
              href="https://admin.sevenhood.app"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm rounded-full transition-all duration-150"
              style={{
                color: "rgba(251,248,242,0.7)",
                border: "1.5px solid rgba(251,248,242,0.14)",
                background: "rgba(251,248,242,0.05)",
                ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
              }}
            >
              {isAr ? "وحدة تحكم المشغل" : "Operator Console"}
            </a>

            {/* Primary CTA */}
            <a
              href="#download"
              className="btn btn-sm rounded-full font-semibold transition-all duration-150 hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #C9A56B, #A88349)",
                color: "#0B0C0A",
                boxShadow: "0 4px 16px rgba(201,165,107,0.3)",
                ...(isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : {}),
              }}
            >
              {isAr ? "ابدأ الآن" : "Get Started"}
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-[var(--r-sm)] transition-colors"
            style={{ background: "rgba(251,248,242,0.06)" }}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[1.5px] rounded-full transition-all duration-200 origin-center ${
                mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""
              }`}
              style={{ background: "rgba(251,248,242,0.8)" }}
            />
            <span
              className={`block w-5 h-[1.5px] rounded-full transition-all duration-200 ${
                mobileOpen ? "opacity-0" : ""
              }`}
              style={{ background: "rgba(251,248,242,0.8)" }}
            />
            <span
              className={`block w-5 h-[1.5px] rounded-full transition-all duration-200 origin-center ${
                mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
              }`}
              style={{ background: "rgba(251,248,242,0.8)" }}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="menu-enter md:hidden bg-[--bg-elev] border-t border-[--hairline]"
          dir={isAr ? "rtl" : "ltr"}
        >
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3 text-[14px] text-[--fg-muted] hover:text-[--fg] hover:bg-[--bg-sunken] rounded-[var(--r-md)] transition-all duration-[140ms]"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 pt-3 border-t border-[--hairline] flex flex-col gap-2">
              <button
                onClick={() => { setLang(isAr ? "EN" : "AR"); setMobileOpen(false); }}
                className="btn btn-ghost w-full justify-center text-[13px]"
              >
                {isAr ? "Switch to English" : "التبديل إلى العربية"}
              </button>
              <a
                href="https://admin.sevenhood.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="btn btn-ghost w-full justify-center"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {isAr ? "وحدة تحكم المشغل" : "Operator Console"}
              </a>
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="btn btn-primary w-full justify-center"
                style={isAr ? { fontFamily: "IBM Plex Sans Arabic, sans-serif" } : undefined}
              >
                {isAr ? "ابدأ الآن" : "Get Started"}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
