/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: 'var(--brand-primary)',
          accent: 'var(--brand-accent)',
          bg: 'var(--brand-bg)',
          surface: 'var(--brand-surface)',
          text: 'var(--brand-text)',
        },
      },
      borderRadius: { brand: 'var(--brand-radius)' },
      fontFamily: { brand: ['var(--brand-font)'] },
    },
  },
  plugins: [],
}