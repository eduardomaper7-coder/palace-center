import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './data/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0a0908',
          soft: '#131211',
          raised: '#1b1917',
          line: '#2a2622',
        },
        cream: {
          DEFAULT: '#f6f2e9',
          dim: '#cfc9ba',
          muted: '#9c9585',
        },
        gold: {
          50: '#faf3dd',
          100: '#f1e2ad',
          200: '#e6cd7e',
          300: '#d9b75a',
          400: '#cda23f',
          DEFAULT: '#c9a227',
          500: '#c9a227',
          600: '#a9841f',
          700: '#846419',
          800: '#5c4712',
          900: '#382b0b',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #f1e2ad 0%, #c9a227 45%, #846419 100%)',
        'ink-radial': 'radial-gradient(120% 120% at 50% 0%, #1b1917 0%, #0a0908 60%)',
      },
      boxShadow: {
        gold: '0 0 0 1px rgba(201,162,39,0.35), 0 8px 30px -10px rgba(201,162,39,0.25)',
        card: '0 10px 40px -15px rgba(0,0,0,0.6)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards',
        shimmer: 'shimmer 3s linear infinite',
      },
      maxWidth: {
        content: '1280px',
      },
    },
  },
  plugins: [],
};

export default config;
