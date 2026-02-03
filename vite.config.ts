import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' for custom domain (imjustbored.com). Use '/I-m-just-bored/' if serving from github.io only.
  base: '/',
})
