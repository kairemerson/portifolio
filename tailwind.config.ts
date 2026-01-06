import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,jsx,tsx,mdx}",
    "./src/components/**/*.{js,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,tsx,mdx}",
  ],
   safelist: [
    "translate-x-8",
    "-translate-x-8",
    "translate-x-16",
    "-translate-x-16",
    "translate-x-24",
    "-translate-x-24",
    "translate-x-32",
    "-translate-x-32",
    "translate-x-40",
    "-translate-x-40",
    "translate-x-48",
    "-translate-x-48",

    "translate-y-8", 
    "-translate-y-8",
    "translate-y-16", 
    "-translate-y-16",
    "translate-y-24", 
    "-translate-y-24",
    "translate-y-32", 
    "-translate-y-32",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        bgDark: "var(--bg-dark)",
        bgLight: "var(--bg-light)",
      },
    },
  },
  plugins: [],
};

export default config;