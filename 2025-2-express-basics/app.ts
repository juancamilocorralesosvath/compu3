import express, { Application } from 'express'
import router from './src/routes/api.route'

export class App {
    private app: Application;

    // por que asi?
    constructor(){
        this.app = express()
        this.settings()
        this.middlewares()
        this.routes()
    }

    // que es esto?
    middlewares(){
        this.app.use(express.urlencoded({extended:false}))
        this.app.use(express.json())
    }

    // ???
    settings(){
        this.app.set('port', process.env.PORT || 3000)
    }

    routes(){
        this.app.use('/', router)
    }

    async listen(){
        this.app.listen(this.app.get('port'))
        console.log(`server running on port: ${this.app.get('port')}`);
    }
}