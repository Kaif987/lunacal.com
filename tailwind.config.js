const { blackA, green, mauve, violet } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
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
        buttonSecondary: "#464C53",
      },
      textColor: {
        widget: "#969696",
      },
      colors: {
        ...blackA,
        ...green,
        ...mauve,
        ...violet,
        buttonStart: "#303439",
        buttonEnd: "#161718",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
