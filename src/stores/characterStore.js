import { defineStore } from "pinia";
import { api } from "@/util/axios";

const CHARACTER_URL = "/character"
export const useCharacterStore = defineStore('characterStore',{
    state:()=>{
        _characters:{}
    },
    getters:{
        characters: (state)=>state._characters
    },
    actions:{
        async getAllCharacters(){
            try {
                const response = await api.get(`${CHARACTER_URL}/getall`);
                this._characters = response.data;
                return this.characters;
            } catch (error) {
                console.error("Error fetching characters:", error);
                throw error;
            }
        },
        getCharacterById(id){
            return this.characters[id];
        },
        async addNewCharacter(characterData){
            try {
                const body = {
                    name: characterData.name,
                    image: characterData.image,
                    age: characterData.age,
                    color: characterData.color
                }

                await api.post(`${CHARACTER_URL}/create`, body);
                await this.getAllCharacters();
            } catch (error) {
                console.error("Error fetching characters:", error);
                throw error;
            }
        }
    }
})