// vite.config.js
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        cssInjectedByJsPlugin(),
    ],
    build: {
        cssCodeSplit: false,
        rollupOptions: {
            input: {
                app: './main.js',
            },
        },
    },
})

