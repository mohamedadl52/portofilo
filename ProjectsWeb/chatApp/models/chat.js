const {Schema, model} = require("mongoose") // import Schema & model

// User Schema
const chatSchema = new Schema({
    users:[Schema.Types.ObjectId]
    
})




// User model
const chat = model("chat", chatSchema)

module.exports = chat