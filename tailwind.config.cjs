/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {

    fontSize:{
      xs:14,
      sm:16,
      md:18,
      lg:20,
      xl:24,
      '2xl': 32
    },

    colors:{
      transparent: 'transparent',

      black: '#121214',
      white: '#FFFFFF',

      gray:{
        100: '#E1E1E6',
        300: '#7C7C8A',
        800: '#1E1E1E',
        900: '#202024'
      },

      cyan:{
        300: '#8DD8ED',
        500: '#61DAFB',
        600: '#4EA8DE'
      }

    },
    
    extend: {
      fontFamily:{
        sans:'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}
