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
        background: "#FAFAF8",
        surface: "#FFFFFF",
        ink: {
          DEFAULT: "#141413",
          muted: "#6B6B68",
          subtle: "#9C9B98",
        },
        line: {
          DEFAULT: "#E8E6E1",
          strong: "#D6D3CC",
        },
        accent: {
          DEFAULT: "#6B5BD6",
          soft: "#F2F0FC",
          hover: "#5A4BC4",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["ui-serif", "Georgia", "Cambria", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      borderRadius: {
        xl: "12px",
        "2xl": "16px",
        "3xl": "20px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 20, 19, 0.04), 0 1px 1px rgba(20, 20, 19, 0.03)",
        card: "0 1px 3px rgba(20, 20, 19, 0.05), 0 1px 2px rgba(20, 20, 19, 0.03)",
        elevated: "0 4px 14px rgba(20, 20, 19, 0.06), 0 2px 6px rgba(20, 20, 19, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
