/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#EEEAE4',
        accent: '#ff6b35',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        inter: ['Inter', 'Helvetica Neue', 'Arial', 'sans-serif'],
        bebas: ['Bebas Neue', 'cursive'],
      },
      letterSpacing: {
        tighter: '-0.05em',
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}