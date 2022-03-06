module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'info-card': "url('https://i.imgur.com/1vLCv01.png')",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
}
