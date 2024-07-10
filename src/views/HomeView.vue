<script>
import { defineComponent } from "vue";
import Message from "@/components/Message.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		Message,
	},
});
</script>

<template>
	<main>
		<Message color="#f2830d"></Message>
	</main>
</template>
