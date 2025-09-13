// corregir este archivo
import mongoose from "mongoose";

const connectionString = process.env.MONGO_URI || 'pailas'

export const db = mongoose.connect(connectionString, { dbName: 'ICESI'})
    .then((mongooseInstance) => {
        console.log("connected to mongo")
        return mongooseInstance
    }).catch((error)=> {
        console.log("🚀 ~ error:", error)
        throw error
    })
