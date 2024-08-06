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
      'max-md': { 'max': '767px' },
      sm: { 'min': '480px' },
      md: { 'min': '768px', },
      lg: { 'min': '1024px' },
      xl: { 'min': '1440px' },
    },
    extend: {
      colors: {
        "primary": '#C3C292',
        "secondary": '#BDC39D',
        "back1": '#090A0C',
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}