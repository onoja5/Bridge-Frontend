import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true, // Essential for client-side routing
    port: 5173, // Default port, can customize if needed
    open: true // Automatically open browser on dev server start
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // Path alias for imports
    }
  },
  optimizeDeps: {
    exclude: ['lucide-react'], // Optimization exclusion
    include: ['react', 'react-dom'] // Explicit dependencies to include
  },
  build: {
    outDir: 'dist', // Production build directory
    assetsDir: 'assets', // Assets directory
    sourcemap: true, // Generate source maps
    minify: 'terser', // Minification method
    chunkSizeWarningLimit: 1600 // Adjust chunk size warning limit
  },
  preview: {
    port: 4173 // Preview server port
  }
});