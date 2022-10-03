/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    // layouts folder intentionally omitted
  ],
  theme: {
    extend: {
      width: {
        'screen-1/3': '33vw',
      },
    },
  },
  plugins: [],
};
