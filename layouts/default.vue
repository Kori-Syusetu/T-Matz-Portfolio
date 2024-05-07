<template>
	<v-app>
		<v-app-bar>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
			<v-app-bar-title>Portfolio</v-app-bar-title>
		</v-app-bar>
		<v-navigation-drawer v-model="drawer">
			<v-list>
				<v-list-item link prepend-icon="mdi-home" href="/" title="Home"></v-list-item>
				<v-list-item link prepend-icon="mdi-apps" href="/works/" title="Works"></v-list-item>
				<v-list-item link prepend-icon="mdi-history" href="/history/" title="History"></v-list-item>
				<v-list-item link prepend-icon="mdi-link" href="/links" title="Links"></v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-container>
			<v-main>
				<slot/>
			</v-main>
			<v-divider/>
			<v-footer class="text-center text-blue-grey d-block">
				Copyright &copy; 2024 T Matz / &copy; 2018, 2024 ISnow Group
			</v-footer>
		</v-container>
	</v-app>
</template>

<script setup lang="ts">
const drawer = toRef(true);
</script>
