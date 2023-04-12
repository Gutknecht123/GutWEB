import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  base: '/GutWEB/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      find: './runtimeConfig',
      replacement: './runtimeConfig.browser',
    }
  },
  server: {
    port: process.env.PORT || 5173,
  },
  build: {

    /** If you set esmExternals to true, this plugins assumes that 
      all external dependencies are ES modules */
 
    commonjsOptions: {
       esmExternals: true
    },
    
  },
})
