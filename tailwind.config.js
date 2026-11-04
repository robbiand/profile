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
        // Static palette (same in light and dark)
        snow: '#F5F8FF',
        navy: '#12263A',
        cobalt: '#0353A4',
        sky: '#B9D6F2',
        teal: '#14746F',
        wine: '#5A1A32',

        // Semantic tokens (values in src/index.css, switch with theme)
        bg: tone('bg'),
        surface: tone('surface'),
        ink: tone('ink'),
        muted: tone('muted'),
        line: tone('line'),
        brand: tone('brand'),
        'brand-soft': tone('brand-soft'),
        accent: tone('accent'),
        'accent-soft': tone('accent-soft'),
        berry: tone('berry'),
        'berry-soft': tone('berry-soft'),
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
