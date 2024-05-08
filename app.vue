<template>
	<NuxtPwaManifest/>
	<NuxtLoadingIndicator/>
	<NuxtLayout>
		<NuxtPage/>
	</NuxtLayout>
</template>

<script setup lang="ts">
useServerHead({
	htmlAttrs: {
		lang: "ja"
	},
	titleTemplate: "%s - T.Matz Portfolio",
	link: [
		{
			rel: "icon",
			href: "/favicon.svg",
			sizes: "any",
			type: "image/svg+xml",
		},
		{
			rel: "icon",
			href: "/favicon.png",
			sizes: "64x64",
			type: "image/png",
		}
	]
})
useServerSeoMeta({
	ogType: "website",
	ogSiteName: "T.Matz Portfolio",
	ogLocale: "ja"
})
</script>
