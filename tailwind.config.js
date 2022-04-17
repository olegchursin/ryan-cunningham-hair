module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {},
    container: {
      center: true
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['light', 'night'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: '',
    darkTheme: 'night'
  }
};
