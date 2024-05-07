<template>
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
})
useServerSeoMeta({
	ogType: "website",
	ogSiteName: "T.Matz Portfolio",
	ogLocale: "ja"
})
</script>
