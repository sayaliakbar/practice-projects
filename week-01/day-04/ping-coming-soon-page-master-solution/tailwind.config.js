/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      fontFamily: {
        // Add Libre Franklin font under a custom name
        libre: ['"Libre Franklin"', "sans-serif"],
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
    },
  },
  plugins: [],
};
