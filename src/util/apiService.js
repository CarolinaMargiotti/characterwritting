import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:3000/characterwritting",
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
		await apiClient.post("/character/create", characterData);
	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
};
