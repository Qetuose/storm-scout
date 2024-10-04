/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkest: "#404258",
      dark: "#474E68",
      light: "#50577A",
      lightest: "#6B728E",
      whi: "#F5F5F7",
      whiDarker: "#c0b9c9",
    },
    extend: {
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
});
