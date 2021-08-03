import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePWA } from 'vite-plugin-pwa'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VitePWA({
      manifest: {
        "short_name": "React App",
        "name": "Create React App Sample",
        "icons": [
          {
            "src": "assets/favicon.ico",
            "sizes": "64x64 32x32 24x24 16x16",
            "type": "image/x-icon"
          },
          {
            "src": "assets/logo192.png",
            "type": "image/png",
            "sizes": "192x192"
          },
          {
            "src": "assets/logo512.png",
            "type": "image/png",
            "sizes": "512x512"
          }
        ],
        "start_url": ".",
        "display": "standalone",
        "theme_color": "#000000",
        "background_color": "#ffffff"
      },
      workbox: {
        // workbox options for generateSW
      }
    }),
    reactRefresh()
  ]
})
