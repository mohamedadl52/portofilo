const mongoose = require('mongoose')


const Address = new mongoose.Schema({
    fullname : String  , 
    street1 :String  , 
    street2 : String , 
    city : String ,  
   zipcode : Number,
   phone : Number ,
    user : {type : mongoose.Schema.Types.ObjectId , ref : 'user'} 
})


const Addresses = mongoose.model("Address" , Address)

module.exports = Addresses 