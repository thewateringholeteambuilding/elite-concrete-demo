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
        brass: 'var(--color-brass)',
        'brass-dark': 'var(--color-brass-dark)',
        'steel-deep': 'var(--color-steel-deep)',
        'steel-mid': 'var(--color-steel-mid)',
        'steel-light': 'var(--color-steel-light)',
        'off-white': 'var(--color-off-white)',
        'warm-gray': 'var(--color-warm-gray)',
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
