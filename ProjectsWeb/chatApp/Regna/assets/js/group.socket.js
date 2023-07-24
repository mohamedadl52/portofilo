var socket = io();
let myId = document.getElementById('myId').value
const GbchatId  =  document.getElementById('GbchatId').value
const  Msg = document.getElementById('msg')
const  send = document.getElementById('sendMsg')
let myName = document.getElementById('myName').value
let myImage= document.getElementById('myImage').value
let formdata= document.getElementById('formdata').value

socket.on('connect'  , ()=>{
    socket.emit('joinGbchat' , GbchatId)
  
} )

send.addEventListener('click' , (e)=>{

  socket.emit('sendMsgGb' , {
    Gpchat:  GbchatId  , 
    content :  Msg.value , 
    sender : myId , 
    timeStamp :  Date.now()
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

