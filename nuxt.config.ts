// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			meta: [
				{name: "theme-color", content: "#FFAFAF"},
			],
			link: [
				{rel: 'icon', href: `/favicon.ico`, sizes: "48x48"},
				{rel: 'apple-touch-icon', href: `/apple-touch-icon-180x180.png`},
			],
		},
	},
	modules: [
		'@vite-pwa/nuxt',
	],
	pwa: {
		registerType: "autoUpdate",
		manifest: {
			name: 'T Matz Portfolio',
			description: "ポートフォリオページです。",
			theme_color: "#FFAFAF",
			lang: "ja",
			short_name: "T.M. Portfolio",
			start_url: "/",
			display: "standalone",
			background_color: "#ffffff",
			icons: [
				{
					"src": "pwa-64x64.png",
					"sizes": "64x64",
					"type": "image/png"
				},
				{
					"src": "pwa-192x192.png",
					"sizes": "192x192",
					"type": "image/png"
				},
				{
					"src": "pwa-512x512.png",
					"sizes": "512x512",
					"type": "image/png"
				},
				{
					"src": "maskable-icon-512x512.png",
					"sizes": "512x512",
					"type": "image/png",
					"purpose": "maskable"
				},
			],
		},
		workbox: {
			navigateFallback: null,
		},
	},
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
})
