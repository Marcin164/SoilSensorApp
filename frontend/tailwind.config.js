/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '425px',
        md: '760px',
        lg: '860px',
        xl: '1024px'
      },
      colors: {
        primary: '#609966',
        secondary: '#727272'
      }
    }
  },
  plugins: []
}
