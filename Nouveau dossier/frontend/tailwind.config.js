/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: "#1d352d",
          dark: "#152922",
          darker: "#0f1f1a",
          light: "#2a4b40",
        },
        cream: {
          DEFAULT: "#f4f2ec",
          card: "#eceae2",
          soft: "#e7e5dc",
        },
        gold: {
          DEFAULT: "#c69a3e",
          dark: "#b3872e",
          light: "#d9b467",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          muted: "#6b7280",
          soft: "#8b8f94",
        },
      },
      boxShadow: {
        card: "0 2px 10px rgba(0,0,0,0.04)",
        panel: "0 8px 30px rgba(0,0,0,0.06)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
}
