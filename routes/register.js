import express from 'express'
export const auth = express.Router()
import { registerUser } from '../controller/registerUser'

auth.post('/register', registerUser)
