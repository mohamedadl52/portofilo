const mongoose = require('mongoose');
const Catogres = require("../models/catogres")


exports.addCatogress  =  async(req , res)=>{
  console.log(req.body)
 const catogress = new Catogres()
 catogress.type = req.body.type 
 await catogress.save().then((user)=>{
 res.json("catogress added")
    }).catch((err)=>{
     console.log(err)
    })

}


exports.getCatogress  =  async(req , res)=>{
 
 const catogress = await Catogres.find().then((Catogress)=>{
 res.json({Catogress})
    }).catch((err)=>{
     console.log(err)
    })
}

exports.deleteCatogress  =  async(req , res)=>{
  console.log(req.params.id)
  console.log(req.params.id)
 const catogress = await Catogres.findByIdAndDelete(req.params.id).then((Catogress)=>{
     console.log(req.param.id)
 res.json('deleted scssesfull')
    }).catch((err)=>{
     console.log(err)
    })
}