<template>
    <div ref="chatMessage" class="overflow-auto px-3 h-70vh">
        <CharacterMessage
            v-for="(message, index) in messages"
            class="mb-5"
            :key="index"
            :text="message.text"
            :color="characterInfoById(message.characterId).color"
            :characterInfo="characterInfoById(message.characterId)"
        />
        </div>
</template>
<script setup>
import { onUpdated,ref } from 'vue';

import { storeToRefs } from 'pinia';
import { useMessageStore } from '@/stores/messagesStore';
import { useCharacterStore } from "@/stores/characterStore";

import CharacterMessage from './CharacterMessage.vue';

const messagesStore = useMessageStore();
const characterStore = useCharacterStore();
const {messages} = storeToRefs(messagesStore)

const characterInfoById = (id)=>{
	return characterStore.getCharacterById(id);
}

const chatMessage = ref(null)
const scrollToBottom = () => {
    chatMessage.value.scrollTop = chatMessage.value.scrollHeight;
}

onUpdated(()=>{
    scrollToBottom();
})
</script>