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
        glow: "0 20px 80px rgba(236, 72, 153, 0.22)",
        card: "0 18px 60px rgba(0, 0, 0, 0.25)"
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Arial", "Helvetica", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
