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
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      colors: {
        "very-dark-blue": "rgb(5, 6, 19)", // Main background
        "dark-desaturated-blue": "rgb(20, 21, 45)", // Card background
        "soft-violet": "rgb(156, 112, 234)", // Accent
      },
    },
  },
  plugins: [],
};
