import { defineStore } from "pinia";

export const useMessageStore = defineStore("messagesStore", {
	state: () => ({
		_messages: [],
	}),
	getters: {
		messages: (state) => state._messages,
	},
	actions: {
		newMessage(text, characterId) {
			this._messages.push({
				text: text,
				characterId: characterId,
			});
		},
	},
});