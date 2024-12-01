<template>
	<div>
		Chat Area
		<div class="w-30ch">
			<CharacterMessage
				class="mb-5"
				v-for="(message, index) in messages"
				:key="index"
				:text="message.text"
				:color="message.color"
				:characterInfo="message.characterInfo"
			></CharacterMessage>
		</div>
		<form class="mt-10">
			<textarea
				name="messageText"
				id=""
				cols="30"
				rows="10"
				v-model="textInput"
			></textarea>
			<br />
			<div>
				<div v-for="(character, id) in characters" :key="id">
					<input
						type="radio"
						name="character"
						:value="id"
						v-model="characterPicked"
					/><label for="character">{{ character.name }}</label>
				</div>
			</div>
			<br />
			<Button text="Send Message" @clicked="sendNewMessage" />
		</form>
	</div>
</template>
<script setup>
import { onMounted, ref, computed } from "vue";

import CharacterMessage from "@/components/CharacterMessage.vue";
import { getCharactersList } from "@/util/Characters";
import Button from "./Button.vue";

const messages = ref([]);
const textInput = ref("");
const characters = ref({});
const characterPicked = ref(0);

onMounted(async ()=>{
	characters.value = await getCharactersList();
})

const sendNewMessage = () =>{
	messages.value.push({
		text: textInput.value,
		color: pickedCharacter.color,
		characterInfo: pickedCharacter,
	});
}

const pickedCharacter = computed(()=>{
	return characters.value[characterPicked.value];
})
</script>
