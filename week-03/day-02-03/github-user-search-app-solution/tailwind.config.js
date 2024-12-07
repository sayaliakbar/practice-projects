/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],

  theme: {
    extend: {
      fontFamily: { spacemono: ["Space Mono", "monospace"] },
      fontWeight: { 300: "300", 400: "400", 500: "500", 700: "700" },
    },
    colors: {
      "font-1": "#2b3442",
      "font-2": "#4b6a9b",
      "font-3": "#697c9a",
      title: "#222731",
      "bg-1": "#f6f8ff",
      "bg-2": "#fefefe",
      "hover-toggle": "#222731",
      "dark-font-1": "#fff",
      "dark-font-2": "#fff",
      "dark-font-3": "#fff",
      "dark-title": "#fff",
      "dark-bg-1": "#141d2f",
      "dark-bg-2": "#1e2a47",
      "dark-hover-toggle": "#90a4d4",
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
  },
};
