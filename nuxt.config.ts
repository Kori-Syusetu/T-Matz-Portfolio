// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: true,
	},
	css: [
		'@mdi/font/css/materialdesignicons.css',
		'assets/plex.less'
	],
	build: {
		transpile: [
			"vuetify"
		]
	},
	ssr: true
})
