require("dotenv").config() // load .env variables
var express = require('express');
var app = express();
const mongoose = require("mongoose") //import fresh mongoose object
const morgan = require("morgan") //import morgan
const {log} = require("mercedlogger") // import mercedlogger's log function
const cors = require("cors")
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
  
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const  friend = require('./models/socke')
const  group = require('./models/group')
io.onlineFriends =   {}
io.on('connection' , socket=>{
  console.log('new user conected')

socket.on('JoinNotificationRoom' ,  (data)=>{
    socket.join(data)
} )
socket.on('reqestpeerId' , (id)=>{
   socket.broadcast.to(id).emit('getPerrId')
})
socket.on('sendPerrId' , (data)=>{
  socket.broadcast.to(data.chatId).emit('recevedPeerId' , data.peerId)
})

socket.on('onlineFriends' , (id)=>{
      io.onlineFriends[id] =  true
    socket.on('disconnect' , ()=>{
      io.onlineFriends[id] = false
    })
})

socket.on('joinchat' , (data)=>{
   socket.join(data)
})
socket.on('joinGbchat' , (data)=>{
   socket.join(data)
   console.log(socket.rooms)
})
socket.on('sendMsg' , (data)=>{
  socket.join(data.chat)
  friend.sendMsg(data).then(res=>{
    io.to(data.chat).emit('receviedMsg' , data)
  }).catch(err=>{
   console.log(err) 
  })


})
socket.on('sendMsgGb' , (data)=>{
  friend.sendMsgGp(data).then(res=>{
    io.to(data.Gpchat).emit('receviedMsg' , data)
  }).catch(err=>{
   console.log(err) 
  })
})
socket.on('getOnlineFriends' , (id)=>{
       friend.getFriends(id).then((friends)=>{
       let onlineF =  friends.filter(friend=> io.onlineFriends[friend.id])
         socket.emit('onlineFriends' , onlineF)
      })
})
  socket.on('sendRequstFriend' ,  data  =>{
    friend.SendRequest(data).then(()=>{
        socket.emit('sentRequest')
    }).catch(err=>{
    console.log(err) 
   })
   io.to(data.userId).emit('sendToFriend' , data)

  })

})
const UserRouter = require("./routes/user") //import User Routes
const ProfileRouter = require("./routes/profile") //import User Routes
const MsgRouter = require("./routes/message") //import User Routes
const groupRouter = require("./routes/group") //import User Routes

app.use(express.static('Regna'));
// set the view engine to ejs
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));
app.use(cookieParser());
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json())
app.use(cors()) // add cors headers
app.use(morgan("tiny")) // log the request for debugging
app.set('view engine', 'ejs');
const {PORT = 3000} = process.env
// use res.render to load up an ejs view file
const {DATABASE_URL} = process.env 
// CONNECT TO MONGO
mongoose.connect = mongoose.connect(DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true})


// CONNECTION EVENTS
mongoose.connection
.on("open", () => log.green("DATABASE STATE", "Connection Open"))
.on("close", () => log.magenta("DATABASE STATE", "Connection Open"))
.on("error", (error) => log.red("DATABASE STATE", error))

app.get('/', async function(req, res) {
  myid = req.session.userid
  myname = req.session.username
  myimage = req.session.userimage 
  friends = req.session.friends
  friendRequests = req.session.friendRequests
  const groups = await group.find({}).populate('users');

    //  res.json(groups)
res.render('index' ,  {myid:myid ,myname:myname , myemail :req.session.useremail , myimage :  myimage , friends : friends  , friendRequests :  friendRequests , groups : groups });
});
app.get('/login', function(req, res) {
res.render('login');
});
app.get('/sign', function(req, res) {
res.render('signUp');
});


app.use("/profile", ProfileRouter) // send all "/user" requests to UserRouter for routing
app.use("/chat", MsgRouter) // send all "/user" requests to UserRouter for routing
app.use("/group", groupRouter) // send all "/user" requests to UserRouter for routing
app.use("/user", UserRouter) // send all "/user" requests to UserRouter for routing

server.listen(PORT, () => log.green("SERVER STATUS", `Listening on port ${PORT}`))