/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '300px',
      'md': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'gray-bg': '#dae0e6',
        'gray-text': '#A4A5A5',
        'gray-comps': '#F6F7F8',
        'gray-hover': '#e3e3e3',
        'blue': '#1877F2'
      },
    },
    fontFamily: {
      sans: ['Inter', 'Helvetica', 'sans-serif']
    },
  },
  plugins: [],
}

