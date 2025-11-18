import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,jsx,tsx,mdx}",
    "./src/components/**/*.{js,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,jsx,tsx,mdx}",
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