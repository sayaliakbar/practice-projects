/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      animation: {
        "spin-number": "spin 1s linear infinite",
      },
      colors: {
        primary: {
          purple: "hsl(259, 100%, 65%)",
          lightRed: "hsl(0, 100%, 67%)",
        },
        neutral: {
          white: "hsl(0, 0%, 100%)",
          offWhite: "hsl(0, 0%, 94%)",
          lightGrey: "hsl(0, 0%, 86%)",
          smokeyGrey: "hsl(0, 1%, 44%)",
          offBlack: "hsl(0, 0%, 8%)",
        },
      },
      fontSize: {
        body: "32px", // Font size for inputs
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        700: "700",
        800: "800",
      },
    },
  },
  plugins: [],
};
