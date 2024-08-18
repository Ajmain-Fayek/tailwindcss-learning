/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      red1: '#d22c34',
      red2: '#ff0000',
      orange: '#ff8938',
      dark1: '#1c1c1c',
      dark2: '#494949',
      dark3: '#777777',
      dark4: '#a4a4a4',
      dark5: '#d2d2d2',
      dark6: '#e8e8e8',
      dark7: '#f4f4f4',
      white: '#ffffff',
    },
    screens: {
      // => @media (min-width: 480px) { ... }
      'sm': '480px',

      // => @media (min-width: 768px) { ... }
      'md': '768px',

      // => @media (min-width: 976px) { ... }
      'lg': '976px',

      // => @media (min-width: 1280px) { ... }
      'xl': '1280px',

      // => @media (min-width: 1536px) { ... }
      '2xl': '1536px',
    },
    fontFamily: {
      manrope: ['"Manrope"', 'sans-serif'],
    },
    extend: {
    },
  },
  plugins: [],
}