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
      created:{
        type:Date,
        default:Date.now
      },
      status:{
        type:String,
        trim:true,
        default:'NEW',
        match:/NEW|SENT|READ/,
        uppercase: true
      },
      value:{
        type:String,
        trim:true,
        default:'UNDECIDE',
        match:/ACCEPT|REJECT|UNDECIDE/,
        uppercase:true
      },
      from:{
        type:mongoose.Schema.Types.Mixed,
        default:'SERVER'
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
  msgFriend.msgArray.push({content:`Friend's request received from ${user.name}.`,type:'REQ',from: {email:user.email, name:user.name}});
  await msgFriend.save();
}

messageSchema.statics.sendAcceptMessage = async function(user, friend){
  let Message = this;

  //update this user's request message value to ACCEPT
  const updatedMessages = await Message.findOneAndUpdate(
    {userId: user._id.toHexString()},
    {
      $set:{
        "msgArray.$[element].value": 'ACCEPT'
      }
    },
    {
      "new": true,
      "arrayFilters": [ { "element.value": 'UNDECIDE',"element.from": {"email":friend.email,"name":friend.name}} ]
    }
  );

  await Message.findOneAndUpdate(
    {userId: friend._id.toHexString()},
    {
      $push:{
        "msgArray": {content:`Your friend's request to ${user.name} was accepted.`}
      }
    }
  );

  //should return the accepted message back to this user
  return updatedMessages.msgArray;
}

messageSchema.statics.sendRejectMessage = async function(user, friend){
  let Message = this;

  //update this user's request message value to REJECT
  const updatedMessages = await Message.findOneAndUpdate(
    {userId: user._id.toHexString()},
    {
      $set:{
        "msgArray.$[element].value": 'REJECT'
      }
    },
    {
      "new": true,
      "arrayFilters": [ { "element.value": 'UNDECIDE',"element.from": {"email":friend.email,"name":friend.name}} ]
    }
  );

  await Message.findOneAndUpdate(
    {userId: friend._id.toHexString()},
    {
      $push:{
        "msgArray": {content:`Your friend's request to ${user.name} was rejected.`}
      }
    }
  );

  //should return the rejected message back to this user
  return updatedMessages.msgArray;
}

messageSchema.statics.findAllMessages = async function(user){
  let Message = this;

  const userId = typeof user._id === 'string'? user._id: user._id.toHexString();
  const msg = await Message.findOne({userId});

  return msg.msgArray;
}

messageSchema.statics.findNewMessage = async function(user){
  let Message = this;

  const msgArray = await Message.findAllMessages(user);
  const newMsgArray = msgArray.filter((msg)=>msg.status==='NEW');
  return newMsgArray;
}

messageSchema.statics.updateMessageStatus = async function(user, oldStatus, newStatus){
  let Message = this;

  const userId = typeof user._id === 'string'? user._id: user._id.toHexString();

  const updatedMessage = await Message.findOneAndUpdate(
    {
      userId
    },
    {//this would have been ALL the messages
      $set:{
        "msgArray.$[element].status": newStatus
      }
    },
    {
      "new": true,
      "arrayFilters": [ { "element.status": oldStatus } ]
    },

  );

  return updatedMessage.msgArray;//this will return all messages

}



module.exports = mongoose.model('Message',messageSchema);
