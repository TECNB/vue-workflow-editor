import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'Vue3WorkflowEditor',
      fileName: (format) => `vue3-workflow-editor.${format}.js`,
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    outDir: 'dist'
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
})
