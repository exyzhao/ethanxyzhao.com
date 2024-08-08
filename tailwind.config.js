/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica Neue', 'sans-serif'],
        serif: ['Rungli', 'serif'],
      },
      colors: {
        blue1: '#D3EAFF',
        blue2: '#7FC9FF',
        blue3: '#4CB4FF',
        yellow: '#FFC236',
      },
    },
  },
  plugins: [],
}

