/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {},
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
  },
};
