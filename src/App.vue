<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
	<div class="grid justify-center">
		<header>
			<div class="wrapper">
				<nav>
					<RouterLink to="/">Home</RouterLink>
					<RouterLink to="/about">About</RouterLink>
				</nav>
			</div>
		</header>

		<RouterView />
	</div>
</template>
