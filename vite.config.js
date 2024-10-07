import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler' // or "modern", "legacy"
			}
		}
	},
	plugins: [react()],
	base: '/exercise-scheduler/'
})
