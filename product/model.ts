import mongooose from 'mongoose'
const Schema = new mongooose.Schema({
    product_name: {
        type: String
    },
    price: {
        type: Number
    },
    import_at: {
        type: Date,
        default: Date.now
    },
    imported_quantity: {
        type: Number
    },
    quantity_for_sales: {
        type: Number
    },
    saled_quantity: {
    type: Number
    },
    status_histories: [
        {
            product_name: {
                type: String
            },
            price: {
                type: Number
            },
            status: {
                type: String,
                enum: ["pending", "verified", "delivered"],
                default: "delivered"
            },
            bought_quantity: {
                type: Number
            },
            before_buying: {
                type: Number
            },
            after_buying: {
                type: Number
            },
            delivered_at: {
                type: Date,
                default: Date.now
            }
        }
    ]
}, {
    timestamps: true
})
export const productModel = mongooose.model("product", Schema)
 

