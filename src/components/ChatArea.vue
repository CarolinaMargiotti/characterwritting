<template>
	<div class="w-96 flex-column  justify-items-center p-3">
		Chat Area
		<div class="w-full">
			<MessagesView />
		</div>
		<form class="mt-2 flex justify-center gap-1">
			<select ref="characterSelect" v-model="selected" class="p-2">
				<option v-for="(character,index) in characters" :key="index" :value="character.id">{{ character.name }}</option>
			</select>
			<textarea
				name="messageText"
				class="p-2"
				id=""
				cols="30"
				v-model="messageText"
			></textarea>
			<Button :disabled="isLoading" text="Send Message" @clicked="sendNewMessage" />
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
const {isLoading} = storeToRefs(messageStore);

const messageText = ref("");
const selected = ref(0);

const characterSelect = ref(null);
onMounted(async ()=>{
	await characterStore.getAllCharacters();
	await messageStore.getAllMessages();

	characterSelect.value.selectedIndex = 0;
})

const sendNewMessage = () =>{
	messageStore.newMessage(messageText.value,selected.value)
}
</script>
