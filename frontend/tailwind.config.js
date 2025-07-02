/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // include all files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
        plus: ['Plus Jakarta Sans', 'sans-serif'],
        libre: ['Libre Baskerville', 'serif'],
      },
      transformOrigin: {
    'top': 'top',
    'bottom': 'bottom',
    'left': 'left',
    'right': 'right',
  }
    },
  },
  plugins: [],
}
