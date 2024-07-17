import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/images/background-section.png')",
        background2: "url('/images/background-section2.png')",
      },
      colors: {
        customGreen: '#4AC959',
        customOrange: '#E88D39',
        customGray: '#9499B3',
        customBlue: '#312F4F',
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif',
      },
      boxShadow: {
        custom: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};

export default config;
