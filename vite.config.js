import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project site
const base = '/the-digital/'

export default defineConfig({
    plugins: [react()],
    base,
    build: {
        outDir: 'dist',
    },
})
