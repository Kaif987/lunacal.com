/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
      },
      backgroundColor: {
        back: "#1E1E1E",
        stripe: "#2B2F33",
        widget: "#4A4E54",
        topbar: "#171717",
        widgetButton: "#28292F",
        inactiveWidgetText: "#A3ADB2",
        inactiveWidgetBg: "#1D1D1D",
        widgetBg: "#363C43",
      },
      textColor: {
        widget: "#969696",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
