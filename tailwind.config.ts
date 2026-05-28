import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Ink scale — warm obsidian */
        ink: {
          950: "#0B0C0A",
          900: "#141612",
          800: "#1E211C",
          700: "#2A2E27",
          600: "#3E433B",
          500: "#5A6053",
          400: "#7E8576",
          300: "#A6AC9E",
          200: "#CBD0C4",
          100: "#E4E7DF",
          50:  "#F1F2EC",
        },
        /* Bone — warm ivory surfaces */
        bone: {
          50:  "#FBF8F2",
          100: "#F5F1EA",
          200: "#EBE5DA",
          300: "#DDD5C5",
        },
        /* Maqam Gold — single signature accent */
        gold: {
          700: "#8F6F36",
          600: "#A88349",
          500: "#C9A56B",
          400: "#DBBC8A",
          200: "#EFE0C5",
          50:  "#F8F0DE",
          DEFAULT: "#C9A56B",
        },
        /* Deep sage — secondary */
        sage: {
          700: "#3F4A3F",
          600: "#566656",
          400: "#8FA08F",
          200: "#C7D0C7",
        },
        /* Functional accents */
        terra: "#B5614A",
        lapis: "#3E5878",
      },
      fontFamily: {
        sans:    ["Geist", "ui-sans-serif", "system-ui", "sans-serif"],
        arabic:  ["IBM Plex Sans Arabic", "Geist", "system-ui", "sans-serif"],
        serif:   ["Instrument Serif", "ui-serif", "Georgia", "serif"],
        mono:    ["Geist Mono", "ui-monospace", "monospace"],
      },
      borderRadius: {
        xs:   "4px",
        sm:   "6px",
        md:   "10px",
        lg:   "14px",
        xl:   "20px",
        "2xl": "28px",
        full: "999px",
      },
      boxShadow: {
        "sh-1": "0 1px 0 rgba(11,12,10,.04), 0 1px 2px rgba(11,12,10,.04)",
        "sh-2": "0 1px 0 rgba(11,12,10,.04), 0 6px 16px -4px rgba(11,12,10,.08)",
        "sh-3": "0 1px 0 rgba(11,12,10,.04), 0 18px 40px -16px rgba(11,12,10,.18)",
        "inset-hairline": "inset 0 0 0 1px rgba(11,12,10,.08)",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(120% 80% at 100% 0%, #F8F0DE 0%, transparent 55%), radial-gradient(80% 60% at 0% 100%, rgba(86,102,86,.07) 0%, transparent 55%)",
        "hero-gradient-section":
          "radial-gradient(80% 60% at 100% 0%, #F8F0DE 0%, transparent 60%), #FFFFFF",
        "gold-gradient":
          "linear-gradient(90deg, #8F6F36, #C9A56B)",
        "obsidian-gradient":
          "linear-gradient(135deg, #0B0C0A 0%, #2A2317 55%, #C9A56B 100%)",
      },
      animation: {
        float:         "float 5s ease-in-out infinite",
        "fade-up":     "fadeUp 0.55s cubic-bezier(.2,.8,.2,1) forwards",
        "slide-block": "slideBlock 2.4s cubic-bezier(.2,.8,.2,1) infinite",
        marquee:       "marquee 28s linear infinite",
        spin:          "spin 0.8s linear infinite",
        pulse:         "pulse 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":       { transform: "translateY(-8px)" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideBlock: {
          "0%,15%":   { left: "8%" },
          "50%,55%":  { left: "70%" },
          "90%,100%": { left: "8%" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        pulse: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
      },
      transitionTimingFunction: {
        emph: "cubic-bezier(.2,.8,.2,1)",
        std:  "cubic-bezier(.4,.0,.2,1)",
      },
    },
  },
  plugins: [],
};

export default config;
