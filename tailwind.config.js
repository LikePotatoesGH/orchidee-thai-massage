/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{html,js}', './pages/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        orchideeColor: '#c99556',
        orchideeTextColor: '#1e5c3f',
        // backgroundLogoColor: '#f9f0df',
      },
    },
  },
  plugins: [],
  safelist: ['text-4xl'],
};
