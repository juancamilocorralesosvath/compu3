export class Student {
    constructor(
        public readonly id: number,
        public readonly name:string
    ){}
}

export const juan = new Student(1, "juan")
