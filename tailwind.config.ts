import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 22px 80px rgba(216, 93, 151, 0.22)",
        glass: "0 18px 70px rgba(17, 9, 16, 0.28)"
      }
    }
  },
  plugins: []
};

export default config;
