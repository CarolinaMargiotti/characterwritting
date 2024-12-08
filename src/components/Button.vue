<template>
	<button class="bg-quarternary p-2 text-black text-sm" :disabled="disabled" @click.prevent="clicked">
		{{ text }}
	</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const {text, disabled} = defineProps({
	text:{
		default:"",
		required: true
	},
	disabled:{
		default: false
	}
})

const emits = defineEmits(['Clicked'])
const clicked = () => {
	emits("Clicked");
}
</script>

