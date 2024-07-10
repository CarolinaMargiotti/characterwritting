<script>
import { defineComponent } from "vue";
import Message from "@/components/Message.vue";
import CharacterMessage from "@/components/CharacterMessage.vue";

export default defineComponent({
	name: "HomeView",
	components: {
		Message,
		CharacterMessage,
	},
	data() {
		return {
			messages: [],
			textInput: "",
		};
	},
	methods: {
		sendNewMessage() {
			this.messages.push({ text: this.textInput, color: "#80609f" });
			console.log(this.messages);
		},
	},
});
</script>

<template>
	<main>
		<div class="w-30ch">
			<CharacterMessage
				class="mb-5"
				v-for="(message, index) in messages"
				:key="index"
				:text="message.text"
				:color="message.color"
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
			<button class="bg-green-600 p-2" @click.prevent="sendNewMessage">
				Send Message
			</button>
		</form>
	</main>
</template>
