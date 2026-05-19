import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        mist: '#f8fafc',
        line: '#dbe4ef',
        accent: '#3f5f84',
      },
      boxShadow: {
        soft: '0 10px 40px rgba(31, 41, 55, 0.08)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at 20% 20%, rgba(129, 140, 248, 0.15), transparent 35%), radial-gradient(circle at 80% 0%, rgba(125, 211, 252, 0.20), transparent 35%), linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
