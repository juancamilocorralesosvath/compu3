import express from 'express'
import { getAllUsers } from '../controllers/users.js'
import { isAuthenticated } from '../middlewares/index.js'

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers)
}