import express from 'express'
import { deleteUserById, getUserById, getUsers } from '../db/users.js'

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers()

        return res.status(200).json(users)
    } catch (error) {
        console.log("🚀 ~ getAllUsers ~ error:", error)
        throw error
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params

        const deletedUser = await deleteUserById(id)
        return res.json(deletedUser)
    } catch (error) {
        console.log("🚀 ~ deleteUser ~ error:", error)
        throw error
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try {
        const { username } = req.body
        const { id } = req.params

        if(!username) return res.status(403).json({
            message: `user needs to be logged in`
        })

        const user = await getUserById(id)

        if(!user) return res.status(403).json({
            message: `user does not exists`
        })
        await user.save()

        return res.status(200).json({
            user
        }).end()
    } catch (error) {
        console.log("🚀 ~ updateUser ~ error:", error)
        throw error
    }
}