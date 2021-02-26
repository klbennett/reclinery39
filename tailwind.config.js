const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    letterSpacing: {
      wider: ".10em",
      widest: ".25em",
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", ...defaultTheme.fontFamily.serif],
        serif: ["Playfair Display", ...defaultTheme.fontFamily.sans],
        display: ["Georgia"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
