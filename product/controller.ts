import { productModel } from './model'
import { RequestHandler } from "express"
export const contact: RequestHandler = async (req, res) => {
    req.body.saled_quantity = 0
    const data = new productModel(req.body)
    await data.save()
    res.send({ data })
    console.log(data)
}

