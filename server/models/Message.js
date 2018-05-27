const mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
  userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //refer to other user,
        unique: true,
        required: true
      },
  msgArray:[
    {
      content:{
        type:String,
        trim:true
      },
      type:{
        type:String,
        trim:true,
        default:'MSG',
        match:/MSG|REQ/,
        uppercase:true
      },
      value:{
        type:String,
        trim:true,
        default:'UNDECIDE',
        match:/ACCEPT|REJECT|UNDECIDE/,
        uppercase:true
      }
    }
  ]
});

messageSchema.statics.createMessage = function(userId){
  let Message = this;

  message = new Message({userId});
  return message.save().then(()=> message);
}

messageSchema.statics.sendReqMessage = async function(user, friend){
  let Message = this;

  //push one message to user and a request message to friend
  const msgUser = await Message.findOne({userId: user._id.toHexString()});
  msgUser.msgArray.push({content:`Friend's request to ${friend.name} sent successfully.`});
  await msgUser.save();

  const msgFriend = await Message.findOne({userId: friend._id.toHexString()});
  msgFriend.msgArray.push({content:`Friend's request received from ${user.name}.`,type:'REQ'})
  await msgFriend.save();
}

module.exports = mongoose.model('Message',messageSchema);
