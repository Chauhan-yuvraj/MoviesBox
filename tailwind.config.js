/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html" , "./pages/SignUp.html" ,  "./pages/Login.html" , "./pages/MovieDetails.html" , "./pages/cart.html" ],
  theme: {
    extend: {
      colors:{
        'tv-red' : '#BE123C',
      }
    },
  },
  plugins: [],
}

