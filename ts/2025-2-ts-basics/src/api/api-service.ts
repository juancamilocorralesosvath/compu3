import axios from "axios"
import type { PokeResponse } from "../interfaces/poke-response"

export class PokeService {

    url:string = 'https://pokeapi.co/api/v2/pokemon/'
    
    // es buena practica poner el tipo de dato que retorna mi metodo
   /*  async getPokemon(pokeId: number):Promise<PokeResponse>{
        const {data, status} = await axios.get<PokeResponse>(`${this.url}${pokeId}`)
        console.log("🚀 ~ PokeService ~ getPokemon ~ status:", status)
        
        return data
    } */

    async getPokemon<T>(pokeId: number):Promise<T> {
        const response = await fetch(`${this.url}${pokeId}`)
        const data:T = await response.json() 
        return data
    }
}