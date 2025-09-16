import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

export const auth = async(req:Request, res:Response, next: NextFunction) => {
    try {
        let token = req.header('Authorization')
        if (!token) {
            res.status(401).json({message: `unauthorized`})
        }
        token = token.replace('Bearer ', '')
        const decoded = jwt.verify(token, 'secret')
        req.body.user = decoded
        next()
    } catch (error) {
        console.log("🚀 ~ auth ~ error:", error)
        res.status(403).json(error)
    }
}

export const authorizeRoles = () => {}