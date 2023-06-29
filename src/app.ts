import express from 'express'
import cors from 'cors'
import userRouter from './routes/user.routes'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use('/users', userRouter)
export default app
