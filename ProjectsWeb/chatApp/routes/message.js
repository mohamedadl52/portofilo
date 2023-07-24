require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("../models/User"); // import user model
const chat = require("../models/chat"); // import user model
const message = require("../models/message"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
const session = require("express-session");
const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
router.get('/:id', async function(req, res) {
  
   try {
    let id = req.params.id 
   
    if(!req.session.userid) return res.redirect('/')  
    messages = await message.find({chat : id}).populate({
        path:   'chat' , 
        model : 'chat'  , 
        populate :  {
            path :  'users' ,  
            model  :  'User'  , 
            select :  'username image'
        }
    }).populate('sender')
    // res.render('chat', {'user': user  , myid : req.session.userid , myname :req.session.username , 'isOwner' : req.params.id ==  req.session.userid , 'isFriend' : user.friends.find(friend=> friend.id == req.session.userid ) , 'isRequestSent' : user.friendRequests.find(friend=> friend.id == req.session.userid ) , 'isRequestRecieved' : user.sentRequests.find(friend=> friend.id == req.session.userid ) , friends : req.session.friends});
 
    if(messages.length == 0){
        
       messages = await chat.findById(id).populate({
        path : 'users' , 
        model :  'User'
       })
        res.render('chat' ,{
           myid  : req.session.userid ,
           messages  : messages  , 
           formdata :  messages.users.find(user => user.id != req.session.userid  ) , 
           chatId  :  id , 
           myname : req.session.username ,
           myimage : req.session.userimage ,
           myemail :req.session.useremail 
        });

   } else  {

       res.render('chat' ,{
           myid  : req.session.userid ,
           myemail :req.session.useremail ,
           messages  : messages  , 
           formdata :   messages[0].chat.users.find(user => user.id != req.session.userid  ) , 
           chatId  :  id , 
           myname : req.session.username ,
           myimage : req.session.userimage

       });
   }
//    res.json(user)
   } catch(err){
    console.log(err)
    res.render('error')
   }
   
  });


module.exports = router