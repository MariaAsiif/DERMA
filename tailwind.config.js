/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
     
      screens: {
        'tablet': {'min': '600px', 'max': '767px'},
        'xtra-small': { 'min': '520px', 'max': '599px'},
        // => @media (min-width: 640px) { ... }
      },
      backgroundImage: {
        'footerTop': "url('./assests/webFooter.png')",
        'banner': "url('./assests/banner.png')",
        'footerBg': "url('./assests/svg/Footerbackground.svg')",
        'notreImg': "url(./assests/notre.png)",
        'notreMobiity': "url(./assests/svg/HelpCenter.svg)",
        'helpSupport': "url(./assests/line.png)",
        'appImg': "url(./assests/app.png)",
        'votreImg': "url(./assests/svg/Vehicle renting.svg)",
        'contactImg': "url(./assests/contact.png)",
      }
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