import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1f2937",
          light: "#f8fafc",
        },
        accent: {
          green: {
            500: "#22c55e",
            600: "#16a34a",
            700: "#15803d",
            800: "#166534",
          },
          orange: {
            500: "#e68a00",
            600: "#cf7a00",
          },
        },
      },
      screens: {
        xs: "475px",
      },
    },
  },
  plugins: [],
};

export default config;
