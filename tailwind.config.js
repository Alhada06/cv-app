/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:"jit",
  content: [
    "./src/**/*.{vue,js,ts,jsx,tsx",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors:{
        bgblue:'#041731',
        bgbluelighter:'#042552',  
      }

    },
  },
  plugins: [],
}
