<script>
import { defineComponent } from "vue";
import ChatArea from "@/components/ChatArea.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		ChatArea,
	},
});
</script>

<template>
	<main>
		<ChatArea />
	</main>
</template>
