/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#0E3963",
        customDots: "#487096",
      },
      fontFamily: {
        'dela': ['Dela Gothics', 'sans-serif', 'monospace'], // Добавьте ваш шрифт
        'montserrat': ['Montserrat', 'sans-serif', 'monospace'] 
      }
    },
  },
  plugins: [],
};
