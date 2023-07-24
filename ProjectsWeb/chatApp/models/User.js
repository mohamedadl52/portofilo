const {Schema, model} = require("mongoose") // import Schema & model

// User Schema
const UserSchema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true} , 
    email: {type: String, required: true} , 
    image: {type: String, default: 'user.png'} , 
    isOnline: {type: Boolean, default: false} , 
    friends :  {
        type : [{name  : String  ,  image : String , id : String , chatId : String }] ,
        default  :   []
    },
    friendRequests :  {
        type : [{name  : String  ,   id : String}] ,
        default  :   []
    },
    sentRequests :  { 
        type : [{name  : String  ,   id : String}] ,
        default  :   []
    },
})




// User model
const User = model("User", UserSchema)

module.exports = User