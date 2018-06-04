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

router.get('/readallchats/:friend',authenticate, async(req,res)=>{
  try{
    let friend = JSON.parse(_.escape(req.params.friend).trim());//convert the input to string for safety
    if(!friend) throw new Error('invalid friend details');
    //expecting email and name in friend object

  }catch(e){
    if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

module.exports = router;
