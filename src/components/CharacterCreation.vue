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
		};
	},
	methods: {
		createCharacter() {
			addCharacter({
				name: this.characterName,
				color: this.characterColor,
			});
		},
	},
});
</script>

<template>
	<div class="bg-secondary p-4 text-bold font-bold">
		<p class="text-tertiary">Criar personagem</p>
		<form class="m-2 flex flex-col">
			<label>Nome</label>
			<input type="text" v-model="characterName" />
			<br />
			<label>Cor</label>
			<input type="color" v-model="characterColor" />
			<br />
			<Button text="Create Character" @clicked="createCharacter" />
		</form>
	</div>
</template>
