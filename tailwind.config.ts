import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#101010",
        paper: "#f8f4ef",
        accent: "#f55a3d",
        mint: "#b9f1d6",
        sand: "#f1e3d3",
        denim: "#2344b8",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        "paper": "0 20px 50px -30px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "paper-fiber": "linear-gradient(180deg, rgba(255,255,255,0.8), rgba(250,246,240,0.8))",
      },
    },
  },
  plugins: [],
};

export default config;
