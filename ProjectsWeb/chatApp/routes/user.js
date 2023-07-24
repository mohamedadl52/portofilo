require("dotenv").config(); // load .env variables
const { Router } = require("express"); // import router from express
const User = require("../models/User"); // import user model
const bcrypt = require("bcryptjs"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens
const session = require("express-session");


const router = Router(); // create router to create route bundle

//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET = "secret" } = process.env;

// Signup route to create a new user
router.post("/signup", async (req, res) => {
    try {
    // hash the password
    req.body.password = await bcrypt.hash(req.body.password, 10);
    // create a new user
    const user = await User.create(req.body);
    // send new u ser as response

    res.redirect('/')
} catch (error) {
    res.status(400).json({ error });
   console.log(error)
}
});

// Login route to verify a user and get a token
router.post("/login", async (req, res) => {
  try {
    // check if the user exists
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      //check if password matches
      const result = await bcrypt.compare(req.body.password, user.password);
      if (result) {
        req.session.userid=String(user._id);
        req.session.username=user.username;
        req.session.userimage=user.image;
        req.session.useremail=user.email;
        req.session.friends=user.friends;
        req.session.friendRequests=user.friendRequests;
        // sign token and send it in response
        res.redirect('/');
      } else {
        res.status(400).json({ error: "password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "User doesn't exist" });
    }
  } catch (error) {
    res.status(400).json({ error });
  }
});

// get profile
router.get('/profile/:id', async function(req, res) {
 let id = req.params.id 
 if(!req.session.userid) return res.redirect('/')  
 user = await User.findById(id)
 res.render('profile' , {'user': user , 'isOwner' : req.params.id ==  req.session.userid._id , 'isFriend' : user.friends.find(friend=> friend.id == req.session.userid._id ) , 'isRequestSent' : user.friendRequests.find(friend=> friend.id == req.session.userid._id ) , 'isRequestRecieved' : user.sentRequests.find(friend=> friend.id == req.session.userid._id )});
});
router.get('/profile/', async function(req, res) {
  let id = req.session.userid
  if(!id) return res.redirect('/')  
  user = await User.findById(id)
  res.render('profile' , {'user':user , 'isOwner' : true});
});

  // logout
router.get('/logout',(req,res) => {
  req.session.destroy();
  res.redirect('/');
});
module.exports = router