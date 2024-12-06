/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      fontFamily: { epilogue: ["Epilogue", "serif"] },
      fontWeight: { 500: "500", 700: "700" },
      colors: {
        neutral: {
          "almost-white": "hsl(0, 0%, 98%)",
          "medium-gray": "hsl(0, 0%, 41%)",
          "almost-black": "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        paragraph: "16px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".no-arrows": {
          "&::-webkit-inner-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
          "&::-webkit-outer-spin-button": {
            "-webkit-appearance": "none",
            margin: "0",
          },
          '&[type="number"]': {
            "-moz-appearance": "textfield",
          },
        },
      });
    },
  ],
};
