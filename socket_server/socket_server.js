const socketIO = require('socket.io');
const socketioJwt = require('socketio-jwt');
const {Users, User} = require('./utils/Users');
const Message = require('../server/models/Message');
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
      console.log('hello! client authenticated ',socket.id,' : ',socket.decoded_token.email,' : ',socket.decoded_token.name);

      const user = new User(socket.id, socket.decoded_token._id, socket.decoded_token.name, socket.decoded_token.email, null);
      users.addUser(user);

      socket.on('friendRequestSent', async(friend)=>{
        //check new message in db for this user using socket.id
        //emit new message to this user
        const _id = users.getUser(socket.id).getUserId();
        const newmsg = await Message.findNewMessage({_id});
        //update all NEW msg to SENT
        await Message.updateMessageStatus({_id},'NEW','SENT');
        socket.emit('newMessage',newmsg);

        //check to see if this friend online using friendId
        //if yes, check new message in db for friend using friendId
        //emit new message to friend
        sendNewMessageToFriend(friend);
      });

      socket.on('friendAccepted', sendNewMessageToFriend);

      socket.on('friendRejected', sendNewMessageToFriend);

      socket.on('disconnect', ()=>{
        console.log('GoodBye: ',socket.id);
        users.removeUser(socket.id);
      });

      //common function
      async function sendNewMessageToFriend(friend){
        const friend_new = users.getUserByEmailAndName(friend.email,friend.name);
        if(friend){
          const friend_newmsg = await Message.findNewMessage({_id: friend_new.getUserId()});
          //update all NEW msg to SENT
          await Message.updateMessageStatus({_id: friend_new.getUserId()},'NEW','SENT');
          socket.broadcast.to(friend_new.getSocketId()).emit('newMessage',friend_newmsg);
        }
      }

    });
  }
}

module.exports = SocketServer;
