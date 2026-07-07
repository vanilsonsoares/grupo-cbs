import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        graphite: "#17191d",
        ink: "#23262d",
        gold: "#c8a45d",
        copper: "#b7784b",
        porcelain: "#f7f5f1",
        mist: "#eef1f3",
        navy: "#0d2a45"
      },
      boxShadow: {
        premium: "0 24px 70px rgba(23,25,29,.12)"
      },
      fontFamily: {
        sans: ["Inter", "Arial", "sans-serif"],
        display: ["ui-serif", "Georgia", "serif"]
      }
    }
  },
  plugins: []
};

export default config;
