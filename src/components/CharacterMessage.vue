<script>
import { defineComponent } from "vue";
import { getTextColorBasedOnContrast } from "@/util/TextColor";
import Message from "./Message.vue";
import CharacterMessage from "./CharacterMessage.vue";

export default defineComponent({
	name: "CharacterMessage",
	components: {
		Message,
	},
	props: {
		characterInfo: {},
		text: {
			type: String,
		},
	},
	computed: {
		textColor() {
			return getTextColorBasedOnContrast(this.characterInfo.color);
		},
		blockStyle() {
			return {
				backgroundColor: this.characterInfo.color,
				color: this.textColor,
			};
		},
		imagePath() {
			return `src/assets/characterImages/${this.characterInfo.id}.jpg`;
		},
	},
});
</script>
<template>
	<div class="grid grid-cols-3 items-center justify-items-end">
		<div class="py-1 px-2 rounded col-start-2 h-fit" :style="blockStyle">
			{{ characterInfo.name }}
		</div>
		<img
			class="rounded-full h-14 w-fit"
			:src="imagePath"
			alt="Character image"
		/>
		<Message
			class="col-span-3 mt-2"
			:color="characterInfo.color"
			:text="text"
		></Message>
	</div>
</template>
