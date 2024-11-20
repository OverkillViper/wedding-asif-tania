/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ash: {
          900: '#030303',
          800: '#44403d',
          700: '#5a5a56',
          500: '#c7c7c7',
          300: '#e8e6e7',
          100: '#f8f4f0' 
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        quicksand:  ['Quicksand', 'sans-serif'],
        madina:     ['Madina', 'sans-serif'],
        sabatons:   ['Sabatons', 'sans-serif'],
        cinzel:     ['CinzelDecorative', 'sans-serif'],
        austein:    ['Austein', 'sans-serif'],
        cascadia:   ['Cascadia', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-hamburgers')],
}