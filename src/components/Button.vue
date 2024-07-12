<script>
import { defineComponent } from "vue";

export default defineComponent({
	name: "Button",
	props: {
		text: {
			required: true,
			type: String,
		},
	},
	methods: {
		clicked() {
			this.$emit("Clicked");
		},
	},
});
</script>

<template>
	<button class="bg-quarternary p-2 text-black" @click.prevent="clicked">
		{{ text }}
	</button>
</template>
