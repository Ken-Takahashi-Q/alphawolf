import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      // bounce
      keyframes: {
        bounceTwice: {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(-20px)' },
          '20%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-10px)' },
          '40%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
          '60%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounceTwice: 'bounceTwice 2s ease-in-out 1, bounceTwice 2s ease-in-out 3s infinite',
      },
    },
  },
  plugins: [],
};
export default config;
