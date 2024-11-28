/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    screens: {
      sm: "425px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      colors: {
        primary: {
          red: "hsl(0, 100%, 74%)",
          green: "hsl(154, 59%, 51%)",
        },
        accent: {
          blue: "hsl(248, 32%, 49%)",
        },
        neutral: {
          darkBlue: "hsl(249, 10%, 26%)",
          grayishBlue: "hsl(246, 25%, 77%)",
        },
      },
      fontFamily: {
        // Add Inter font under a custom name
        Poppins: ['"Poppins"', "sans-serif"],
      },
      fontWeight: {
        400: "400",
        500: "500",
        600: "600",
        700: "700",
      },
    },
  },
  plugins: [],
};
