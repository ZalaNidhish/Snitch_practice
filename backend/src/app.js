import express from 'express'
import cors from 'cors'
import authRouter from './routers/auth.routes.js'
import cookieParser from 'cookie-parser'
export const app = express()


app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/auth', authRouter)

app.get('/', (req, res)=>{
    res.send("Backend running ... ")
})
