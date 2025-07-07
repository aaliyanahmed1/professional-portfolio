import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#22304A", // deep blue
        "primary-foreground": "#F4F6FA",
        accent: "#A68A64", // muted gold
        "accent-foreground": "#22304A",
        foreground: "#2D3748", // dark gray
        "muted-foreground": "#6B7280", // muted gray
        background: "#F4F6FA",
        border: "#D1D5DB", // <-- add this line for border-border
      },
      // Example gradients
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #22304A 0%, #2D3748 100%)",
        "text-gradient": "linear-gradient(90deg, #A68A64, #22304A)",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
