let myName = document.getElementById('myName').value
let myImage= document.getElementById('myImage').value
let userName = document.getElementById('userName').value
let userId = document.getElementById('userId').value
let userImage = document.getElementById('userImage').value
let addBtn  =  document.getElementById('addBtn')
let formId  =  document.getElementById('formId')
let CancelBtn  =  document.getElementById('CancelBtn')


// console.log('myid',myId)
// console.log('userID',userId)
// console.log(myName)
// console.log(myImage)

  addBtn.onclick =  e=>{
    console.log(e)
      e.preventDefault()
       socket.emit('sendRequstFriend' , {
          myId , myImage , myName  ,  userId  , userImage  , userName
       })
  }

socket.on('sendToFriend' , (data)=>{
    console.log('data from client side : ',data)
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert mt-4 alert-success alert-dismissible" role="alert">`,
      `   <div>You have a new  request from ${data.userName} </div>
           <p> <a class=" text-primary" href="/profile/${data.myId}">show more information</a></p>
          <button formaction="/profile/accept" class=" btn btn-success"> accept requset </button> 
          <button formaction="/profile/reject" class="btn btn-danger"> reject requset </button> 
      `,
      '   <button  type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)

})

socket.on('sentRequest' ,()=>{
    addBtn.remove()
    formId.innerHTML += `
    <span>you allready sent request</span>
    <button id="CancelBtn" formaction="/profile/cancel" type="submit" class="btn btn-danger btn-rounded btn-sm">
        cancel
    </button>
    `
} )


