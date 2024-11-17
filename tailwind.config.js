/** @type {import('tailwindcss').Config} */

import colors from "tailwindcss/colors";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: colors.black,
      },
      fontSize: {
        h1: "56px",
        h2: "42px",
        h3: "28px",
        h4: "21px",
      },
    },
  },
  plugins: [],
};
