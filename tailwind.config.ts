import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#644542',
        primaryDark: '#241d1d',
        secondary: '#e8d5c0',
        secondaryDark: '#b08267',
        // primary: '#ddbda4',
        custGreen: '#E1DCB6',
        custYellow: '#E9C386',
        custRed: '#BD6060',
      },
    },
  },
  plugins: [],
};
export default config;
