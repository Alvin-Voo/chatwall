const mongoose = require('mongoose');
const _ = require('lodash');

let chatSchema = mongoose.Schema({
  userId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
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

chatSchema.methods.toJSON = function(){//overwrite the toJSON method of mongoose
  let chat = this;

  return _.pick(chat, ['status','userId','friendId','chatArray']);
  //return _.omit(user, ['password','messageId','_id','tokens'])
}

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

chatSchema.statics.readAllChatsByFriend = async function(user, friend){
  let Chat = this;
  //get the chat and update the status to 'read'
  const chat = await Chat.findOneAndUpdate({userId: user, friendId: friend},
    {
      $set:{
        "status":'READ'
      }
    },
    {
      "new": true
    }
  );

  return chat.chatArray;
}

module.exports = mongoose.model('Chat',chatSchema);
