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
			imageIsLoading: false
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
			if(file){
				const reader = new FileReader();
				this.imageIsLoading = true;

				reader.onload = function (e) {
					const base64String = e.target.result.split(',')[1];
					const fileType = file.type;

					this.characterImage = {
						base64: base64String,
						type: fileType,
					};

					this.imageIsLoading = false;
				}.bind(this);

				reader.onerror = function (e){
					this.imageIsLoading = false;
				}.bind(this);
				reader.readAsDataURL(file);
			}
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
			{{imageIsLoading}}
			<Button text="Create Character" @clicked="createCharacter" />
		</form>
	</div>
</template>
