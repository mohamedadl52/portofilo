const express = require("express")
const app = express()
const cors = require("cors");
const mongoose = require("mongoose")
const db = require('./models');
const Role = db.role;
const dbConfig = require('./config/db.config')
const fs = require("fs");
const fetchh = require("node-fetch");

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

app.use(cors())
app.use(function (req, res, next) {
  
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token Origin, Content-Type, Accept"
    )
  
    next()
});
// mongoose.connect(`mongodb+srv://hamodyadl52:mhmd@cluster0.bj4sx.mongodb.net/test`, {
mongoose.connect(`mongodb://localhost:27017/test2`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Successfully connect to MongoDB");
  initial()
})
.catch(err => {
  console.error("Connection error", err);
  process.exit();
});
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin"
       }).save(err => {
        if (err) {
          console.log("error", err);
        }   
       console.log("added 'admin' to roles collection");
      });
    }
  });
}

app.post('/host', async (req, res)=>{
  //  console.log(req.body)

   
     const str = req.body.name
     const testst = str.toString().replaceAll("https://", "");
     const testtt = testst.replaceAll("http://", "");
     const testttt = testtt.replaceAll("www.", "").replaceAll('"', '').replaceAll('*.','').replaceAll(';','').replaceAll('\n',' ')
     const arr = testttt.split(" ");
     const SetA = new Set(arr);
     const lastArray = [...SetA].filter(x=>{
       return x.includes('.')
     });
     nuum = 1;
    console.log(lastArray)
     const teeee = async () => {
      await  lastArray.forEach(( element , index) => {
        fs.readFile("./server/testhost.txt", "utf-8", function (err, file) {
          if (err) console.log(err);
          if (file.includes(element)) {
            // console.log("not new")
            if(lastArray.length-1 == index){
              
              console.log('stooped')
       
            }
            console.log('http://'+element + ' ( not new )')
           } else {
             const test = async () => {
               await fetchh('https://' + element)
               .then((ress) => {
                 console.log(ress.headers.get('server'))
                 return ress;
               })
               .then((rest) =>{
                 console.log(
                   `${nuum} - ${rest.url} - ${rest.headers.get('server')} - gooooooooooooooooooood`
                   )
                   if(lastArray.length-1 == index){
                     
                     console.log('stooped')
              
                   }
                   fs.appendFile(
                      "vaildhost3.txt",
                      ` ${nuum} - ${rest.url} - ${rest.headers.get('server')} \n`
                       ,
                       function (err) {
                         if (err) {
                           console.log(err);
                         }
           
           
                       }
                     );
                     fs.appendFile(
                       "testhost.txt",
                       `${element} \n`,
                       function (err) {
                         if (err) {
                           console.log(err);
                         }
                     
                       } );
                       req.send(element)
                       nuum ++
                     
           
                 }
                 )
                 .catch((err) => {
                   fs.appendFile(
                     "testhost.txt",
                     `${element} \n`,
                     function (err) {
                       if (err) {
                         console.log(err);
                       }
                   
                     } );
                      // res.send(element)
                     nuum ++
   
                 })
             };
           test()
         
           }
         });
   
   
        
       })
   
       req.satus
   
     };
     await teeee()
   
       
   });
   
   

   


app.use('/api/product', require("./routes/product"))
app.use('/api/user', require("./routes/user"))
app.use('/api/catogress', require("./routes/catogress"))
app.use('/api/address', require("./routes/address"))
app.use('/api/order', require("./routes/order"))
if(process.env.NODE_ENV === 'production'){
app.use(express.static(__dirname +  '/public/'))
app.get(/.*/ , (req, res) => res.sendFile(__dirname + '/public/index.html') )

}

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
//   socket.on('msg' , (msg)=>{
//     console.log('msg : ' , msg)
//   })
//   socket.emit('msg2' , 'hello from server')
// });

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
