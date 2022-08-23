/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-blue': '#02C2FF',
        'background-green': '#059224',
        'primary-dark': '#007094',
        'primary-light': '#02C2FF'
      },
      spacing: {
        '1/10': '10%'
      },
      boxShadow: {
        'green': '4px 4px 22px -10px rgba(27, 191, 68, 1)'
      }
    },
  },
  plugins: [],
}
