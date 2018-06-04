const express = require('express');
const router = express.Router();
const Message = require('../models/Message');
const User = require('../models/User');
const Chat = require('../models/Chat');
const {authenticate} = require('../middleware/authentication');

const _ = require('lodash');

//path starts with /message

router.get('/getallmessages',authenticate, async(req,res)=>{
  try{
    //check and only update those msg items which are status NEW to SENT
    //status NEW has not much practical use, its only for server to keep track of
    const msgArray = await Message.updateMessageStatus(req.user, 'NEW', 'SENT');
    res.send({msgArray});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
});

router.get('/readallmessages',authenticate, async(req,res)=>{
  try{
    const msgArray = await Message.updateMessageStatus(req.user, 'SENT', 'READ');
    res.send({msgArray});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
});

router.patch('/acceptfriend',authenticate, async(req,res)=>{
  try{
    const body = _.pick(req.body,['email','name']);
    const friend = await User.findByEmailAndName(body.email, body.name);

    //fill in each other's friend's array with each other
    await req.user.acceptFriend(friend);
    //create a new chat document EACH for this user-friend pair
    const chat_pair = await Chat.createChat(req.user,friend);
    await req.user.setChatId(chat_pair.userChat);
    await friend.setChatId(chat_pair.friendChat);

    const msgArray = await Message.sendAcceptMessage(req.user,friend);

    res.send({msgArray});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
});

router.patch('/rejectfriend',authenticate, async(req,res)=>{
  try{
    const body = _.pick(req.body,['email','name']);
    const friend = await User.findByEmailAndName(body.email, body.name);

    const msgArray = await Message.sendRejectMessage(req.user,friend);
    res.send({msgArray});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
});

module.exports = router;
