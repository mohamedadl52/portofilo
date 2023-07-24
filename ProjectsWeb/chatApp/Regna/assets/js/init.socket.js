var socket = io();
let myId = document.getElementById('myId').value

socket.on('connect'  , ()=>{
    console.log('connected user')
    socket.emit('JoinNotificationRoom' ,   myId )
    socket.emit('onlineFriends' , myId)
    socket.emit('getOnlineFriends' , myId)
} )
socket.on('onlineFriends' , data=>{
   
    let friendDiv = document.getElementById('friendDiv')

    if(data.length == 0 ){
          friendDiv.innerHTML = `  <h5 class="alert alert-danger">no online friends</h5>`
    } else  {
        for (let friend of data) {
            friendDiv.innerHTML +=  `
           <h4 class="title mt-4 ">
             <h5 class="">${friend.name}</h5>
             <p class="description  ">  <a href="/chat/${friend.chatId}">start chat</a></p>
            </h4>
             `
          }
    }
    

})