const {Schema, model} = require("mongoose") // import Schema & model

// User Schema
const messagesGroupSchema = new Schema({
    content : String , 
    sender  :{type: Schema.Types.ObjectId  ,  ref:'User'}  ,
    timeStamp :  String ,  
    Gpchat :  {type: Schema.Types.ObjectId  ,  ref:'group'}
    
})




// User model
const messagesGroup = model("messagesGroup", messagesGroupSchema)

module.exports = messagesGroup