import { fontFamily } from 'tailwindcss/defaultTheme';
import type { Config } from 'tailwindcss';

const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    // container: {
    //   center: true,
    //   screens: {
    //     '2xl': '1400px'
    //   }
    // },
    extend: {
      colors: {
        border: '#3B4F74',
        background: '#27354E',
        foreground: 'hsla(0, 0%, 100%)',
        primary: {
          DEFAULT: '#27354E',
          200: 'hsla(200, 49%, 56%)',
          300: '#DC7DA6',
          400: 'hsla(30, 75%, 70%)',
          500: '#172234',
          foreground: 'hsla(0, 0%, 80%)'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        }
      },
      fontFamily: {
        sans: ['var(--font-unbounded)', ...fontFamily.sans],
        heading: ['var(--font-heading)', ...fontFamily.sans]
      },
      boxShadow: {
        header: '0px 0px 30px 0px rgba(0, 0, 0, 0.32)',
        card: '0px 0px 30px 0px rgba(0, 0, 0, 0.32)'
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
} satisfies Config;

export default config;
