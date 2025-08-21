import { juan, studentIds } from './objects/objects'
import './style.css'
//import {name, height} from './ts-basics/ts-basics'
//import { message } from './ts-basics/ts-basics'

/* 
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
    <h1>hello, ${name}, your height is: ${height}</h1>
  
` */

/* document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
    <h1>${message}</h1>
  
`  */

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 
    <h1>${studentIds}</h1>

    <h1>${JSON.stringify(juan)}</h1>
  
` 


