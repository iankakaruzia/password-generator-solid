import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { VitePluginFonts } from 'vite-plugin-fonts'

export default defineConfig({
  plugins: [
    solidPlugin(),
    VitePluginFonts({
      custom: {
        families: [
          {
            name: 'JetBrains Mono',
            local: 'JetBrains Mono',
            src: './src/assets/fonts/*.ttf'
          }
        ],
        display: 'auto'
      }
    })
  ],
  server: {
    port: 3000
  },
  build: {
    target: 'esnext'
  }
})
