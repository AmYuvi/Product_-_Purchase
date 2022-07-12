import express from 'express'
const router = express.Router()
import {contact} from './controller'
router.post("/contact",contact)
export default router 