/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '3rem',
        lg: '5rem',
        xl: '6rem',
      },
    },
    extend: {
      fontFamily: {
        'main': ['Lato', 'sans-serif'],
        'heading': ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
