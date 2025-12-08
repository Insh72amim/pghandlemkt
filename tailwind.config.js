/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Professional blue
        secondary: "#10B981", // Success green
        body: "#64748B",
        bodydark: "#94A3B8",
        stroke: "#E2E8F0",
        gray: "#F1F5F9",
        "gray-2": "#F8FAFC",
        black: "#0F172A",
        whiten: "#F8FAFC",
        whiter: "#FFFFFF",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        display: ["Satoshi", "Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "soft-grid":
          "radial-gradient(circle at 1px 1px, rgba(37,99,235,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        card: "0px 20px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
