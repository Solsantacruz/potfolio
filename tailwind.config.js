/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    fontFamily: {
      primary: 'Playfair Display',
      body: 'Work Sans',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '3rem',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {
      content: {
        proyect: 'url("/src/assets/outline-text/proyect.svg")',
      },
      colors: {
        violet: '#a21caf',
        white: '#ffffff',
        black: '#262626',
        gris: '#c4b5fd',
        rose: '#f472b6',
        orange: '#fb923c',
        yellow: '#ffff00',
        green: "#292524",
        start: "#CC0033",
        nav: "#190028",
        fondo: "#fefcf5",
        primary: '#050402',
        secondary: '#1C1D24',
        red:"#dc2626",
        paragraph: '#878e99',
      },
    },
  },
  plugins: [],
}

// "./public/index.html"
