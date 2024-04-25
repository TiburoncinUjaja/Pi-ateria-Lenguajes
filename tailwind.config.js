/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Azul-oscuro': '#0081A7',
        'Azul-claro': '#00AFB9',
        'Beige': '#EEF4ED',
        'Salmon': '#00AFB9',
        'Rojo': '#0081A7',
      }

    },
  },
  plugins: [],
}

