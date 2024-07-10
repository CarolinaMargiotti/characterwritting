<script>
import { defineComponent } from "vue";
import Message from "./Message.vue";

export default defineComponent({
	name: "CharacterMessage",
	components: {
		Message,
	},
	props: {
		characterInfo: {
			type: Object,
		},
	},
	data() {
		return {
			characterInfo: {
				name: "Agne",
				color: "#f2830d",
				image: "",
				details: "",
			},
		};
	},
});
</script>
<template>
	<div></div>
</template>
