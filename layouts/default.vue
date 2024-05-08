<template>
	<v-app>
		<v-app-bar>
			<v-app-bar-nav-icon @click.stop="drawer = !drawer" aria-label="ドロワーを開閉する"/>
			<v-app-bar-title>Portfolio</v-app-bar-title>
			<v-spacer/>
			<!--
			<v-menu>
				<template v-slot:activator="{ props }">
					<v-btn icon="1" v-bind="props">
						<v-icon v-if="isAutoDark && !isDark" color="amber-accent-4">theme-light-dark</v-icon>
						<v-icon v-else-if="isAutoDark" color="indigo-accent-1">theme-light-dark</v-icon>
						<v-icon v-else-if="!isDark" color="amber-accent-4">weather-sunny</v-icon>
						<v-icon v-else color="indigo-accent-1">weather-night</v-icon>
					</v-btn>
				</template>
				<v-list>
					<v-list-item>
						<template slot="prepend"></template>
						<template slot="append"></template>
						<v-list-item-title></v-list-item-title>
					</v-list-item>
				</v-list>
			</v-menu>
			-->
		</v-app-bar>
		<v-navigation-drawer v-model="drawer">
			<v-list>
				<v-list-item link prepend-icon="mdi-home" href="/" title="Home"></v-list-item>
				<!--
				ToDo: リンク先を作る
				<v-list-item link prepend-icon="mdi-apps" href="/works/" title="Works"></v-list-item>
				<v-list-item link prepend-icon="mdi-history" href="/history/" title="History"></v-list-item>
				-->
				<v-list-item link prepend-icon="mdi-link" href="/links" title="Links"></v-list-item>
			</v-list>
		</v-navigation-drawer>
		<v-container>
			<v-main>
				<slot/>
			</v-main>
			<v-divider/>
			<v-footer class="text-center text-blue-grey d-block">
				<p>
					Copyright &copy; 2024 T Matz / &copy; 2018, 2024 ISnow Group
				</p>
				<a href="https://misskey-hub.net/share/?text=T+Matz+Portfolio&url=https:%2F%2Fwww.t-matz.site%2F&visibility=public&localOnly=0&manualInstance=misskey.afy.jp">
					<img class="inline-image" src="/share2misskey.svg" alt="Share to Misskey">
				</a>
			</v-footer>
		</v-container>
	</v-app>
</template>

<script setup lang="ts">
import {useTheme} from "vuetify";

const drawer = toRef(false);
const isAutoDark = toRef(true);
const isDark = toRef(false);
const themeMode = toRef(1);
const theme = useTheme();

const checkTheme = () => {
	isDark.value = (theme.global.name.value == "dark")
}

const switchTheme = (colorType?: 1 | 2 | 3) => {
	if (colorType) {
		themeMode.value = colorType;
		switch (colorType) {
			case 1:
				//Auto
				if (process.client) {
					let isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
					theme.global.name.value = isDarkTheme ? "dark" : "light";
					isDark.value = isDarkTheme;
					isAutoDark.value = true;
				}
				break;
			case 2:
				//Light
				theme.global.name.value = "light";
				checkTheme()
				isAutoDark.value = false;
				break;
			case 3:
				//Dark
				theme.global.name.value = "dark";
				checkTheme()
				isAutoDark.value = false;
				break;
		}
	} else {
		if (process.client) {
			let isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
			theme.global.name.value = isDarkTheme ? "dark" : "light";
			isDark.value = isDarkTheme;
			isAutoDark.value = true;
			themeMode.value = 1
		}
	}
}
</script>
