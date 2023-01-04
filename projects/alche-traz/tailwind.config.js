/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  mode: 'jit',
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },    
    extend: {
      colors: {
        blackBlue: '#0C2D48',
        darkBlue: '#145DA0',
        lightBlue: '#2E8BC0',
        whiteBlue: '#B1D4E0'
      }
    },
  },
  plugins: [],
}
