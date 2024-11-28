/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode with class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2D5E88",
        darkPrimary: "#111827",
        textPrimary: "#2571A1",
        textDark: "#F9FAFB",
      },
    },
  },
  plugins: [],
};
