/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      keyframes: {
        'bounce-fall': {
          '0%, 100%': {
            transform: 'translateY(0)',
            animationTimingFunction: 'cubic-bezier(0.36, 0, 0.66, -0.56)'
          },
          '50%': {
            transform: 'translateY(35%)',
            animationTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)'
          }
        },
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        }
      },
      animation: {
        'bounce-fall': 'bounce-fall 1.5s infinite',
        'shimmer': 'shimmer 2s infinite',
      }
    },
  },
  plugins: [],
};
