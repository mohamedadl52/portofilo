
const mongoose = require("mongoose");

const Owner = mongoose.model(
  "Owner",
  new mongoose.Schema({
    name : String,
    about: String,
    photo: String
  })
);

module.exports = Owner;
