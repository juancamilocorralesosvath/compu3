import { Express } from "express";
import express from 'express';
import { db } from "./lib/connectionDB.js";

const app:Express = express();

const port:number = 3000

app.use(express.urlencoded({extended: false}))

app.use(express.json())

db.then(()=> {
    app.listen(port, ()=>{
        console.log(`server running on port ${port}`)
    })
})