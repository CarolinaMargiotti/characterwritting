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
		const formData = new FormData();
		formData.append("name", characterData.name);
		formData.append("age", characterData.age);
		formData.append("image", characterData.image);
		formData.append("color", characterData.color);

		await apiClient.post("/character/create", formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		});
	} catch (error) {
		console.error("Error fetching characters:", error);
		throw error;
	}
};
