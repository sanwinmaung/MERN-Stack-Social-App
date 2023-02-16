import express from 'express'
import { login } from '../controllers/auth.js'

const routers = express.Router()

routers.post('/login', login)

export default routers
