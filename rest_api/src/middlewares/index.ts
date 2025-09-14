import express from 'express'
import { get, identity, merge} from 'lodash'
import { getUserBySessionToken } from '../db/users.js'

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['JUAN-AUTH']

        if (!sessionToken) return res.status(403).json({
                message: `user needs to be logged in`
            })
        const userExists = await getUserBySessionToken(sessionToken)

        if (!userExists) {
            return res.status(403).json({
                message: `user does not exists`
            })
        }
        // para que es esto?
        merge(req, { identity: userExists})
        return next()
    } catch (error) {
        console.log("🚀 ~ isAuthenticated ~ error:", error)
        return res.sendStatus(400)
    }
}