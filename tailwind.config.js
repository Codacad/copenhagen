/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        spaceGrotest:["Space Grotesk", "sans-serif"],
        roboto:["Roboto", "sans-serif"]
      },
      colors:{
        primary:"#5888a6",
        secondary:"#a1654e",
        light:"#f4f4f4",
        veryLightBlue:"#c4ebf0"
      }
    },
  },
  plugins: [],
}