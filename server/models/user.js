const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    urlimg : String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ] , 
    //  new modifiy

    Adress : {
 type : mongoose.Schema.Types.ObjectId , 
 ref : "Adress"

    }
  })
);

module.exports = User;
