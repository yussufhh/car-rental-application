
import express, { json } from 'express'
import 'dotenv/config'
import cors from 'cors'
import connectDB from './configs/db.js'
import userRouter from './routes/userRoutes.js'

// Intialize express App

const app = express()
//Connect Database
await connectDB()
//Middleware
app.use(cors())
app.use(express.json())

//Create routes
app.get('/', (req, res) => res.send('The server is running'))
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))