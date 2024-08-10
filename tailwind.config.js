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
        'subtitle-sm': 'clamp(.5rem, 2vw, .6rem)',
        'title-md': 'clamp(4rem, calc(8vw + 2vh), 8rem)',
        'subtitle-md': 'clamp(.6rem, 2vw, 1rem)',
        'title-2xl': 'clamp(8rem, calc(8vw + 2vh), 10rem)',
      },
      width: {
        'title-sm': 'clamp(1rem, 6vw, 1.9rem)',
        'title-md': 'clamp(1.5rem, 5vw, 4.5rem)',
        'img-responsive': 'calc(30vw + 30vh)',
      },
      aspectRatio: {
        '6/9': '6 / 9',
      },
      padding: {
        'width-responsive': 'clamp(.2rem, 3vw, 2rem)',
      },
      screens: {
        '3xl': '2000px',
      },
    },
  },
  plugins: [],
}

