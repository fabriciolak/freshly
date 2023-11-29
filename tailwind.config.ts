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
        'xs': ['12px', '15px'],
        '2xs': ['18px', '23px'],
        'lg': ['19px', '24px'],
        'base': ['16px', '20px'],
        '2xl': ['24px', '31px'],
      },
      colors: {
        'recipe-card': ''
      },
      backgroundImage: {
        card: 'url("https://thecookingjar.com/wp-content/uploads/2022/07/parmesan-meatballs-1.jpg")',
      }
    },
  },
  plugins: [],
}
export default config
