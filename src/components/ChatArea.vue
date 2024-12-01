<template>
	<div>
		Chat Area
		<div class="w-30ch">
			<CharacterMessage
				class="mb-5"
				v-for="(message, index) in messages"
				:key="index"
				:text="message.text"
				:color="characterInfoById(message.characterId).color"
				:characterInfo="characterInfoById(message.characterId)"
			></CharacterMessage>
		</div>
		<form class="mt-10">
			<textarea
				name="messageText"
				id=""
				cols="30"
				rows="5"
				v-model="textInput"
			></textarea>
			<br />
			<div>
				<select v-model="selected">
					<option v-for="(character,index) in characters" :key="index" :value="character.id">{{ character.name }}</option>
				</select>
			</div>
			<br />
			<Button text="Send Message" @clicked="sendNewMessage" />
		</form>
	</div>
</template>
<script setup>
import { onMounted, ref } from "vue";

import CharacterMessage from "@/components/CharacterMessage.vue";
import Button from "./Button.vue";
import { useCharacterStore } from "@/stores/characterStore";
import { useMessageStore } from "@/stores/messagesStore";
import { storeToRefs } from "pinia";

const characterStore = useCharacterStore();
const {characters} = storeToRefs(characterStore);

const messageStore = useMessageStore();
const {messages} = storeToRefs(messageStore);

const textInput = ref("");
const selected = ref(0);

onMounted(async ()=>{
	await characterStore.getAllCharacters();
})

const sendNewMessage = () =>{
	messageStore.newMessage(textInput.value,selected.value)
}

const characterInfoById = (id)=>{
	return characters.value[id];
}
</script>
