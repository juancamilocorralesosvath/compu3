import { Request, Response } from "express";
import { StudentDocument, StudentInput, StudentModel } from '../models/Student.model';
import { studentService } from "../services/student.service";
import { securityService } from "../services";
import { password } from 'bun';
import { Stat } from '../../../2025-2-ts-basics/src/interfaces/poke-response';

class StudentController {

    async create(req: Request, res: Response){
        try {

            req.body.password = await securityService.encryptPassword(req.body.password)
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
            res.json(error)
        }
    }

    async getByEmail(req: Request, res: Response){
        try {
            const students = await studentService.findByEmail(req.body.email)
            res.json(students)
        } catch (error) {
            console.log("🚀 ~ StudentController ~ getAll ~ error:", error)  
            res.json(error) 
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
                const matches = await securityService.comparePassword(req.body.password, studentExists.password)
                if(!matches) res.status(403).json({message: `wrong email or password`})
                const token = await securityService.generateToken(studentExists.id, studentExists.email, studentExists.isActive)
                res.status(200).json({
                    message: `login successful`,
                    token
                })
            }

        } catch (error) {
            res.status(500).json({
                message: `user or password incorrect`
            })
        }
    }

    async updateStudent(req:Request, res: Response){
        try {
            const email:string = req.params.email
            const student: StudentController | null = await studentService.updateStudent(email, req.body as StudentInput)
            if (student == null){
                res.status(400).json({message: `user ${email} not found`})
            }
            res.json(student)
        } catch (error) {
            console.log("🚀 ~ StudentController ~ updateStudent ~ error:", error)
            res.json(error)          
        }
    }
}

export const studentController = new StudentController()