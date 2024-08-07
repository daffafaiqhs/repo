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
      fontSize: {
        'title-sm': 'clamp(0.8rem, 13vw, 4rem)',
        'subtitle-sm': 'clamp(0.5rem, 2vw, .6rem)',
        'title-md': 'clamp(4rem, calc(8vw + 2vh), 7.2rem)',
      },
      width: {
        'title-sm': 'clamp(1rem, 6vw, 1.9rem)',
        'img-md': 'calc(30vw + 25vh)',
      },
      aspectRatio: {
        '6/9': '6 / 9',
      },
      padding: {
        'width-responsive': 'clamp(.2rem, 6vw, 10rem)',
        'height-responsive': 'clamp(.75rem, 6vh, 10rem)',
      },
    },
  },
  plugins: [],
}

