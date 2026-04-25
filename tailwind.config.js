/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Archivo', 'sans-serif'],
      },
      colors: {
        brass: 'hsl(38, 85%, 55%)',
        'brass-dark': 'hsl(34, 75%, 42%)',
        'steel-deep': 'hsl(220, 30%, 10%)',
        'steel-mid': 'hsl(220, 20%, 18%)',
        'steel-light': 'hsl(220, 15%, 28%)',
        'off-white': 'hsl(40, 20%, 96%)',
        'warm-gray': 'hsl(220, 10%, 55%)',
      },
      borderRadius: {
        DEFAULT: '0px',
        sm: '2px',
        md: '4px',
        lg: '4px',
        xl: '4px',
        '2xl': '4px',
        '3xl': '4px',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
