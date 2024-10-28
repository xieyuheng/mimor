import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), nodePolyfills(), dts({ insertTypesEntry: true })],
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
