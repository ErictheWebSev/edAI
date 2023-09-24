/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './static/js/*.js'],
  theme: {
    extend: {
      colors: {
        'brightorange': '#ff9900',
        'brightpink': '#ff69b4',
      },
    },
  },
  plugins: [],
}
