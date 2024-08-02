/** @type {import('tailwindcss').Config} */
module.exports  = {
  content: [],
  theme: {
    screens: {
      's': '310px',
       // => @media (max-width: 310px) { ... }

      'xs': '455px',
       // => @media (max-width: 455px) { ... }

      'sm': '640px',
      // => @media (max-width: 640px) { ... }

      'md': '768px',
      // => @media (max-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (max-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (max-width: 1536px) { ... }
    },
  },
  plugins: [],

}

