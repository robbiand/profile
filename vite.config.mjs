import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? '/' : '/profile/',
  plugins: [react()]
}))