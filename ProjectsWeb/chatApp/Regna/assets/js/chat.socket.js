var socket = io();
let myId = document.getElementById('myId').value
const chatId  =  document.getElementById('chatId').value
const  Msg = document.getElementById('msg')
const  send = document.getElementById('sendMsg')
let myName = document.getElementById('myName').value
let myImage= document.getElementById('myImage').value
let formdata= document.getElementById('formdata').value
let videoCall= document.getElementById('videoCall')
socket.emit('joinchat' , chatId)

send.addEventListener('click' , (e)=>{
  e.preventDefault()

  socket.emit('sendMsg' , {
    chat:  chatId  , 
    content :  Msg.value , 
    sender : myId
  })
  Msg.value  = ''
})

socket.on('receviedMsg' , data=>{
  const Content =  document.getElementById('con')
   if(data.sender == myId){
    Content.innerHTML += 
    `
    <li class="d-flex justify-content-between mb-4">
    <img src="/assets/img/${myImage}" alt="avatar"
      class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
    <div class="card w-100">
    <div class="card-header d-flex justify-content-between p-3">
      <p class="fw-bold mb-0">${myName}</p>
      <p class="text-muted small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
    </div>
    <div class="card-body">
      <p class="mb-0">
      ${data.content}
      </p>
    </div>
</div>
    </li>
               
    `
   } else {
    Content.innerHTML += 
    `
    <li class="d-flex justify-content-between mb-4">
    <div class="card w-100">
    <div class="card-header d-flex justify-content-between p-3">
    <p class="fw-bold mb-0">${formdata}</p>
    <p class="text-muted small mb-0"><i class="far fa-clock"></i> 13 mins ago</p>
    </div>
    <div class="card-body">
    <p class="mb-0">
    ${data.content}
    </p>
    </div>
    </div>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar"
      class="rounded-circle d-flex align-self-start ms-3 shadow-1-strong" width="60">
    </li>
               
    `
   } 

})

var peer = new Peer();
// var conn = peer.connect('another-peers-id');
// on open will be launch when you successfully connect to PeerServer
// conn.on('open', function(){
//   // here you have conn.id
//   conn.send('hi!');
// });

let peerId  =  null 
peer.on('open' , (id)=>{
  console.log(id)
   peerId = id
})

videoCall.onclick =  ()=>{
  socket.emit('reqestpeerId'  , chatId)
}

socket.on('getPerrId' , ()=>{
    socket.emit('sendPerrId' , {
      chatId : chatId , 
      peerId : peerId
    })
})

socket.on('recevedPeerId' , (id)=>{
console.log(id)
navigator.mediaDevices.getUserMedia({video : true , audio : true }).then((stream)=>{
                  let call = peer.call(id,stream)
                  call.on('stream' , showvideocall)

}).catch(err=> console.log(err))
})

peer.on('call' ,  (call)=>{
  navigator.mediaDevices.getUserMedia({video : true , audio : true }).then((stream)=>{
     call.answer(stream)
    call.on('stream' , showvideocall)

}).catch(err=> console.log(err))
})

function showvideocall(stream){
  let video = document.createElement('video')
  video.srcObject = stream
  document.body.append(video)
  video.play()

}