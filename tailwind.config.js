import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.3s ease-in-out forwards',
        slideOut: 'slideOut 0.3s ease-in-out forwards'
      },
      colors: {
        primary: {
          light: '#0E61FE',
          dark: '#2F79FF',
        },
        bg: {
          light: '#FAFAFA',
          dark: '#262626',
        },
        text: {
          light: '#262626',
          dark: '#FAFAFA',
        },
        grey: {
          light: '#757575',
          dark: '#9D9D9D',
        },
      },
      fontFamily: {
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
        primary: ['primary', ...defaultTheme.fontFamily.sans],
        secondary: ['secondary', ...defaultTheme.fontFamily.mono],
        third: ['third', ...defaultTheme.fontFamily.sans],
        fourth: ['fourth', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
