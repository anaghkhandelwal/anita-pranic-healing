/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        plum: {
          50: '#FBF7FC',
          100: '#F4EEF7',
          600: '#5B2C6F',
          800: '#3D1B4B',
          900: '#2A1234',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FBF5E8',
          200: '#F4E7CC',
          400: '#DFC082',
          500: '#C5A059',
          600: '#9E7A31',
        },
        sage: {
          50: '#F4F8F6',
          100: '#E6F0EB',
          500: '#2D6A4F',
          600: '#1B4332',
        },
        canvas: '#FAF8F5',     // Warm Cashmere Ivory
        surface: '#FFFFFF',
        ink: {
          DEFAULT: '#191516',
          muted: '#635D5B',
          subtle: '#9A928F',
        },
        divider: '#EBE6DF',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-reverse': 'floatRev 9s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
        'glow-expand': 'glowExpand 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-14px) scale(1.02)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(14px) scale(0.98)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.8' },
          '50%': { opacity: '1' },
        },
        glowExpand: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.4' },
          '50%': { transform: 'scale(1.15)', opacity: '0.7' },
        },
      },
      boxShadow: {
        'luxury': '0 20px 50px -15px rgba(42, 18, 52, 0.08), 0 0 30px -5px rgba(197, 160, 89, 0.08)',
        'luxury-hover': '0 30px 60px -15px rgba(42, 18, 52, 0.14), 0 0 40px -5px rgba(197, 160, 89, 0.16)',
      }
    },
  },
  plugins: [],
}
