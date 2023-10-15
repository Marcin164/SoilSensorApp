import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: '#6E62E5',
      white: '#FFFFFF',
      lightGray: '#D9D9D9',
      mediumGray: '#727272',
      darkGray: '#4A4A4A',
      almostBlack: '#1C1C1C',
      danger: '#f44336',
      success: '#66bb6a',
      info: '#29b6f6',
      warning: '#ffa726',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
