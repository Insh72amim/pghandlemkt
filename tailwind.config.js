/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3C50E0",
        secondary: "#80CAEE",
        body: "#64748B",
        bodydark: "#AEB7C0",
        stroke: "#E2E8F0",
        gray: "#EFF4FB",
        "gray-2": "#F7F9FC",
        black: "#1C2434",
        whiten: "#F1F5F9",
        whiter: "#F5F7FD",
      },
      fontFamily: {
        sans: ["Satoshi", "Inter", "system-ui", "sans-serif"],
        display: ["Satoshi", "Space Grotesk", "sans-serif"],
      },
      backgroundImage: {
        "soft-grid":
          "radial-gradient(circle at 1px 1px, rgba(60,80,224,0.08) 1px, transparent 0)",
      },
      boxShadow: {
        card: "0px 20px 45px rgba(15, 23, 42, 0.08)",
      },
    },
  },
  plugins: [],
};
