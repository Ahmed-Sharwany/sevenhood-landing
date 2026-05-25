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
        forest: {
          DEFAULT: "#0D2818",
          light: "#163820",
          dark: "#081A10",
          deep: "#06120B",
        },
        gold: {
          DEFAULT: "#C87C2A",
          light: "#D9943E",
          dark: "#A86520",
          pale: "#F0C87A",
        },
        cream: {
          DEFAULT: "#F5F0E8",
          dark: "#E8E0CC",
          light: "#FAF7F2",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        arabic: [
          "Noto Kufi Arabic",
          "Cairo",
          "Tajawal",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-forest":
          "linear-gradient(135deg, #0D2818 0%, #163820 50%, #0D2818 100%)",
        "gradient-gold":
          "linear-gradient(135deg, #C87C2A 0%, #D9943E 50%, #A86520 100%)",
        "gradient-hero":
          "linear-gradient(160deg, #081A10 0%, #0D2818 40%, #163820 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      boxShadow: {
        gold: "0 4px 24px rgba(200, 124, 42, 0.25)",
        "gold-lg": "0 8px 40px rgba(200, 124, 42, 0.35)",
        forest: "0 4px 24px rgba(13, 40, 24, 0.4)",
        card: "0 2px 20px rgba(0,0,0,0.08), 0 0 0 1px rgba(0,0,0,0.04)",
      },
    },
  },
  plugins: [],
};

export default config;
