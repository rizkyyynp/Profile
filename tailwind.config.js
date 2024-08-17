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
        "third": '#C1C7A3',
        "back1": '#090A0C',
        "back2": '#171717',
      },
      size:{
        '17': "68px",
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
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
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}