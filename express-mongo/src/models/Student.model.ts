import mongoose from "mongoose";

export interface StudentInput{
    name:string;
    email: string;
    age: number;
    isActive: boolean;
    password: string;
}

export interface StudentDocument extends StudentInput,mongoose.Document{}


const studentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    age: {type: Number, required: true},
    isActive: {type: Boolean, required: true},
    password: {type: String, required: true}
}, {collection: "Students"})

export const StudentModel = mongoose.model<StudentDocument>("Student", studentSchema)