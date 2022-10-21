/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./dist/js/script.js"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
