import { StudentDocument, StudentModel, StudentInput } from "../models/Student.model";

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
            const studentExists: StudentDocument | null = await this.findByEmail(studentData.email)
            if(studentExists) return { message: `user ${studentData.email} already exists`}
            const createStudent: StudentDocument = await StudentModel.create(studentData)
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

      async updateStudent(email:string, student:StudentInput){
            try {
                // qu
                const updateStudent:StudentDocument | null = await StudentModel.findOneAndUpdate({email}, student, {returnOriginal:false})
                if (updateStudent) {
                    updateStudent.password = "";
                } 
                return updateStudent;
            } catch (error) {
                console.log("🚀 ~ StudentController ~ updateStudent ~ error:", error)
                throw error           
            }
        }
}

export const studentService = new StudentService()