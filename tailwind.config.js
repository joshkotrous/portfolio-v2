const { nextui } = require("@nextui-org/theme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,tsx,ts}",
    "./node_modules/@nextui-org/theme/dist/components/card.js",
    "./node_modules/@nextui-org/theme/dist/components/(card|snippet|code|input).js",
  ],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
};
