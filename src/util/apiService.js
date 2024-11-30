import axios from "axios";

const apiClient = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

export const getAllCharacters = async () => {
	try {
		const response = await apiClient.get("/character/getall");
		return response.data;

	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
};

export const getCharacterById = async (id) => {
	try {
		const response = await apiClient.get(`/character/get`, { id });
		return response.data;
	} catch (error) {
		console.error(`Error fetching character with ID ${id}:`, error);
		throw error;
	}
};

export const addNewCharacter = async (characterData) => {
	try {
		const body = {
			name: characterData.name,
			image: characterData.image,
			age: characterData.age,
			color: characterData.color
		}

		await apiClient.post("/character/create", body);
	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
};
