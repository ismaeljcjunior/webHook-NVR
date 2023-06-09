import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import moment from 'moment'
dotenv.config()

moment.locale('pt-br')

const app = express()


app.listen(process.env.PORT, () => {
    console.log(`Server is runing on port ${process.env.PORT}`)
})
