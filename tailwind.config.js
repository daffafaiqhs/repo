/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#929292',
        'primary-orange': '#FF933F',
        'secondary-yellow': '#FEDC7E',
      },
    },
  },
  plugins: [],
}

