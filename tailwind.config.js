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
        'Beige': '#FDFCDC',
        'Salmon': '#FED9B7',
        'Rojo': '#F07167',
      }

    },
  },
  plugins: [],
}

