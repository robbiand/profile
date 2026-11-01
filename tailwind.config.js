/** @type {import('tailwindcss').Config} */
const tone = (name) => `rgb(var(--${name}) / <alpha-value>)`

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: tone('bg'),
        surface: tone('surface'),
        ink: tone('ink'),
        muted: tone('muted'),
        line: tone('line'),
        brand: tone('brand'),
        'brand-soft': tone('brand-soft'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
