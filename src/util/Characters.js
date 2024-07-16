import { getAllCharacters, addNewCharacter } from "@/util/apiService";

export async function addCharacter(newCharacter) {
	try {
		await addNewCharacter(newCharacter);
	} catch (error) {
		console.log(error.message);
	}
}

export async function getCharactersList() {
	try {
		const charactersRetrieved = await getAllCharacters();
		return charactersRetrieved;
	} catch (error) {
		console.log(error.message);
	}
}
