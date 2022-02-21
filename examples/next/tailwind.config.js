module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@notion-renderer/react/**/*.{mjs,js,tsx, ts}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
