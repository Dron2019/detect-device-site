// export default {
//     base: '/detect-touch/',

// }
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

export default defineConfig({
    base: '/detect-touch/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                about: resolve(__dirname, 'about.html'),
            },
        },
    },
})