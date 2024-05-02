<template>
	<header>
		<!-- Insert Header Menu -->
	</header>
	<main>
		<slot/>
	</main>
	<footer>
		<!-- Insert Footer Navigation -->
	</footer>
</template>

<script setup lang="ts">
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "assets/plex.less";
</script>
