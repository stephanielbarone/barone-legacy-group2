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
          50: "#F7F5F0",
          100: "#F2EEE8",
          200: "#E8E0D3",
        },
        navy: {
          900: "#142B45",
          800: "#1B3557",
        },
        gold: {
          300: "#E9D7B0",
          500: "#C5A46D",
          600: "#A98A55",
        },
      },
    },
  },
  plugins: [],
};

export default config;
