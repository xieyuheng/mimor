import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ insertTypesEntry: true })],
  build: {
    sourcemap: true,
    outDir: 'lib',
    lib: {
      entry: './src/index.ts',
      name: 'index',
      fileName: 'index',
    },
  },
})
