const mongoose = require('mongoose')


const OrderSchema = new mongoose.Schema({
    user : { type : mongoose.Types.ObjectId , ref : 'user' } ,
    products :[ { product : {type : mongoose.Types.ObjectId , ref : 'product' }, qyt : Number } ] , 
    timeStamp : {type : Date}, 
    status : String
})

const Order = mongoose.model("Order" , OrderSchema)

module.exports = Order