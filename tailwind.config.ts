import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        vr: "url('/man-wearing-smart-glasses-touching-virtual-screen.png')",
      },
      fontFamily: {
        title: ["var(--font-clash-display)"],
        unicaOne: ["var(--font-unica-one)"],
      },
      colors: {
        "primary-purple": "#150E28",
      },
    },
  },
  plugins: [],
};
export default config;
