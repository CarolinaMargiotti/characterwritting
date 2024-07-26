<script>
import { defineComponent } from "vue";
import { addCharacter } from "@/util/Characters";
import Button from "@/components/Button.vue";

export default defineComponent({
	name: "CharacterCreation",
	components: {
		Button,
	},
	data() {
		return {
			characterName: "",
			characterColor: "#000",
			characterImage: null,
		};
	},
	methods: {
		createCharacter() {
			addCharacter({
				name: this.characterName,
				color: this.characterColor,
				age: 23,
				image: this.characterImage,
			});
			location.reload();
		},
		handleImageUpload(event) {
			const file = event.target.files[0];
			this.characterImage = file;
		},
	},
});
</script>

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
			<Button text="Create Character" @clicked="createCharacter" />
		</form>
	</div>
</template>
