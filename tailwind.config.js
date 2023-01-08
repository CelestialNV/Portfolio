/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'Alata': ['Alata', 'sans-serif'],
      'Raleway': ['Raleway', 'sans-serif']
    },
    extend: {
      colors: {
        'secondary': '#129ed5',
        'homecard-color': '#212834',
        'facebook-color': '#426e9e',
        'linkdin-color': '#04b1db',
        'bg-color': 'rgb(51,51,61)'
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}