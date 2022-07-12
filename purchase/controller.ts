import purchaseModel from "./model"
import { RequestHandler } from "express"
import { productModel } from '../product/model'
export const contact1: RequestHandler = async (req, res) => {
    const found = await productModel.findOne({ product_name: req.body.product_name, price: req.body.price })
    const data = new purchaseModel(req.body)
    if (found) {
        let lastcount = Number(found.quantity_for_sales)
        let total = Number(found.imported_quantity)
        if (lastcount >= req.body.buying_quantity) {
            found.quantity_for_sales = lastcount - (req.body.buying_quantity)
            found.saled_quantity = total - found.quantity_for_sales
            const obj = {
                product_name: req.body.product_name,
                price: req.body.price,
                before_buying: lastcount,
                bought_quantity: req.body.buying_quantity,
                after_buying: found.quantity_for_sales
            }
            found?.status_histories?.push(obj)
            await found.save()
            await data.save()
            res.send({ data })
            console.log(data)
        } else res.send("Insufficient Quantity")
    }else{
        res.send("No Product Found Please Select Correct Product")
    }
}