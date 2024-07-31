import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'process'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV !== 'production' ? '/kcl-dreiklite.github.io/' : '/'
})
