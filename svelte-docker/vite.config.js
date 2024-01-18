import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	host: true,
	port: 8000,
	watch: {
		usePolling: true
	}

})
