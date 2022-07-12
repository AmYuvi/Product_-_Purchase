import express from 'express'
const router1 = express.Router()
import { contact1 } from './controller';
router1.post("/contact1", contact1)
export default router1