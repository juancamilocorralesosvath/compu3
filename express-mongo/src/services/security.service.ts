import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

class SecurityService{
    
    async encryptPassword(password:string){
        return await bcrypt.hash(password, 10)
    }

    // pregunta: pero que pasa si el usuario no esta activo?
    async generateToken(_id: mongoose.Types.ObjectId, email: string, role:string){
        // esto es un valor por defecto como respaldo, pero no entiendo para que la verdad
        // como si no fuera a tener el archivo .env
        const secret = process.env.JWT_SECRET || 'holamundo'
        return await jwt.sign({_id, email, role}, secret, {expiresIn: '1h'})
    }

    async comparePassword(incomingPassword: string, currentPassword:string){
        return await bcrypt.compare(incomingPassword, currentPassword)
    }
}

export const securityService = new SecurityService()