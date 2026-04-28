/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        // Основная палитра
        pink: {
          deep: '#C2185B',
          main: '#E91E8C',
          soft: '#F48DB4',
          light: '#F9C5DA',
          pale: '#FDE8F2',
          ultra: '#FFF4F9',
          blush: '#FFEBF3',
        },
        // Золото (из логотипа)
        gold: {
          dark: '#8B6914',
          main: '#C8A441',
          mid: '#D4B54A',
          light: '#E8CE7A',
          pale: '#FBF3D9',
          ultra: '#FFFCF0',
          glow: 'rgba(200,164,65,0.25)',
        },
        // Небесно-голубой (фон логотипа)
        sky: {
          deep: '#4BACC8',
          main: '#7ECFDE',
          soft: '#B4E4F0',
          light: '#D6F2FA',
          pale: '#EEF9FC',
          ultra: '#F5FDFF',
        },
        // Нейтральные
        warm: {
          50: '#FFFCFA',
          100: '#FFF8F4',
          200: '#F5EDE8',
          300: '#E8D8D0',
          600: '#8A7A74',
          700: '#5C4A44',
          800: '#2E201C',
          900: '#1A100C',
        },
        // Тёмный акцент (для тёмных секций)
        luxury: {
          50: '#F5F0FF',
          100: '#E8DCFF',
          800: '#1A0D2E',
          900: '#0D0618',
        },
      },
      fontFamily: {
        display: ['Unbounded', 'sans-serif'],
        headline: ['Unbounded', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
        label: ['Manrope', 'sans-serif'],
        quote: ['"Cormorant Garamond"', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
        '2xl': '40px',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(200,164,65,0.25)',
        'gold-lg': '0 8px 40px rgba(200,164,65,0.35)',
        'pink': '0 4px 24px rgba(233,30,140,0.2)',
        'pink-lg': '0 8px 40px rgba(233,30,140,0.3)',
        'sky': '0 4px 24px rgba(126,207,222,0.3)',
        'sky-lg': '0 8px 40px rgba(126,207,222,0.4)',
        'glass': '0 8px 32px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.6)',
        'luxury': '0 24px 80px rgba(13,6,24,0.4)',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #8B6914 0%, #C8A441 40%, #E8CE7A 60%, #C8A441 80%, #8B6914 100%)',
        'pink-gradient': 'linear-gradient(135deg, #C2185B 0%, #E91E8C 100%)',
        'sky-pink': 'linear-gradient(135deg, #EEF9FC 0%, #FFF4F9 100%)',
        'luxury-dark': 'linear-gradient(160deg, #1A0D2E 0%, #0D1829 100%)',
        'hero-bg': 'radial-gradient(ellipse at 70% 50%, rgba(126,207,222,0.15) 0%, transparent 60%), radial-gradient(ellipse at 30% 80%, rgba(233,30,140,0.08) 0%, transparent 60%), linear-gradient(160deg, #F5FDFF 0%, #FFF4F9 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'scale-in': 'scaleIn 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-gold': 'pulseGold 2.5s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.94)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(200,164,65,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(200,164,65,0.6)' },
        },
      },
    },
  },
  plugins: [],
}
