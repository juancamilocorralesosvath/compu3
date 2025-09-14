import express from 'express'
import { createUser, getUserByEmail } from '../db/users.js'
import { authentication, random } from '../helpers/index.js'

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password} = req.body

        if(!email || !password){
            return res.status(400).json({
            message: `email or password is missing`
        })
        }
        // como en el esquema habiamos dicho select false, esto lo que hacemos es coger esos datos que no vienen por defecto en la consulta, porque los habiamos excluido.
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password')

        if(!user) return res.status(400).json({
            message: `user with email ${email} does not exists`
        })

        if (!user.authentication || !user.authentication.salt){
            return res.status(400).json({
                message: `invalid user authentication data`
            })
        }
        const expectedHash = authentication(user.authentication.salt, password)

        if (user.authentication.password !== expectedHash){
             return res.status(403).json({
                message: `invalid password`
            })
        }

        const salt = random()
        user.authentication.sessionToken = authentication(salt, user._id.toString())

        await user.save()

        res.cookie('JUAN-AUTH', user.authentication.sessionToken, { domain: 'localhost', path: '/'})

        return res.status(200).json(user).end()
    } catch (error) {
        console.log("🚀 ~ login ~ error:", error)
        throw error
    }
}
export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { email, password, username} = req.body

        if (!email || !password || !username) {
            return res.sendStatus(400)
        }

        const userExists = await getUserByEmail(email)

        if (userExists) res.status(400).json({
            message: `user already exists`
        })

        const salt = random()
        const user = await createUser({
            email, 
            username,
            authentication: {
                salt, 
                password: authentication(salt, password)
            }
        })

        return res.status(200).json(user).end()
    } catch (error) {
        console.log("🚀 ~ register ~ error:", error)
        throw error
    }
}