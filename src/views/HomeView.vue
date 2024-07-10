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
			characters: {
				0: {
					id: 0,
					name: "Adventurer",
					color: "#180002",
					image: "adventurer.jpg",
					details: "",
				},
				1: {
					id: 1,
					name: "Eerica",
					color: "#ffb9be",
					image: "Eerica.jpg",
					details: "",
				},
			},
			characterPicked: 0,
		};
	},
	methods: {
		sendNewMessage() {
			this.messages.push({
				text: this.textInput,
				color: this.pickedCharacter.color,
				characterInfo: this.pickedCharacter,
			});
		},
	},
	computed: {
		pickedCharacter() {
			return this.characters[this.characterPicked];
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
				<div>
					<input
						type="radio"
						name="character"
						value="0"
						v-model="characterPicked"
					/><label for="">Adventurer</label>
					<input
						type="radio"
						name="character"
						value="1"
						v-model="characterPicked"
					/><label for="">Eerica</label>
				</div>
			</div>
			<br />
			<button class="bg-green-600 p-2" @click.prevent="sendNewMessage">
				Send Message
			</button>
		</form>
	</main>
</template>
