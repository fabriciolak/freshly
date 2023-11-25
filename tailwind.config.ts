import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      width: {
        container: '1140px',
      },
      fontSize: {
        'base': ['16px', '20px'],
        '2xl': ['24px', '31px'],
      }
    },
  },
  plugins: [],
}
export default config
