import bcrypt from 'bcrypt'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'

class SecurityService{
    
    async encryptPassword(password:string){
        return await bcrypt.hash(password, 10)
    }

    async generateToken(_id: mongoose.Types.ObjectId, email: string, isActive:boolean){
        return await jwt.sign({_id, email, isActive}, 'secret', {expiresIn: '1h'})
    }

    async comparePassword(incomingPassword: string, currentPassword:string){
        return await bcrypt.compare(incomingPassword, currentPassword)
    }
}

export const securityService = new SecurityService()