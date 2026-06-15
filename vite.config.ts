import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import prerender from '@prerenderer/rollup-plugin'
import PuppeteerRenderer from '@prerenderer/renderer-puppeteer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        '/', 
        '/blog', 
        '/blog/how-to-manage-pg-in-india',
        '/blog/tenant-verification-aadhaar',
        '/blog/automate-rent-collection',
        '/compare', 
        '/compare/stanza-living',
        '/compare/zolostays',
        '/compare/excel',
        '/solutions/rent-collection',
        '/solutions/tenant-verification',
        '/solutions/excel-alternative'
      ],
      renderer: new PuppeteerRenderer({
        inject: {},
        headless: true
      }),
    })
  ],
})
