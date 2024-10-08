import defaultTheme from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        theme: {
          50: '#f5f5f9',
          100: '#e8e8f1',
          200: '#d6d6e7',
          300: '#b9b9d7',
          400: '#9797c3',
          500: '#827eb3',
          600: '#746ca4',
          700: '#6a6095',
          800: '#5b527b',
          900: '#4b4563',
          950: '#25222f',
        },
      },
      fontFamily: {
        sans: ['Outfit Variable', ...defaultTheme.fontFamily.sans],
        serif: ['"Roboto Slab Variable"', ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        fade: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' },
        },
      },
      animation: {
        'fade-out': 'fade 300ms ease-in-out forwards',
        'fade-in': 'fade 300ms ease-in-out backwards',
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('hocus', ['&:hover', '&:focus-visible']);
      addVariant('group-hocus', ['.group:hover &', '.group:focus-visible &']);
    }),
  ],
};
