<template>
    <div class="bg-green-500 overflow-auto h-32">
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
</script>