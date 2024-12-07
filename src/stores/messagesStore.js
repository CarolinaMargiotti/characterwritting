import { defineStore } from "pinia";
import { api } from "@/util/axios";

const MESSAGE_URL = "/message"
export const useMessageStore = defineStore("messagesStore", {
	state: () => ({
		_messages: [],
	}),
	getters: {
		messages: (state) => state._messages,
	},
	actions: {
		async newMessage(text, characterId) {
			try {
				const body = {
					characterId: characterId,
					message: text,
					sceneId: 1,
					chapterId: 1,
					bookId: 1
				};

				await api.post(`${MESSAGE_URL}/create`,body)

				this._messages.push(body);
			} catch (error) {
				console.log(error.message);

			}
		},
		async getAllMessages(){
			try {
				const body = {
					sceneId: 1,
					chapterId: 1,
					bookId: 1,
				};
				const queryString = new URLSearchParams(body).toString();

				const response = await api.get(`${MESSAGE_URL}/getall?${queryString}`,);
				this._messages = response.data;
				return this.messages;
			} catch (error) {
				console.log(error.message);
			}
		}
	},
});