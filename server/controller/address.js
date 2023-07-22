const Addresses = require('../models/address') 

exports.AddAddress = (req , res )=>{
    console.log(req.body)
const Address  = new Addresses()
Address.fullname = req.body.fullname 
Address.country = "Sudan" 
Address.user = req.body.user
Address.street1 = req.body.street1
Address.street2 = req.body.street2
Address.city = req.body.city 
Address.zipcode = req.body.zipcode 
Address.phone = req.body.phone  

Address.save().then(res=>{
    res.json({
        Address : Address
    })
}).catch(err=>{
    res.json(err)
})


}
exports.getAddress = (req,res)=>{
  Addresses.find({}).then(response=>{
     res.json(response)
 }).catch(err=>{
     console.log(err)
 })
}
exports.updateAddress = (req,res)=>{

  Addresses.findOne({_id : req.params.id}).then(address=>{
     if(address.fullname) address.fullname = req.body.fullname 
     if(address.street1) address.street1 = req.body.street1 
     if(address.street2) address.street2 = req.body.street2 
     if(address.city) address.city = req.body.city 
     if(address.zipcode) address.zipcode = req.body.zipcode 
     if(address.phone) address.phone = req.body.phone

     address.save()
     console.log(address)
 }).catch(err=>{
     console.log(err)
 })
}
exports.deleteAddress = (req,res)=>{
    console.log(req.params.id)
   Addresses.findByIdAndDelete(req.params.id).then((respon)=>{
     res.json(respon)
 }).catch(err=>{
     console.log(err)
 })
}