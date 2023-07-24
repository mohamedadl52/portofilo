const {Schema, model} = require("mongoose") // import Schema & model

// User Schema
const groupSchema = new Schema({
    name:String , 
    users: {type : [Schema.Types.ObjectId]  , ref: 'User'}, 
    image: {type: String, default: 'user.png'} 
})




// User model
const group = model("group", groupSchema)

module.exports = group