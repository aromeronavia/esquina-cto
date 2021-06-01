const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#171B61",
      gray: colors.gray,
      white: "#f8f8f8"
    },
    fontFamily: {
      sans: ["Quicksand", "serif"]
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
