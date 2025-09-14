import express from 'express'
import { get, identity, merge} from 'lodash'
import { getUserBySessionToken } from '../db/users.js'

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params
        const currentUserId = get(req, 'identity._id') as unknown as string

        if (!currentUserId){
             return res.status(403).json({
                message: `user does not exists`
            })
        }

        if (currentUserId.toString() !== id ){
             return res.status(403).json({
                message: `user is not owner, cannot delete another user`
            })
        }
        next()
    } catch (error) {
        console.log("🚀 ~ isOwner ~ error:", error)
        throw error
    }
}
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