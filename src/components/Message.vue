<template>
	<p class="rounded px-3 py-1 w-full break-words" :style="blockStyle">
		{{ text }}
	</p>
</template>
<script setup>
import { getTextColorBasedOnContrast } from "@/util/TextColor";
import {defineProps,computed} from 'vue'

const {color, text} = defineProps({
	color:{
		type: String
	},
	text:{
		type: String
	}
})

const textColor = computed(()=>{
	return getTextColorBasedOnContrast(color);
})

const blockStyle = computed(()=>{
	return {
		backgroundColor: color,
		color: textColor.value,
	};
})
</script>
<style scoped></style>
