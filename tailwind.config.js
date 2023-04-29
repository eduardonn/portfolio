/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': 'Montserrat, Garamond, sans',
    },
    extend: {
      colors: {
        primary: '#d8d8d8',
        secondary: '#D82915',
        sunset: '#ffcc5c',
        purpleSky: '#cd5d95',
        sand: 'rgb(255 240 167)',
        deepYellow: 'rgb(255 195 121)',
        deepOrange: 'rgb(255 126 20)',
      },
      fontFamily: {
        'raleway': 'Raleway, Garamond, sans',
        'cinzel': 'Cinzel, Garamond, serif',
        'ubuntu': 'Ubuntu, serif',
        'monospace': 'monospace',
        'major-mono-display': '"Major Mono Display", monospace'
      },
      dropShadow: {
        outline: [
          '0 1px 1px #000',
          '0 -1px 1px #000',
          '1px 0 1px #000',
          '-1px 0 1px #000',
        ]
      }
    },
  },
  plugins: [],
}
