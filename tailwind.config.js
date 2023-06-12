/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // League of Legends colors
        'lol-blue': '#137CBD',
        'lol-red': '#D0021B',
        'lol-yellow': '#FFD700',
        'lol-green': '#2ECC71',
        'lol-gray': '#808080',
      },
      fontFamily: {
        // League of Legends fonts
        'lol-heading': ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        'lol-body': ['"Roboto"', 'Arial', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

