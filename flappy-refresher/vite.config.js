// vite.config.js
import { defineConfig } from 'vite'
export default defineConfig({
  base: '/flappy-refresher/', // <-- change to your repo name (or '/' if root)
  build: { outDir: 'dist' }   // default is dist (we'll upload dist)
})