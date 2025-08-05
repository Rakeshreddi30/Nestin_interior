/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'italiana': ['Italiana', 'serif'],
        'forum': ['Forum', 'serif'],
        'saira': ['Saira', 'serif'],
        'cursive':['"Playwrite AU NSW", cursive'],
        'roboto':['Roboto Condensed', 'sans-serif'],
      },
      container :{
        center : true,
        padding : {
          default : '1rem',
          sm:'2rem',
        }
      }
    },
  },
  plugins: [],
}

