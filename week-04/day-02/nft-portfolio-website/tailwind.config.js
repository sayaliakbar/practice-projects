/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        "laptop-x": "4.5rem", // Horizontal padding
        "laptop-y": "1.5rem", // Vertical padding
        "tablet-x": "2.5rem", // Horizontal padding
        "tablet-y": "1.5rem", // Vertical padding
        "mobile-x": "1rem", // Horizontal padding
        "mobile-y": "1rem", // Vertical padding
      },
      colors: {
        primary: {
          blue: "rgba(30,80,255,1)",
          darkBlue: "rgba(8,25,86,1)",
        },
        secondary: {
          darkGray: "rgba(14, 14, 14, 1)",
          navy: "rgba(5, 17, 57, 1)",
        },
        base: { white: "rgba(255,255,255,1)", black: "rgba(0,0,0,1)" },
        accent: {
          purple: "rgba(170,0,255,1)",
          cyan: "rgba(86,153,255,1)",
        },
        text: {
          title: "rgba(51,51,51,1)",
          body: "rgba(102,102,102,1)",
          inField: "rgba(184,184,184,1)",
          disabled: "rgba(235,235,235,1)",
        },
      },
      fontFamily: { poppins: ["Poppins", "serif"] },
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
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".laptop-padding": {
          padding: "1.5rem 4.5rem",
        },
        ".tablet-padding": {
          padding: "1.5rem 2.5rem",
        },
        ".mobile-padding": {
          padding: "1rem 1rem",
        },
      });
    }),
  ],
};
