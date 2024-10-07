/** @type {import('tailwindcss').Config} */
import { colors } from './utils/colors'
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors,
    container: {
      center: true,
      padding:'1rem',
    },
  },
  plugins: [],
}

