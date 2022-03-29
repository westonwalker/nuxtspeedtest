module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'solid-dark': '8px 8px 0 0 rgb(0 0 0 / 80%)',
        'solid-light': '8px 8px 0 0 rgb(0 0 0 / 20%)',
        'solid-dark-lg': '20px 20px 0 0 rgb(0 0 0 / 20%)',
      }
    }
  },
  plugins: [],
}
