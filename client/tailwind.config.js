/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D1D1D",
        secondary: "#F97316",
        teritary: "#54D6BB",
        red: "#FB4848",
        button: "#E42D2D",
        navbar: "#222",
      },
      boxShadow: {
        a: "0 5px 15px rgba(0, 0, 0, .25)",
        custom: "0px 2px 6px 4px rgba(0, 0, 0, 0.508)",
      },
    },

    screens: {
      vm: "339px",
      sm: "639px",
      md: "768px",
      lg: "1023px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};