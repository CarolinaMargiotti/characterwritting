<template>
	<div>
		Chat Area
		<div class="w-30ch">
			<MessagesView />
		</div>
		<form class="mt-10">
			<textarea
				name="messageText"
				id=""
				cols="30"
				rows="5"
				v-model="messageText"
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

import MessagesView from "./MessagesView.vue";
import Button from "./Button.vue";
import { useCharacterStore } from "@/stores/characterStore";
import { useMessageStore } from "@/stores/messagesStore";
import { storeToRefs } from "pinia";

const characterStore = useCharacterStore();
const {characters} = storeToRefs(characterStore);

const messageStore = useMessageStore();
const {messages} = storeToRefs(messageStore);

const messageText = ref("");
const selected = ref(0);

onMounted(async ()=>{
	await characterStore.getAllCharacters();
})

const sendNewMessage = () =>{
	messageStore.newMessage(messageText.value,selected.value)
}

const characterInfoById = (id)=>{
	return characterStore.getCharacterById(id);
}
</script>
