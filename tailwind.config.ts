import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGreen: 'var(--darkGreen)',
        lightGreen: 'var(--lightGreen)',
      },
      backgroundImage: {
        "gradient-background": "var(--gradient-background)",
        'gradient-sidebar': 'linear-gradient(to bottom, #436568 10%, #01050F 92%)',
      },
       fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
      },
      spacing: {
        '1': '0.1em',
        '2': '0.5rem',
        // Add as many as you need
      },
    },
  },
  plugins: [],
};

export default config;