import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F1",
          100: "#F2EBDD",
          200: "#E4D9C5",
        },
        navy: {
          900: "#0B192C",
          800: "#152A46",
        },
        gold: {
          300: "#F5D98E",
          500: "#F0B847",
          600: "#845B11",
        },
      },
    },
  },
  plugins: [],
};

export default config;
