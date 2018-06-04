const socketIO = require('socket.io');
const socketioJwt = require('socketio-jwt');
const {Users, User} = require('./utils/Users');
const MessageDB = require('../server/models/Message');
const UserDB = require('../server/models/User');
const ChatDB = require('../server/models/Chat');
const users = new Users();

class SocketServer{

  constructor(srv){
    this.io = socketIO(srv);
  }

  startListening(){
    this.io.on('connection', socketioJwt.authorize({
      secret: process.env.JWT_SECRET,
      timeout: 15000 // 15 seconds to send the authentication message
    })).on('authenticated', (socket)=>{
      //this socket is authenticated, we are good to handle more events from it.
      console.log('Hello! Client authenticated ',socket.id,' : ',socket.decoded_token.email,' : ',socket.decoded_token.name);

      const newuser = new User(socket.id, socket.decoded_token._id, socket.decoded_token.name, socket.decoded_token.email, null);
      users.addUser(newuser);

      //-------------------------------------//
      //when connected, update this user db online status to true
      //get this user's friends
      //check which of those friends are currently online
      //send all online friends this user
      processOnlineUser(true);

      socket.on('disconnect', ()=>{
        console.log('GoodBye: ',socket.id,' : ',socket.decoded_token.email,' : ',socket.decoded_token.name);
        //update this user online status to false
        //get this user's friends
        //cross check if any friend is online
        //send the status (updated user obj)  to all of the online friend
        processOnlineUser(false);
        users.removeUser(socket.id);
      });

      //common function for processing online status
      function processOnlineUser(onlineStatus){
        UserDB.updateUserOnlineStatus(socket.decoded_token._id,onlineStatus).then(
          (user)=>{
            const friends = user.friends;
            if(friends.length===0) return;
            console.log(`${user.name} online friends`,friends);
            friends.forEach((friend)=>{
              const online_friend = users.getUserByEmailAndName(friend.email,friend.name);
              if(online_friend){
                socket.broadcast.to(online_friend.getSocketId()).emit('friendOnlineStatus',{name:user.name, email:user.email, online:user.online});
                //notify this online friend about user's online
              }
            })
          }
        )
      }

      //-------------------------------------//

      socket.on('friendRequestSent', async(friend)=>{
        //check new message in db for this user using socket.id
        //emit new message to this user
        const _id = users.getUser(socket.id).getUserId();
        const newmsg = await MessageDB.findNewMessage({_id});
        //update all NEW msg to SENT
        await MessageDB.updateMessageStatus({_id},'NEW','SENT');
        socket.emit('newMessage',newmsg);

        //check to see if this friend online using friendId
        //if yes, check new message in db for friend using friendId
        //emit new message to friend
        sendNewMessageToFriend(friend);
      });

      socket.on('friendAccepted', sendNewMessageToFriend);

      socket.on('friendRejected', sendNewMessageToFriend);

      //common function for friend request
      async function sendNewMessageToFriend(friend){
        const friend_new = users.getUserByEmailAndName(friend.email,friend.name);
        if(friend){
          const friend_newmsg = await MessageDB.findNewMessage({_id: friend_new.getUserId()});
          //update all NEW msg to SENT
          await MessageDB.updateMessageStatus({_id: friend_new.getUserId()},'NEW','SENT');
          socket.broadcast.to(friend_new.getSocketId()).emit('newMessage',friend_newmsg);
        }
      }

      //--------------------------------------//

      socket.on('sendChatMessageTo', async(friend,chatItem)=>{
        const userId = users.getUser(socket.id).getUserId();
        let onlinefriend = users.getUserByEmailAndName(friend.email,friend.name);
        let friendId = onlinefriend.getUserId();

        if(!onlinefriend){//not currently online - highly unlikely will encounter this, cuz front end will block
          const friendDB = await UserDB.findByEmailAndName(friend.email,friend.name);
          friendId = friendDB._id.toHexString();
        }else{
          //send chat message to friend
          socket.broadcast.to(onlinefriend.getSocketId()).emit('newChatMessage',chatItem);
        }

        //store message in both this user and friend's chat db
        await ChatDB.storeChatMessage(userId,friendId,chatItem);
      })

    });
  }
}

module.exports = SocketServer;
