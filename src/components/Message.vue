<script>
import { defineComponent } from "vue";
import { getTextColorBasedOnContrast } from "@/util/TextColor";

export default defineComponent({
	name: "Message",
	props: {
		color: {
			type: String,
		},
		text: {
			type: String,
		},
	},

	computed: {
		textColor() {
			return getTextColorBasedOnContrast(this.color);
		},
		blockStyle() {
			return {
				backgroundColor: this.color,
				color: this.textColor,
			};
		},
	},
});
</script>

<template>
	<p class="rounded p-3" :style="blockStyle">
		{{ text }}
	</p>
</template>

<style scoped></style>
