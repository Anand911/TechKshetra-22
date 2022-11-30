/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      dropShadow: {
        new: "10px 10px 0px rgba(255, 0, 0, 1)",
      },
      animation: {
        blob: "blob 10s infinite",
        shine: "shine 1s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translateY(0px)",
            rotate: "0deg",
          },

          "50%": {
            transform: "translateY(50px)",
            rotate: "0deg",
          },

          "100%": {
            transform: "translateY(0px)",
            rotate: "0deg",
          },
        },
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
    screens: {
      // using max-width instead of default min-width
      "2xl": { max: "1535px" },
      xll: { max: "1279px" },
      xl: { max: "1200px" },
      lg: { max: "1023px" },
      md: { max: "767px" },
      sm: { max: "639px" },
      smm: { max: "415px" },
    },
  },
  plugins: [],
};
