/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          cyan: "hsl(180, 29%, 50%)", // Desaturated Dark Cyan
        },
        neutral: {
          bg: "hsl(180, 52%, 96%)", // Light Grayish Cyan (Background)
          tablets: "hsl(180, 31%, 95%)", // Light Grayish Cyan (Filter Tablets)
          dark: "hsl(180, 8%, 52%)", // Dark Grayish Cyan
          veryDark: "hsl(180, 14%, 20%)", // Very Dark Grayish Cyan
        },
      },
    },
  },
  plugins: [],
};
