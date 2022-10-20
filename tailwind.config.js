/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      textColor: {
        "white": "#ececec",
        "primary": "rgb(239 68 68)",
      },
      backgroundImage: {
        "building": "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(../assets/building-bg.jpg)"
      }
    },
  },
  plugins: [],
}