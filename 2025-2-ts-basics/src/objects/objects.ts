export const studentIds:number[] = [1, 2, 3, 4, 5]

studentIds.push(+'6')



// una interfaz es un blueprit. la defnicniobn de una clase a partir de atributos abstractos
// en ts puedo tener atributos que no sean abstractos
// atributo abstracto vs no abs:
// los atributos abs estan obligados a implementarse, los
// que no son abs, no son obligatorios de implementar.
// esa tambien es la diferencia entre una interfaz y una clase
// abstracta

interface Student {
    id: number,
    name: string,
    age: number,
    // con el interrogante indicamos que es un atributo opcional
    isActive?: boolean
}

export const juan = {
    id: 1,
    name: "juan",
    age: 23,
   // isActive: true
}