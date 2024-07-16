import { reactive } from "vue";
import { getAllCharacters } from "@/util/apiService";

export const Characters = reactive({});

let lastId = 1;

export function addCharacter(newCharacter) {
	lastId++;
	Characters[lastId] = {
		id: lastId,
		image: "default.jpg",
		...newCharacter,
	};
}

export async function getCharactersList() {
	try {
		const charactersRetrieved = await getAllCharacters();
		return charactersRetrieved;
	} catch (error) {
		console.log(error.message);
	}
}
