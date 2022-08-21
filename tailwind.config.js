/** @type {import('tailwindcss').Config} */

const colors = {};

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
      ring: { ...colors },
      fill: { ...colors },
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  plugins: [],
};
