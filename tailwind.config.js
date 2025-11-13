/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        reunir: {
          dark: '#0D142D',
          light: '#F8F7F4',
          accent: '#A76F6F',
        },
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
