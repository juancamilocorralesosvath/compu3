import axios from 'axios'
import { PokeService } from '../api/api-service';

class Student {
    /* id: number;
    name: string; */

    constructor(public id: number, 
        public name:string, 
        // inversion de dependencias
        private pokeService: PokeService) {
        this.id = id;
        this.name = name;
    }
    // liskov: no puedo hacer que una clase dependa de la implementacion de otr.
    // debe ser sustituible. 

    
    public get getName() : string {
        return this.name
    }
    
    
    public set setName(name : string) {
        this.name = name;
    }
    
    /* 
        una promesa se ejecuta una sola vez.
        los observables pueden ejecutarse muchas veces. 

    */

    joinClass(){
        console.log(`
            the student ${this.name} is now in the classroom
        `);
    }

    
    async getScore() : Promise<number> {
        return 10
    }

    async getPokemonData(id: number) {
        return this.pokeService.getPokemon(id)
    }
    
    
}

/* ctr + alt + l para el turbo clg 
export const juan2web = new Student(2, "camilo")

console.log("🚀 ~ juan2web:", juan2web.getName)
juan2web.joinClass()
const score:number = await juan2web.getScore()
console.log("🚀 ~ score:", score)
// const pokemon = await juan2web.getPokemon(1)
console.log("🚀 ~ pokemon:", pokemon.data.name)
*/
const pokeServiceInstance = new PokeService()
export const gus = new Student(1, "gus", pokeServiceInstance)
const pokemon = await gus.getPokemonData(1)
console.log(pokemon.name);