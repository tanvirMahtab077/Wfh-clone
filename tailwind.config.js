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
      keyframes: {
        popUpY: {
          "0%": { opacity: "0", transform: "translateY(10%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        popDownY: {
          "0%": { opacity: "0", transform: "translateY(-20%)" },
          "100%": { opacity: "1", transform: "translateY(0%)" },
        },
        slideX: {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0%)" },
        },
        slideRevX: {
          "0%": { opacity: "1", transform: "translateX(0%)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
        noAnim: {
          "0%": { opacity: "1" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
