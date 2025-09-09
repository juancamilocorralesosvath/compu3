import { Request, Response } from "express";
import { StudentDocument } from '../models/Student.model';
import { studentService } from "../services/student.service";

class StudentController {
    getAll(req: Request, res: Response){
        try {
            // ... crear 
            
            const students:StudentDocument[] = await studentService.findAll()
        } catch (error) {
            console.log("🚀 ~ StudentController ~ getAll ~ error:", error)
            
        }
    }
}

export const studentController = new StudentController()