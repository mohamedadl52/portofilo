const User = require('./User')
const Msg = require('./message')
const MsgGp = require('./messagesGroup')
exports.SendRequest =   async (data)=>{
    console.log(data)
    user = await User.updateOne({_id : data.myId} , {$push : {sentRequests : {name : data.userName,  id :data.userId}}})
    friend = await User.updateOne({_id : data.userId} , {$push : {friendRequests : {name : data.myName ,  id :data.myId }}})
    
}

exports.getFriends = async(id)=>{
  const user  =  await User.findById(id , {friends :  true })
    return user.friends
}


exports.sendMsg  =  async(data)=>{
msg = new Msg({
  chat :data.chat ,
  sender : data.sender , 
  content :  data.content , 
  timeStamp : Date.now()
})
 await msg.save()
}
exports.sendMsgGp  =  async(data)=>{
msg = new MsgGp(data)
 await msg.save()
}