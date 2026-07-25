import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('react-dom') || id.includes('react-router') || id.includes('/react/') || id.includes('scheduler')) {
            return 'vendor-react';
          }
          if (id.includes('framer-motion') || id.includes('motion-dom') || id.includes('motion-utils')) {
            return 'vendor-motion';
          }
          if (id.includes('@sanity') || id.includes('rxjs') || id.includes('@portabletext')) {
            return 'vendor-sanity';
          }
          if (id.includes('date-fns') || id.includes('react-datepicker')) {
            return 'vendor-date';
          }
          if (id.includes('country-state-city')) {
            return 'vendor-geo';
          }
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          return 'vendor';
        },
      },
    },
  },
})
