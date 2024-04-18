/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Cyan: "hsl(180, 66%, 49%)",
        "Dark-Violet": "hsl(257, 27%, 26%)",

        Red: "hsl(0, 87%, 67%)",

        Gray: "hsl(0, 0%, 75%)",
        "Grayish-Violet": "hsl(230, 25%, 95%)",
        "Very-Dark-Blue": "hsl(255, 11%, 22%)",
        "Very-Dark-Violet": "hsl(260, 8%, 14%)",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "repeat(auto-fit, minmax(12rem, 1fr))",
      },
    },
  },
  plugins: [],
};
