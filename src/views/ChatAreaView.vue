<script>
import { defineComponent } from "vue";
import ChatArea from "@/components/ChatArea.vue";
import CharacterCreation from "@/components/CharacterCreation.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		ChatArea,
		CharacterCreation,
	},
});
</script>

<template>
	<main class="grid grid-cols-3 gap-10">
		<div>Scenes</div>
		<ChatArea />
		<CharacterCreation />
	</main>
</template>
