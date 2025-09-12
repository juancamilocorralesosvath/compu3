import { StudentDocument, StudentModel } from "../models/Student.model";

class StudentService {
    async findAll():Promise<StudentDocument[]>{
        try {
            const students:StudentDocument[] = await StudentModel.find()
            return students
        } catch (error) {
            console.log("🚀 ~ StudentService ~ findAll ~ error:", error)
            throw error
        }
    }

    async create(studentData:StudentDocument){
        try {
            const createStudent:StudentDocument = await StudentModel.create(studentData)
            return createStudent
        } catch (error) {
            throw error
        }
    }

    async findByEmail(email:string){
        try {
            const students = await StudentModel.findOne({email})
            return students
        } catch (error) {
            console.log("🚀 ~ StudentService ~ findAll ~ error:", error)
            throw error
        }
    }
}

export const studentService = new StudentService()