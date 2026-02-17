module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'brand-start': '#3b82f6',
        'brand-end': '#7c3aed'
      },
      boxShadow: {
        'glow': '0 6px 20px rgba(124,58,237,0.18)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out forwards'
      }
    }
  },
  plugins: [],
}
