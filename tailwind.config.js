/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Add your paths here
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['"Roboto"', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
      }

    },
  },
  plugins: [],
}
