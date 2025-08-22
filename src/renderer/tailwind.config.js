/** @type {import('tailwindcss').confg} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Montserrat, sans-serif',
      },
      Keyframes: {
        slideIn:{
          from: {width: 0},
          to: {width: 'var(--radix-collapsible-content-width)'}
        },
        slideOut: {
          from: {width: 'var(--radix-collapsible-content-width)'},
          to: {width: 0}
        }
      },
      Animation:{
        slideIn: 'slideIn 0.28s ease-out',
        slideOut: 'slideOut 0.28s ease-out'
      }
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.region-drag': {
          '-webkit-app-region': 'drag'
        },
        '.region-no-drag': {
          '-webkit-app-region': 'no-drag'
        },
      })
    })
  ]
}