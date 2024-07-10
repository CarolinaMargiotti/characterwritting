<script>
import { defineComponent } from "vue";

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
			if (!this.color) return;

			console.log(this.color);
			// Convert hex to RGB
			const r = parseInt(this.color.slice(1, 3), 16);
			const g = parseInt(this.color.slice(3, 5), 16);
			const b = parseInt(this.color.slice(5, 7), 16);

			// Calculate luminance
			const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;

			// Return black for light backgrounds and white for dark backgrounds
			return luminance > 128 ? "black" : "white";
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
	<p class="w-30ch rounded p-3" :style="blockStyle">
		Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
	</p>
</template>

<style scoped></style>
