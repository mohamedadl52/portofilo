const { json } = require('body-parser');
const mongoose = require('mongoose');
const Product = require("../models/products")
const user = require("../models/user")
const faker = require("faker")
const cloudinary = require('cloudinary').v2
var axios = require("axios").default;

exports.getProduct = (req, res) =>{



// axios.get('https://ipwhois.app/json/').then(function (response) {
//   console.log(response.data);
// }).catch(function () {
// console.error("error");
// })

Product.find({})
  .populate("catogres")
  .populate({path : "user", model : user})
  .exec((err, user) => {
    res.json(user)
  console.log(err)
}) 
}

exports.getOneProduct = (req, res) =>{
  
const products = Product.findById(req.params.id , function (err, doc) {
  res.json(doc)
})
}
exports.create = (req, res) => {
  console.log(req.body)
    const ProductrData = new Product({
      title :     req.body.title,
      img_url :   req.file.filename,
      price :     req.body.price , 
      catogres : req.body.catogres , 
      description : req.body.description , 
      user :  req.body.user
    });
  
    // // Save Tutorial in the database
    
    ProductrData.save()
    .then(()=>{
      // cloudinary.config({ 
      //   cloud_name: 'dekh1kgki', 
      //   api_key: '719669252214716', 
      //   api_secret: '2kArDtlF1XjteFo3PX0YsnjVTCo'  ,
      //   secure: true
      // })
      console.log(req.file)
      // cloudinary.uploader.upload(req.file.path , {public_id : req.file.filename} , function(error, result) {console.log(result, error)});
    }).then(data => {
 
      return res.json(data)
      })
      .catch(err => {
       console.log(err)
      });

    
      // Create a Tutorial
};

exports.deleteOneProduct = (req,res)=>{

  return products = Product.findByIdAndDelete(req.params.id , function (err, doc) {
    res.json({'deleted' : true })
  })
}


exports.updateProduct = (req,res)=>{
return Product.findByIdAndUpdate(req.params.id, {
  price : req.body.price , 
  title : req.body.title }).then((product)=>{
  
    product.price = req.body.price 
    product.title = req.body.title  
    
    
    res.json(product)
  }).catch(err=>{
   res.json(err)
  })


}
