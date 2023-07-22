const Router = require('express').Router()
const OrderControll = require('../controller/order.js')


Router.post("/" , OrderControll.AddOrder )
Router.get("/" , OrderControll.getOrder )
Router.post("/status/:id" , OrderControll.status )


module.exports =  Router