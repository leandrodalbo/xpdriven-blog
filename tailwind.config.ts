import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        jungleGreen: '#00C48C',
        junglePink: '#FF6F91',
        darkBg: '#121212',
        lighterBg: '#E4E4E4',
        lightBg: '#FFFFFF',
        darkText: '#E4E4E4',
        darkerText: '#121212',
        lightText: '#222222',
      },
    },
  },
  plugins: [],
};

export default config;