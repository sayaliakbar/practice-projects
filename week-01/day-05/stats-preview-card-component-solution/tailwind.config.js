/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        // Add Inter font under a custom name
        inter: ['"Inter"', "sans-serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        700: "700",
      },
      colors: {
        primary: {
          veryDarkBlue: "hsl(233, 47%, 7%)",
          darkDesaturatedBlue: "hsl(244, 38%, 16%)",
          softViolet: "hsl(277, 64%, 61%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          transparentWhite: "hsla(0, 0%, 100%, 0.75)",
          transparentStatWhite: "hsla(0, 0%, 100%, 0.6)",
        },
      },
      fontSize: {
        body: "15px",
      },
    },
  },
  plugins: [],
};
