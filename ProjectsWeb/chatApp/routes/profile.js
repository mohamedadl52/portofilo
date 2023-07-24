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
    if(!req.session.userid) return res.redirect('/login')  
    else if(!id) return res.redirect(`/profile/${req.session.userid}`)
    user = await User.findById(id)
    res.render('profile' , {'user': user  , myemail :req.session.useremail , myid : req.session.userid , myname :req.session.username , 'isOwner' : req.params.id ==  req.session.userid , 'isFriend' : user.friends.find(friend=> friend.id == req.session.userid ) , 'isRequestSent' : user.friendRequests.find(friend=> friend.id == req.session.userid ) , 'isRequestRecieved' : user.sentRequests.find(friend=> friend.id == req.session.userid ) , friends : req.session.friends});

   } catch(err){
    res.render('error')
   }
   
  });

  router.get('/', async function(req, res) {

   try {
    let id = req.params.id 
    if(!req.session.userid) return res.redirect('/login') 
    else if(!id) return res.redirect(`/profile/${req.session.userid}`)
    user = await User.findById(id)
    res.render('profile' , {'user': user ,  myemail :req.session.useremail , myid : req.session.userid , myname :req.session.username , myimage: req.session.userimage ,  req ,'isOwner' : req.params.id ==  req.session.userid , 'isFriend' : user.friends.find(friend=> friend.id == req.session.userid ) , 'isRequestSent' : user.friendRequests.find(friend=> friend.id == req.session.userid ) , 'isRequestRecieved' : user.sentRequests.find(friend=> friend.id == req.session.userid ) , friends : req.session.friends});
   } catch(err){
    res.render('error')
   }
   
});
7
router.post('/add' , async function (req,res){
   user = await User.updateOne({_id : req.session.userid} , {$push : {sentRequests : {name : req.body.userUsername,  id :req.body.userId}}})
   friend = await User.updateOne({_id : req.body.userId} ,  {$push : {friendRequests : {name : req.session.username ,  id :req.session.userid }}})
    res.redirect('/profile')
      
})

router.post('/cancel' , async function (req,res){
     await User.updateOne({_id : req.session.userid} , {$pull : {sentRequests : { id :req.body.userId}}})
     await User.updateOne({_id : req.body.userId} ,  {$pull : {friendRequests : { id :req.session.userid}}})
     res.redirect('/profile/'+req.body.userId)

})

router.post('/accept' , async function (req,res){
    let newchat =  new chat({
        users: [ req.session.userid ,req.body.userId]
    })
    chatDoc =  await newchat.save()
    await User.updateOne({_id : req.session.userid} , {$pull : {friendRequests : { id :req.body.userId  }}})
    await User.updateOne({_id : req.body.userId} ,  {$pull : {sentRequests : { id :req.session.userid }}})
    
    //   be friend
     await User.updateOne({_id : req.session.userid} ,  {$push : {friends : { name : req.body.userUsername , id :req.body.userId , chatId : chatDoc._id}}})
     await User.updateOne({_id : req.body.userId} ,  {$push : {friends : {name : req.session.username ,  id :req.session.userid , chatId : chatDoc._id }}})
    res.redirect('/profile')
})
router.post('/reject' , async function (req,res){
    user = await User.updateOne({_id : req.session.userid} , {$pull : {friendRequests : { id :req.body.userId}}})
    friend = await User.updateOne({_id : req.body.userId} ,  {$pull : {sentRequests : { id :req.session.userid}}})
    res.redirect('/profile')

})
router.post('/delete' , async function (req,res){
  await User.updateOne({_id : req.session.userid} ,  {$pull : {friends : {id :req.body.userId}}})
  await User.updateOne({_id : req.body.userId} ,  {$pull : {friends : { id :req.session.userid}}})
 res.redirect('/profile')
})

module.exports = router