const express = require('express');
const router = express.Router();
const User = require('../models/User');
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
    res.send({token});
  }catch(e){
    if(e.message.toLowerCase().includes('email')&&e.message.toLowerCase().includes('dup key'))
      res.status(400).send("There's an existing account with this email");
    else if(e.message) res.status(400).send(e.message);
    else res.status(400).send(e);
  }
})

router.get('/me', authenticate, (req,res)=>{ //authenticate is a callback function (or middleware)
  res.send(req.user);
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

module.exports = router;
