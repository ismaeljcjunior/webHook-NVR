import { Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import axios from 'axios'
import moment from 'moment'
import { PrismaClient } from '@prisma/client'

moment.locale('pt-br')

const prisma = new PrismaClient()
const date = moment()

export const getEvent = async (req: Request, res: Response) => {
    try {
        const data = req.body
        console.log(data)


        const user = await prisma.event.create({
            data: {
                data
            },
        })

        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({ error: 'Internal Server Error' })
    }
}
