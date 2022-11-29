/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        'new': '10px 10px 0px rgba(255, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}
