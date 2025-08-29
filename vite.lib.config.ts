import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      include: ['lib/**/*', 'src/components/**/*', 'src/types/**/*', 'src/stores/**/*', 'src/utils/**/*'],
      exclude: ['src/main.ts', 'src/App.vue', 'src/views/**/*', 'examples/**/*'],
      rollupTypes: true
    })
  ],
  define: {
    'process.env.NODE_ENV': '"production"'
  },
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
