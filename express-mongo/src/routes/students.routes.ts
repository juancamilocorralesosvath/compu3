import { Router } from "express";
import { studentController } from "../controllers/student.controller";

export const studentRouter = Router()

studentRouter.get('/', studentController.getAll)
studentRouter.post('/create', studentController.create)
studentRouter.post('/getByEmail', studentController.getByEmail)
studentRouter.post('/login', studentController.login)
