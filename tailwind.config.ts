import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,tsx,mdx}',
    './src/components/**/*.{js,jsx,tsx,mdx}',
    './src/pages/**/*.{js,jsx,tsx,mdx}',
  ],
  safelist: [
    'translate-x-8',
    '-translate-x-8',
    'translate-x-16',
    '-translate-x-16',
    'translate-x-24',
    '-translate-x-24',
    'translate-x-32',
    '-translate-x-32',
    'translate-x-40',
    '-translate-x-40',
    'translate-x-48',
    '-translate-x-48',

    'translate-y-8',
    '-translate-y-8',
    'translate-y-16',
    '-translate-y-16',
    'translate-y-24',
    '-translate-y-24',
    'translate-y-32',
    '-translate-y-32',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        card: 'hsl(var(--card))',
        section: 'hsl(var(--section))',
        border: 'hsl(var(--border))',

        primary: 'hsl(var(--primary))',
        'muted-foreground': 'hsl(var(--muted-foreground))',
      },
    },
  },
  plugins: [],
};

export default config;
