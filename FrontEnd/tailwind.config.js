/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["'Baloo 2'", "sans-serif"],
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: 0, transform: 'translateY(-20%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        'slide-down': 'slideDown 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

