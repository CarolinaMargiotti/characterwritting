import { defineStore } from "pinia";
import { api } from "@/util/axios";

const MESSAGE_URL = "/message"
export const useMessageStore = defineStore("messagesStore", {
	state: () => ({
		_messages: [],
		_isLoading: false
	}),
	getters: {
		messages: (state) => state._messages,
		isLoading: (state) => state._isLoading
	},
	actions: {
		async newMessage(text, characterId) {
			this._isLoading= true;
			try {
				const body = {
					characterId: characterId,
					message: text,
					sceneId: 1,
					chapterId: 1,
					bookId: 1
				};

				await api.post(`${MESSAGE_URL}/create`,body)
				await this.getAllMessages();
			} catch (error) {
				console.log(error.message);
			} finally{
			this._isLoading = false;
			}
		},
		async getAllMessages(){
			this._isLoading = true;
			try {
				const body = {
					sceneId: 1,
					chapterId: 1,
					bookId: 1,
				};
				const queryString = new URLSearchParams(body).toString();

				const response = await api.get(
					`${MESSAGE_URL}/getall?${queryString}`
				);
				this._messages = response.data;
				return this.messages;
			} catch (error) {
				console.log(error.message);
			} finally {
				this._isLoading = false;
			}
		}
	},
});