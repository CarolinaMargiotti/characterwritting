<template>
	<div class="flex flex-col items-end gap-1">
		<div class="flex items-center gap-2">
			<div class="py-1 px-2 rounded col-start-2 h-fit" :style="blockStyle">
				{{ characterInfo.name }}
			</div>
			<img
			class="rounded-full h-14 w-fit"
			:src="imagePath"
			alt="Character image"
			/>
		</div>
		<Message
			:color="characterInfo.color"
			:text="text"
		></Message>
	</div>
</template>
<script setup>
import { defineProps,computed } from "vue";
import { getTextColorBasedOnContrast } from "@/util/TextColor";
import Message from "./Message.vue";

const {characterInfo,text} = defineProps({
	characterInfo: {},
	text: {
		type: String
	}
})

const textColor = computed(()=>{
	return getTextColorBasedOnContrast(characterInfo.color);
});

const blockStyle = computed(()=>{
	return {
		backgroundColor: characterInfo.color,
		color: textColor.value,
	};
})

const imagePath = computed(()=>{
	if (!characterInfo.image)
		return `src/assets/characterImages/default.jpg`;

	return characterInfo.image;
})
</script>
