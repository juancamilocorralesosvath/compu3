import axios from 'axios'

class Student {
    /* id: number;
    name: string; */

    constructor(public id: number, public name:string) {
        this.id = id;
        this.name = name;
    }

    
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
    
    async getPokemons(){
        const pokemons = axios.get('https://pokeapi.co/api/v2/pokemon/')
        return pokemons
    }
}

export const juan2web = new Student(2, "camilo")
/* ctr + alt + l para el turbo clg */
console.log("🚀 ~ juan2web:", juan2web.getName)
juan2web.joinClass()
const score:number = await juan2web.getScore()
console.log("🚀 ~ score:", score)
const pokemons = await juan2web.getPokemons()
