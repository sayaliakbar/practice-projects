/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      fontFamily: {
        // Add Libre Franklin font under a custom name
        libre: ['"Libre Franklin"', "sans-serif"],
      },
      fontWeight: {
        300: "300",
        600: "600",
        700: "700",
      },
      colors: {
        primary: {
          blue: "hsl(223, 87%, 63%)", // Blue
        },
        secondary: {
          paleBlue: "hsl(223, 100%, 88%)", // Pale Blue
          lightRed: "hsl(354, 100%, 66%)", // Light Red
        },
        neutral: {
          gray: "hsl(0, 0%, 59%)", // Gray
          veryDarkBlue: "hsl(209, 33%, 12%)", // Very Dark Blue
        },
      },
      fontSize: {
        body: "20px", // Body Copy
      },
    },
  },
  plugins: [],
};
