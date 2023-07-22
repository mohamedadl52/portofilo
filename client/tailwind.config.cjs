/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors : {
        "maincolor" : "#1ba911",
        "seconcolor" : "#1f2937"
      }
    },
  },
  plugins: [],
}