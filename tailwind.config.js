/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Luxury Deep Imperial Plum (Primary Lineage Accent)
        primary: {
          DEFAULT: '#2A1234',
          dark: '#1D0B24',
          soft: '#F4EEF7',
          50: '#FBF7FC',
          100: '#F4EEF7',
          600: '#5B2C6F',
          800: '#3D1B4B',
          900: '#2A1234',
        },
        plum: {
          DEFAULT: '#2A1234',
          dark: '#1D0B24',
          soft: '#F4EEF7',
          50: '#FBF7FC',
          100: '#F4EEF7',
          600: '#5B2C6F',
          800: '#3D1B4B',
          900: '#2A1234',
        },
        // Sacred Radiance Gold
        gold: {
          DEFAULT: '#C5A059',
          dark: '#9E7A31',
          light: '#DFC082',
          soft: '#FBF5E8',
          50: '#FDFBF7',
          100: '#FBF5E8',
          200: '#F4E7CC',
          400: '#DFC082',
          500: '#C5A059',
          600: '#9E7A31',
        },
        // Healing Sage (Heart Chakra & Health)
        sage: {
          DEFAULT: '#2D6A4F',
          dark: '#1B4332',
          light: '#E6F0EB',
          soft: '#E6F0EB',
          50: '#F4F8F6',
          100: '#E6F0EB',
          500: '#2D6A4F',
          600: '#1B4332',
        },
        // Backgrounds & Surfaces
        canvas: '#FAF8F5',     // Warm Cashmere Ivory
        surface: '#FFFFFF',
        // Text & Typography
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
          '50%': { transform: 'scale(1.08)', opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
}
