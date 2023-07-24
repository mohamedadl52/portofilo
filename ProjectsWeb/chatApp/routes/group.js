require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("../models/User"); // import user model
const group = require("../models/group"); // import user model
const chat = require("../models/chat"); // import user model
const messagesGroup = require("../models/messagesGroup"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
const session = require("express-session");
const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
router.get('/:id', async (req, res)=> {
  
   try {
     let id = req.params.id 

    // let testgroup = new messagesGroup({
    //   sender:id ,
    //   content:'just for test',
    //   timeStamp:Date.now() ,
    //   Gpchat : id

    // }) 
    // await testgroup.save()
    if (! req.session.userid)  return res.redirect('/')
    groups = await messagesGroup.find({
      Gpchat : id
    }).populate({
      path:   'Gpchat sender'  , 
          populate :  {
          path :  'users' ,  
          model  :  'User'  , 
          select :  'username image'
      } ,
    }).populate('sender')
    if (groups.length == 0){
      groups = await  group.findById(id).populate('users')
   
      res.render('groupchat' , {group: groups,  myemail :req.session.useremail ,  myname : req.session.username ,
        myimage : req.session.userimage ,  groups , formdata :  groups.users.find(user => user.id != req.session.userid)})
      
    }else{
      groupDetails = await  group.findById(id).populate('users')
  
   res.render('groupchat' , {group: groupDetails ,  myemail :req.session.useremail ,   myname : req.session.username ,
    myimage : req.session.userimage ,  groups , formdata :  groups[0].Gpchat.users.find(user => user.id != req.session.userid)})
   
    }
  } catch(err){
    console.log(err)
    res.render('error')
   }
   
  });

  router.post('/add' , async(req,res)=>{
    const user = await group.create(req.body);
  console.log(req.body)
    res.redirect('/')

  })
  router.get('/' , async(req,res)=>{
    const groups = await group.find({}).populate({
      path :'users' , 
      select : 'username'
    });
  console.log(user)
    res.render('index' , {
          groups :  groups 
      })

  })

  router.post('/user/add' , async (req , res)=>{
    

  groups  = await group.updateOne({_id : req.body.groupId} ,  {$push : {users : req.session.userid }})
  console.log(groups)
  res.redirect('/')

  })

module.exports = router