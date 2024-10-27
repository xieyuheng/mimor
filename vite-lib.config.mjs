import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    outDir: 'lib',
    lib: {
      entry: './src/main.ce.ts',
      name: 'index',
      fileName: 'index',
    },
  },
  plugins: [vue()],
})
