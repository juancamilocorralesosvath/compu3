import { StudentDocument, StudentModel } from "../models/Student.model";

class StudentService {
    async findAll():Promise<StudentDocument>{
        try {
            const students:StudentDocument[] = await StudentModel.find()
        } catch (error) {
            console.log("🚀 ~ StudentService ~ findAll ~ error:", error)
            
        }
    }
}

export const studentService = new StudentService()