/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        electric: {
          600: '#0055FF', // A slightly deeper, premium blue
          500: '#0066FF', // Standard Stripe/Apple blue
          400: '#3385FF',
          300: '#66A3FF',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
