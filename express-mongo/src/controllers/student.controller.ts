import { Request, Response } from "express";
import { StudentDocument } from '../models/Student.model';
import { studentService } from "../services/student.service";
import { message } from '../../../ts/2025-2-ts-basics/src/ts-basics/ts-basics';
import { securityService } from "../services";

class StudentController {

    async create(req: Request, res: Response){
        try {

            req.body.password = 
            const students = await studentService.create(req.body)
            res.json(students)
        } catch (error) {
            res.json(error)
        }
    }

    async getAll(req: Request, res: Response){
        try {
            const students:StudentDocument[] = await studentService.findAll()
            res.json(students)
        } catch (error) {
            console.log("🚀 ~ StudentController ~ getAll ~ error:", error)   
        }
    }

    async getByEmail(req: Request, res: Response){
        try {
            const students = await studentService.findByEmail(req.body.email)
            res.json(students)
        } catch (error) {
            console.log("🚀 ~ StudentController ~ getAll ~ error:", error)   
        }
    }

    async login(req: Request, res: Response){
        try {
            const studentExists: StudentDocument | null = await studentService.findByEmail(req.body.email)
            if(!studentExists) res.status(400).json({
                message: `student ${req.body.email} does not exists`
            })
            const currentPassword = studentExists?.password

            if (currentPassword) {
                const matches = await securityService.comparePassword(req.body.email, studentExists.password)
                if(!matches) res.status(400).json({message})
            }

        } catch (error) {
            res.status(500).json({
                message: `user or password incorrect`
            })
        }
    }
}

export const studentController = new StudentController()