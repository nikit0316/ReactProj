/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,tsx,ts}'],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#DFDFDF',
        },
      },
    },
  },
  plugins: [],
}
