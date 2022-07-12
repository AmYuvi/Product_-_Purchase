import mongoooose from 'mongoose';
const Schemaa = new mongoooose.Schema({
    product_name: {
        type: String
    },
    price: {
        type: Number
    },
    bought_at: {
        type: Date,
        default: Date.now
    },
    buying_quantity: {
        type: Number
    }
}, {
    timestamps: true
})
const purchaseModel = mongoooose.model("purchase", Schemaa)
export default purchaseModel

