/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textColor: {
        primary: "#404040",
        blueTxt: "#0097FA",
        secondary: "#8C8C8C",
      },
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        sans: ["Open Sans", "sans-serif"],
      },
      maxWidth: {
        container: "1170px",
      },
      backgroundColor: {
        primary: "#0097FA",
        secondary: "#484848",
      },
      borderColor: {
        primary: "#0097FA",
        secondary: "#484848",
      },
    },
  },
  plugins: [],
};
