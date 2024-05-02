<template>
	<i :class="'bi bi-' + iconName + additionalClass"></i>
</template>

<script setup lang="ts">
const props = defineProps<{
	class?: string | string[],
	icon?: string,
}>();

const additionalClass = toRef("");
const iconName = toRef("");

if (props.class) {
	if (typeof props.class == "string") {
		additionalClass.value = ` ${props.class}`;
	} else {
		additionalClass.value = "";
		for (const addClass of props.class) {
			additionalClass.value += ` ${addClass}`;
		}
	}
}

if (props.icon) {
	iconName.value = props.icon;
} else {
	iconName.value = "";
}
</script>
