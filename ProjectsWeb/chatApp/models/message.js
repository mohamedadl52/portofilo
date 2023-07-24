const {Schema, model} = require("mongoose") // import Schema & model

// User Schema
const mesageSchema = new Schema({
    content : String , 
    sender  : {type: Schema.Types.ObjectId  ,  ref:'User'}  ,
    timeStamp :  String ,  
    chat :  Schema.Types.ObjectId 
    
})




// User model
const message = model("message", mesageSchema)

module.exports = message