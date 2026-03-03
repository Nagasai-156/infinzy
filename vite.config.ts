import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Raise warning threshold (bundle is large due to 3D libs — expected)
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        // Split heavy vendor libs into separate chunks for better caching
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
})
