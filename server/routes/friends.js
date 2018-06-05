const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Chat = require('../models/Chat');
const {authenticate} = require('../middleware/authentication');

const _ = require('lodash');

//path starts with /friends

router.get('/getallfriends',authenticate, async (req,res)=>{
  try{
    const user = await User.findById(req.user._id).populate({path:'friends',select:'email name dob avatar online'});
    const friends = user.friends;

    res.send({friends});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
});

router.get('/readallchats/:friendemail/:friendname',authenticate, async(req,res)=>{
  try{
    let email = _.escape(req.params.friendemail).trim();//convert the input to string for safety
    let name = _.escape(req.params.friendname).trim();//convert the input to string for safety

    const friend = await User.findByEmailAndName(email,name);
    const chat = await Chat.readAllChatsByFriend(req.user,friend);

    res.send({chat});
  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

module.exports = router;
