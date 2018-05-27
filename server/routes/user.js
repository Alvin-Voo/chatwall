const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Message = require('../models/Message');

const {authenticate} = require('../middleware/authentication');

const _ = require('lodash');

//all starts with /user

//create user
router.post('/',async (req,res)=>{
  const body = _.pick(req.body,['avatar','name','dob','email','address','hobbies','password']);//create an object literal
  const user = new User(body);

  try{
    await user.save();
    const token = await user.generateAuthToken();
    // res.header('x-auth',token).send(user)
    //create new message document for this user
    const message = await Message.createMessage(user);
    await user.setMessageId(message);

    res.send({token});
  }catch(e){
    if(e.message.toLowerCase().includes('email')&&e.message.toLowerCase().includes('dup key'))
      res.status(400).send("There's an existing account with this email");
    else if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

router.get('/me', authenticate, (req,res)=>{ //authenticate is a callback function (or middleware)
  res.send({user: req.user});
})

router.get('/search/:name',authenticate, async (req,res)=>{
  let name = _.toString(req.params.name).trim();//convert the input to string for safety
  if(name){//only if its not undefined, null or empty
    try{
      const re = new RegExp('^'+name,'i');
      const users = await User.find({'name':re}).populate('friends_requests','email name').populate('friends','email name');
      if(users.length>0) {
        res.send({users});
      }else
        res.send({users:[]});
    }catch(e){
      if(e.message) res.status(400).send(e.message);
      else res.status(400).send(e);
    }
  }
})

router.post('/search/sendfriendrequest/',authenticate, async(req,res)=>{
  try{
    const body = _.pick(req.body,['email','name']);
    const friend = await User.findByEmailAndName(body.email, body.name);

    const dup_friend = friend.friends_requests.filter((user)=>{
      return user._id.toHexString()===req.user._id.toHexString();
    })
    if(dup_friend.length>0) return res.status(400).send('Duplicate friend request.');

    friend.friends_requests.push(req.user);
    await friend.save();

    //push message to Message collection in db
    // - push one message to this user, push another message to friend
    Message.sendReqMessage(req.user, friend);
    
    res.send({'user': friend});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

router.post('/login', async (req,res)=>{
  try{
    const body = _.pick(req.body,['email','password']);
    const user = await User.findByCredentials(body.email, body.password);
    const token = await user.generateAuthToken();
    res.send({token});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

router.delete('/me/token', authenticate, async(req, res)=>{
  try{
    await req.user.removeToken(req.token);
    res.status(200).send()
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

module.exports = router;
