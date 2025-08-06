/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],                 // untuk body text
        heading: ['Montserrat', 'serif'],        // untuk judul
      },
    },
  },
  plugins: [],
}

