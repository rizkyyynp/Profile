/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      'max-md': { 'max': '768px' },
      sm: { 'min': '480px' },
      md: { 'min': '769px', },
      lg: { 'min': '1024px' },
      xl: { 'min': '1440px' },
    },
    extend: {
      colors: {
        "primary": '#C3C292',
        "secondary": '#BDC39D',
        "back1": '#101314',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}