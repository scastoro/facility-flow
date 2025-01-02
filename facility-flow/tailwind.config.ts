import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';
import radix from 'tailwindcss-radix';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9', // Primary accent color
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      typography: {
        DEFAULT: {
          css: {
            'font-family': 'var(--font-geist-sans)',
            code: {
              'font-family': 'var(--font-geist-mono)',
            },
            'ul > li::marker': {
              color: 'rgb(55 65 81)',
            },
            'ol > li::marker': {
              color: 'rgb(55 65 81)',
            },
          },
        },
      },
    },
  },
  plugins: [typography, radix],
} satisfies Config;
