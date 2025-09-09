import mongoose, { Collection } from "mongoose";

export interface Student{
    name:string;
    email: string;
    age: number;
    isActive: boolean;
}

// revisar aqui, el profesor lo cambio
export interface StudentDocument extends mongoose.Document{}


const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    isActive: {type: Boolean, required: true}
}, {collection: "students"})

export const StudentModel = mongoose.model<StudentDocument>("Student", studentSchema)