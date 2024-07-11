import { reactive } from "vue";

export const Characters = reactive({
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
});

let lastId = 1;

export function addCharacter(newCharacter) {
	lastId++;
	Characters[lastId] = {
		id: lastId,
		image: "default.jpg",
		...newCharacter,
	};
}

export function getCharactersList() {
	return Characters;
}
