import express from 'express'
import { login } from '../controllers/auth'

const routers = express.routers()

routers.post('/login', login)

export default routers
