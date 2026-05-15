/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        appBg: "#171717",
        card: "#242424",
        primary: "#3B82F6",
        primaryLight: "rgba(59, 130, 246, 0.16)",
        textMain: "#F5F5F5",
        textSecondary: "#A3A3A3",
        borderSoft: "rgba(255, 255, 255, 0.12)",
      },
      boxShadow: {
        activeCard: "0 18px 42px rgba(0, 0, 0, 0.30)",
        player: "0 -18px 44px rgba(0, 0, 0, 0.34)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Inter",
          "Noto Sans TC",
          "PingFang TC",
          "Microsoft JhengHei",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
