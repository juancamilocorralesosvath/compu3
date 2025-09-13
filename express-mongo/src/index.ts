import { Express } from "express";
import express from 'express';
import { db } from "./lib/connectionDB";
import { config } from "dotenv";
import { studentRouter } from "./routes/students.routes.js";

// cargar variables de entorno desde .env
// lee el archivo .env y carga sus variables 
// en process.env
config()

const app:Express = express();

const port:number = 3000

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/students', studentRouter)

// por que no tuve que usar el archivo .yml dentro de este proyecto?
db.then(()=> {
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`)
    })
}).catch((error) => {
    console.log("🚀 ~ db error:", error)
    process.exit(1)
})