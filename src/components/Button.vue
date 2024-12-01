<template>
	<button class="bg-quarternary p-2 text-black" @click.prevent="clicked">
		{{ text }}
	</button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const {text} = defineProps({
	text:{
		default:"",
		required: true
	}
})

const emits = defineEmits(['Clicked'])
const clicked = () => {
	emits("Clicked");
}
</script>

