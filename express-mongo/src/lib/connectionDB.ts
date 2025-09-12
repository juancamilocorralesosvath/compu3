// corregir este archivo
import mongoose from "mongoose";

const connectionString = `mongodb://root:password@localhost:27017/ICESI`; // Correct protocol

export const db = mongoose.connect(connectionString).then(()=>{
    console.log("connected to mongo")
}).catch((error)=> {
    console.log("🚀 ~ error:", error)
})
