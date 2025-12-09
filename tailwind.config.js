/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // We can define custom colors if needed, but slate/gray/zinc are built-in.
        // The user asked for a teal accent #2dd4bf
        accent: {
          light: '#5eead4', // teal-300
          DEFAULT: '#2dd4bf', // teal-400
          dark: '#14b8a6', // teal-500
        }
      }
    },
  },
  plugins: [],
}
