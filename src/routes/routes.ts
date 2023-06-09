import bodyParser from 'body-parser'
import express, { Request, Response, Express } from 'express'
import moment from 'moment'
import cors from 'cors'
import { getEvent } from '../controller/serverController'


const app: Express = express()
const localDateTime = moment().format("YYYY-MM-DD HH:mm:ss")

app.use(bodyParser.json())
app.use(cors({ origin: true }))
app.use(express.json())


app.get('/', (req: Request, res: Response) => {
    res.send('SERVER WEBHOOK NVR 1.0')
})
app.post('/', getEvent)
