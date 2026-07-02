/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "matrix(-0.822377, -0.568943, -0.568943, 0.822377, 3631.88, 2291.09) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "matrix(-0.822377, -0.568943, -0.568943, 0.822377, 3631.88, 2291.09) scale(1)",
          },
        },
      },
    },
  },
  plugins: [],
}