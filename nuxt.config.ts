// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: {
		enabled: false,
	},
	css: [
		'@mdi/font/css/materialdesignicons.css',
		'assets/plex.less',
		'assets/main.less'
	],
	build: {
		transpile: [
			"vuetify"
		]
	},
	ssr: true,
	app: {
		head: {
			script: [
				{
					src: "https://cdn.jsdelivr.net/npm/vue3-google-map"
				}
			]
		}
	}
})
