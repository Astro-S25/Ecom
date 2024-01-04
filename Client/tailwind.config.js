/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}","./index.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        extend: {
          fontFamily:{
            'Roboto':['Roboto','sans-serif'],
            'Poppins':['Poppins','sans-serif']
          }
        },
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light",
   }
   
 
}

