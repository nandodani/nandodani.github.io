/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        neutral: {
          900: "#171717",
        }
      }
    },
  },
  plugins: [],
}