/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'dark-purple': '#2a1a3f',
        'dark-maroon': '#3d1f3d',
        'purple-light': '#4a2568',
        'gold': '#f4a460',
        'orange': '#ff6b35',
        'teal': '#1b5a7f',
      },
    },
  },
  plugins: [],
}
