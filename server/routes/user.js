const Router = require("express").Router()
const app = require("express")()
const UserController = require("../controller/User")
const { verifySignUp , authJwt } = require("../middlewares")
const multer = require('multer')
const db = require("../models");
const User = db.user;
const Role = db.role;
const axios = require("axios");
Router.get('/' , UserController.getAllUsers )
Router.post("/signin" , UserController.signin)
Router.post("/signup" , [verifySignUp.checkDuplicateUsernameOrEmail , verifySignUp.checkRolesExisted] , UserController.signup)
Router.get('/all' , (req, res) => {
  res.status(200).send("Public Content.");
})
Router.get('/user' ,  
[authJwt.verifyToken] , (req, res) => {
  console.log()
  res.status(200).send(req.userId);
})
Router.get('/mod' , [authJwt.verifyToken, authJwt.isModerator], (req, res) => {
  console.log('mod Content')
  res.status(200).send("Moderator  Content.");
})
Router.get('/admin'  , [authJwt.verifyToken, authJwt.isAdmin ], (req, res) => {
  res.status(200).send("Admin Content.");
})




const DIR =__dirname + '../../../client/src/assets/uploads';

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName =  Date.now() + file.originalname.toLowerCase().split(' ').join('-')  ;
    cb(null, fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
    }
  }
});


Router.post('/stats', upload.single('file'), UserController.updataimg )
Router.post('/updateUser', UserController.updateUser )
Router.get('/gethost' , (req , res)=>{
  const url = "https://www.free.facebook.com";
  
  const getData = async url => {
            try {
              const response = await axios.get(url);
              res.send(response);
            } catch (error) {
              res.send(error);
            }
  };
  
  getData(url);
})  
module.exports = Router