module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      tablet: '576px',
      // => @media (min-width: 576px) { ... }

      laptop: '992px',
      // => @media (min-width: 992px) { ... }

      desktop: '1200px',
      // => @media (min-width: 1200px) { ... }
    },
    extend: {},
  },
  plugins: [],
};
