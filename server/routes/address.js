const Router = require('express').Router()
const AddressControle = require('../controller/address.js')


Router.post("/" , AddressControle.AddAddress )
Router.get("/" , AddressControle.getAddress )
Router.put("/:id" , AddressControle.updateAddress )
Router.delete("/:id" , AddressControle.deleteAddress )


module.exports =  Router