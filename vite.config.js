import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 改回标准插件
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})