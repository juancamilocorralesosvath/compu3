import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import mongoose from 'mongoose'
import { error } from 'console'
import router from './router/index.js'

const app = express()

app.use(cors({
    credentials: true
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)

server.listen(8080, () => {
    console.log(`server running on port 8080`)
})

const MONGO_URI = `mongodb://root:password@localhost:27017`

// por que hacer esto?
mongoose.Promise = Promise
mongoose.connect(MONGO_URI)
mongoose.connection.on('error', (error: Error) => {
    console.log(error)
})

app.use('/', router())