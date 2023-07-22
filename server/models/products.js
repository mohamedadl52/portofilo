const mongoose = require('mongoose')


const ProductEscema = new mongoose.Schema({
    title : String  , 
    img_url :String  , 
    price : Number , 
    qyt : {
        type : Number , 
        default : 1
    } , 
    creratedAt : {
        type : Date , 
        default : Date.now
    },
    user :  {type : mongoose.Schema.Types.ObjectId , ref : "user"}  ,
   catogres :  {type : mongoose.Schema.Types.ObjectId , ref : "catogres"} , 
   updatedAt : {
        type : Date , 
        default : Date.now
    } , 
    description : String , 
    rating : [Number] , 
    Owner : {type : mongoose.Schema.Types.ObjectId , ref : "Owner"}
})


const product = mongoose.model("product" , ProductEscema)

module.exports = product ;