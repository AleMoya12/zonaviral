import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        viral: {
          black: "#09090f",
          panel: "#111827",
          purple: "#7c3aed",
          pink: "#ec4899",
          orange: "#f97316",
          yellow: "#facc15",
          blue: "#2563eb"
        }
      },
      boxShadow: {
        glow: "0 24px 80px rgba(191, 58, 20, 0.24)",
        card: "0 24px 80px rgba(0, 0, 0, 0.32)"
      },
      fontFamily: {
        sans: ["var(--font-inter-tight)", "Arial", "Helvetica", "sans-serif"],
        display: ["var(--font-sora)", "Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
