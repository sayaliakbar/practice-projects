/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: { overpass: ["Overpass", "sans-serif"] },
      fontWeight: { 400: "400", 700: "700" },
      colors: {
        primary: {
          orange: "hsl(25, 97%, 53%)",
        },
        neutral: {
          "light-grey": "hsl(217, 12%, 63%)",
          "dark-blue": "hsl(213, 19%, 18%)",
          "very-dark-blue": "hsl(216, 12%, 8%)",
        },
      },
      fontSize: {
        base: "15px",
      },
    },
  },
  plugins: [],
};
