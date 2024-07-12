<script>
import { defineComponent } from "vue";

import Message from "@/components/Message.vue";
import CharacterMessage from "@/components/CharacterMessage.vue";
import { Characters } from "@/util/Characters";
import Button from "./Button.vue";

export default defineComponent({
	name: "ChatArea",
	components: {
		Message,
		CharacterMessage,
		Button,
	},
	data() {
		return {
			messages: [],
			textInput: "",
			characters: {},
			characterPicked: 0,
		};
	},
	mounted() {
		this.characters = Characters;
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
	<div>
		Chat Area
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
				<div v-for="(character, index) in characters" :key="index">
					<input
						type="radio"
						name="character"
						:value="character.id"
						v-model="characterPicked"
					/><label for="character">{{ character.name }}</label>
				</div>
			</div>
			<br />
			<Button text="Send Message" @clicked="sendNewMessage" />
		</form>
	</div>
</template>
