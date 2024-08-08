import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import process from 'process'
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV !== 'production' ? '/kcl-dreiklite.github.io/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@img': path.resolve(__dirname, './src/assets/images'),
      '@cp': path.resolve(__dirname, './src/components'),
      '@views': path.resolve(__dirname, './src/views'),
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  }
})
