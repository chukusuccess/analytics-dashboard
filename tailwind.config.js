/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "sm": "768px", // Small screens (>= 768px)
        "md": "1140px", // Medium screens (>= 1140px)
        "lg": "1280px", // Large screens (>= 1280px)
        "xl": "1440px", // Extra large screens (>= 1440px)
      },
    },
  },
  plugins: [],
};
