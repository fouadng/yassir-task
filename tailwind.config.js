const { guessProductionMode } = require("@ngneat/tailwind");

process.env.TAILWIND_MODE = guessProductionMode() ? 'build' : 'watch';

module.exports = {
    prefix: '',
    mode: 'jit',
    content: [
      './src/**/*.{html,ts,css,scss,sass,less,styl}',
      './src/app/**/*.{html,ts,css,scss,sass,less,styl}',
    ],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          'primary' : '#171717',
          'accent-from' : '#FF8500',
          'accent-to' : '#FEB60F',
          'amber': '#FF7D00',
          'background-color': '#F9F9F9',
          'text-color': '#6D6D6D',
          'text-black': '#000000',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [
      require('@tailwindcss/aspect-ratio'),
      require('@tailwindcss/forms'),
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography')
    ],
};