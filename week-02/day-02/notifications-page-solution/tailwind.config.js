/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "primary-red": "hsl(1, 90%, 64%)",
        "primary-blue": "hsl(219, 85%, 26%)",

        // Neutral Colors
        "neutral-white": "hsl(0, 0%, 100%)",
        "neutral-very-light-blue": "hsl(210, 60%, 98%)",
        "neutral-light-blue-1": "hsl(211, 68%, 94%)",
        "neutral-light-blue-2": "hsl(205, 33%, 90%)",
        "neutral-gray-blue": "hsl(219, 14%, 63%)",
        "neutral-dark-gray-blue": "hsl(219, 12%, 42%)",
        "neutral-very-dark-blue": "hsl(224, 21%, 14%)",
      },
      fontFamily: { plusJakartaSans: ["Plus Jakarta Sans", "sans-serif"] },
      fontWeight: { 500: "500", 800: "800" },
    },
  },
  plugins: [],
};
