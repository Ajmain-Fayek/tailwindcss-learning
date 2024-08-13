/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // => @media (min-width: 640px) { ... }
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
    },
  },
  plugins: [],
}