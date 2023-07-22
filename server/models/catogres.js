const mongoose = require("mongoose");

const catogres = mongoose.model(
  "catogres",
  new mongoose.Schema({
    type : String

  })
);

module.exports = catogres;