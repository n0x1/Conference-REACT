import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'), // Create an alias for the 'src' directory
    },
  },
  build: {
    outDir: 'dist', // Output directory for the built application
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), // Specify the entry point for your application
      },
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop();
          if (['png', 'jpg', 'jpeg', 'gif', 'svg'].includes(extType)) {
            return 'images/[name].[ext]';
          }
          return '[name].[ext]';
        },
      },
    },
  },
})
