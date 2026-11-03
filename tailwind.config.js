/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          light: '#FCEEF2',
          DEFAULT: '#F7C6D0',
          dark: '#E8A7B6',
        },
        rosePink: {
          light: '#F5B0C2',
          DEFAULT: '#E88FA8',
          dark: '#D46E8B',
        },
        cream: {
          light: '#FFFFFF',
          DEFAULT: '#FFF4F1',
          dark: '#FCE7E1',
        },
        mauve: {
          light: '#D4ACBF',
          DEFAULT: '#B98AA6',
          dark: '#936680',
        },
        plum: {
          light: '#5E3E55',
          DEFAULT: '#402B3A',
          dark: '#2E1D29',
          deep: '#1F121C',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Cairo', 'Inter', 'system-ui', 'sans-serif'],
        editorial: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        handwriting: ['"Great Vibes"', 'cursive'],
        arabic: ['"Alexandria"', '"Cairo"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft-glow': '0 8px 32px 0 rgba(232, 143, 168, 0.25)',
        'card-elevated': '0 20px 40px -15px rgba(64, 43, 58, 0.08)',
        'polaroid': '0 12px 28px -6px rgba(64, 43, 58, 0.12), 0 4px 10px -2px rgba(64, 43, 58, 0.06)',
        'envelope': '0 25px 50px -12px rgba(64, 43, 58, 0.25)',
        'wax-seal': '0 4px 12px rgba(185, 138, 166, 0.4)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4.5s ease-in-out infinite',
        'float-reverse': 'floatReverse 5.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.88', transform: 'scale(1.02)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
