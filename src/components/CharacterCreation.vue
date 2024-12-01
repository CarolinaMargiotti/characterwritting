<template>
	<div class="bg-secondary p-4 text-bold font-bold">
		<p class="text-tertiary">Create Character</p>
		<form class="m-2 flex flex-col">
			<label>Name</label>
			<input type="text" v-model="characterName" />
			<br />
			<label>Image</label>
			<input type="file" accept="image/*" @change="handleImageUpload" />
			<br />
			<label>Color</label>
			<input type="color" v-model="characterColor" />
			<br />
			{{imageIsLoading}}
			<Button text="Create Character" @clicked="createCharacter" />
		</form>
	</div>
</template>
<script setup>
import { ref } from "vue";
import { useCharacterStore } from "@/stores/characterStore";

import Button from "@/components/Button.vue";

const characterName = ref("");
const characterColor = ref("#000");
const characterImage = ref(null);
const imageIsLoading = ref(false);

const characterStore = useCharacterStore();
const createCharacter = async () => {
	await characterStore.addNewCharacter({
		name: characterName.value,
		color: characterColor.value,
		age: 23,
		image: characterImage.value,
	});
}

const handleImageUpload = (event) =>{
	const file = event.target.files[0];
	if(file){
		const reader = new FileReader();
		imageIsLoading.value = true;

		reader.onload = function (e) {
			const base64String = e.target.result.split(',')[1];
			const fileType = file.type;

			characterImage.value = {
				base64: base64String,
				type: fileType,
			};

			imageIsLoading.value = false;
		}.bind(this);

		reader.onerror = function (e){
			imageIsLoading.value = false;
		}.bind(this);
		reader.readAsDataURL(file);
	}
}
</script>

