/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0245A3",
        "primary-focus": "#013e92",
        "primary-content": "#FFFFFF",
        secondary: "#FEFF86",
        "secondary-focus": "#e4e578",
        "secondary-content": "#000000",
        base: "#FDFCFF",
      },
    },
  },
  plugins: [],
};
