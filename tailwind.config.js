/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      chakra: "Chakra Petch",
      vt323: "VT323",
    },
    extend: {
      colors: {
        matrix: "#048A06",
        "matrix-light": "#06C909",
        "matrix-medium": "#048A06",
        "matrix-dark": "#036605",
        "custom-gray": "#4C5C4D"
      },
    },
  },
};
