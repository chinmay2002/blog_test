/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily : {
      Poppins : ['Poppins'," sans-serif"],
      Lato: ['Lato', "sans-serif"],
      Mont: ['Montserrat', "sans-serif"],
      Roboto: ['Roboto', "sans-serif"],
      DancingCursive: ['Dancing Script', 'cursive'],
    },
  },
  plugins: [],
}

