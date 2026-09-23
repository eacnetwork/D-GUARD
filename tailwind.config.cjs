module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f7',
          100: '#ffe3f1',
          200: '#ffc8e3',
          300: '#ff9dce',
          400: '#ff69b6',
          500: '#ff4fac',
          600: '#f43196',
          700: '#cb227b',
          800: '#a71f68',
          900: '#881d5a'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255, 105, 180, 0.2), 0 20px 60px rgba(255, 105, 180, 0.25)',
        soft: '0 20px 60px rgba(11, 12, 30, 0.35)'
      }
    }
  },
  plugins: []
};
