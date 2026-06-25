import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand palette
        navy: {
          DEFAULT: "#0B2545",
          50: "#EAF0F7",
          100: "#CBD9EB",
          200: "#9DB4D4",
          300: "#6E8FBD",
          400: "#3F6AA6",
          500: "#1F4A82",
          600: "#143A6B",
          700: "#0F2E55",
          800: "#0B2545",
          900: "#071A33",
        },
        ink: {
          DEFAULT: "#1F2933",
          light: "#52606D",
          muted: "#7B8794",
        },
        // Small accent — refined gold
        gold: {
          DEFAULT: "#C8A04D",
          light: "#DDBE7E",
          dark: "#A9863A",
        },
        // Optional alternate accent — muted green
        sage: {
          DEFAULT: "#3F7D6E",
          light: "#6BA294",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      maxWidth: {
        container: "1200px",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 37, 69, 0.18)",
        card: "0 4px 24px -8px rgba(11, 37, 69, 0.14)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.9s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
