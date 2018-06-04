const mongoose = require('mongoose');

let chatSchema = mongoose.Schema({
  userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      unique: true,
      required: true
    },
  friendId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required:true
    },
  status:{
    type:String,
    trim:true,
    default:'READ',
    match:/NEW|READ/,
    uppercase: true
  },
  chatArray:[
    {
      content:{
        type: String,
        trim: true
      },
      created:{
        type:Date,
        default:Date.now
      },
      direction:{
        type:String,
        trim:true,
        default:'TO',
        match:/TO|FROM/,
        uppercase: true
      }
    }
  ]
});

chatSchema.statics.createChat = async function(userId,friendId){
  let Chat = this;

  chat = new Chat({userId,friendId});
  const userChat = await chat.save();

  chat2 = new Chat({userId:friendId, friendId:userId});
  const friendChat = await chat2.save();

  return {userChat,friendChat};
}

chatSchema.statics.storeChatMessage = async function(userId, friendId, chatItem){
  let Chat = this;

  await Chat.findOneAndUpdate({userId, friendId},
    {
      $set:{
        "status":'READ'
      },
      $push:{
        "chatArray":{content:chatItem.content,created:chatItem.created, direction:'TO'}
      }
    }
  );

  await Chat.findOneAndUpdate({userId: friendId, friendId: userId},
    {
      $set:{
        "status":'NEW'
      },
      $push:{
        "chatArray":{content:chatItem.content,created:chatItem.created, direction:'FROM'}
      }
    }
  );
}

module.exports = mongoose.model('Chat',chatSchema);
