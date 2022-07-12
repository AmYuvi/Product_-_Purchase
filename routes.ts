import express from 'express'
import productrouter from './product/router'
import purchaserouter from './purchase/router'
const router = express.Router()
router.use('/:entity(product)', productrouter)
router.use('/:entity(purchase)', purchaserouter)
export default router 