/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      screens: {
        'tablet': { 'min': '600px', 'max': '767px' },
        'xtra-small': { 'min': '520px', 'max': '599px' },
        // => @media (min-width: 640px) { ... }
      },
      backgroundImage: {
        'sliderImage': "url('./assests/Slider.png')",

      }
    },
    fontFamily: {
      'Herr': ['Herr Von Muellerhoff', 'cursive'],
      'jose': ['Josefin Sans', "sans-serif"],
      'sans ': ['Open Sans', 'sans-serif'],
      'intr': ['Inter', 'sans-serif'],
      'mons': ['Montserrat', 'sans-serif'],
      'antic': ['Antic Didone', 'serif']
    },

  },
  plugins: [
    plugin(({ addVariant, e }) => {
      addVariant('sidebar-expanded', ({ modifySelectors, separator }) => {
        modifySelectors(({ className }) => `.sidebar-expanded .${e(`sidebar-expanded${separator}${className}`)}`);
      });
    }),
  ]
}