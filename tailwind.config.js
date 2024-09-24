/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
export default {
  content: [
    "./presets/**/*.{js,vue,ts}",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#c2a16d",
        secondary: "#e5ddd8",
        iggrey: "#6e6e6e",
      },
    },
  },
  plugins: [
    require("tailwindcss-primeui"),
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": {
          color: theme("colors.white"),
        },
        h1: {
          fontSize: theme("fontSize.4xl"),
          fontFamily: theme("fontFamily.serif"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.white"),
        },
        h2: {
          fontSize: theme("fontSize.3xl"),
          fontFamily: theme("fontFamily.serif"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.slate.950"),
        },
        h3: {
          fontSize: theme("fontSize.xl"),
          fontFamily: theme("fontFamily.serif"),
          fontWeight: theme("fontWeight.bold"),
        },
        h4: {
          fontSize: theme("fontSize.lg"),
          fontFamily: theme("fontFamily.serif"),
          fontWeight: theme("fontWeight.bold"),
          color: theme("colors.primary"),
        },
      });
    }),
  ],
};
