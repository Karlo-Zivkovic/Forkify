/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   dropDown: {
      //     "0%": { transform: "translateY(-30px)", opacity: "0" },
      //     "100%": { transform: "translateY(0)", opacity: "1" },
      //   },
      // },
      // animation: {
      //   dropDown: "dropDown 1s ease-in-out infinite",
      // },
    },
  },
  plugins: [],
};
