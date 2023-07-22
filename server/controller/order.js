const Order = require('../models/order')
const user = require('../models/user')
const product = require('../models/products')



exports.AddOrder =  (req, res)=>{
           return new Order({
                      products : req.body.products.map(role =>  {
                        console.log(role)
                         return  {product : role.product , qyt : role.quantity }
                      }), 
                      user : req.body.owner  ,
                      timeStamp : Date.now() ,  
                      status : "pinding"     , 
             }).save().then((respone)=>{
                     res.json(respone)
             })
             
}

exports.getOrder = (req , res)=>{
//     order.find({})
//     .populate("user")
//     .exec((err, user) => {

//     res.json(user)
//     if (err)  res.json(err) 
//   })
Order.find({})
  .populate({path : 'user' , model : user })
  .populate({path : 'products.product' , model : product  , populate : {
    path: "user" , model : user 
  }})
  .exec((err, user) => {
    res.json(user)
  console.log(err)
})

}
exports.status = (req , res)=>{
//     order.find({})
//     .populate("user")
//     .exec((err, user) => {

//     res.json(user)
//     if (err)  res.json(err) 
//   })
Order.findByIdAndUpdate(req.params.id , {status : req.body.status})
  .populate({path : 'user' , model : user })
  .populate({path : 'products.product' , model : product  , populate : {
    path: "user" , model : user 
  }})
  .exec((err, user) => {
    console.log(req.body.status)
    console.log(user)
 if (err)  console.log(err)
})

}