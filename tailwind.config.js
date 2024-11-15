/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,png}"],
  theme: {
    extend: {
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      gridRowStart: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      gridRowEnd: {
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      objectPosition: {
        'center-bottom': 'center bottom',
      }
    },
  },
  plugins: [],
}