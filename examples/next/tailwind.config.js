module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@notion-renderer/react/dist/index.{mjs,js}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
