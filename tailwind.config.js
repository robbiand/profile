/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        heading: ['Montserrat', 'serif'], 
        code: ['Google Sans Code', 'serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

