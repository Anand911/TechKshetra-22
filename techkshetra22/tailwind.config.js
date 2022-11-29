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
      },
    },
  },
  plugins: [],
};
