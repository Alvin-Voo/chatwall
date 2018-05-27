const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const _ = require('lodash');

const Message = require('./Message');

let userSchema = mongoose.Schema({
  avatar:{
    type:String,
    trim:true,
    validate:{
      validator: function(v){
        const imageStrArr = v.split(',');
        if(imageStrArr.length!=2) return false;
        const dataStrTest = /^data:image\/\w{3,};base64$/i.test(imageStrArr[0]);
        const dataTest = validator.isBase64(imageStrArr[1]);

        return dataStrTest && dataTest;
      },
      message: '{VALUE} is not valid image'
    }
  },
  name:{
    type:String,
    trim:true,
    minlength:1,
    required:true
  },
  dob:{
    type:Number,
    required:true,
    default:Date.now
  },
  email:{
    type:String,
    trim:true,
    minlength:1,
    required:true,
    unique:true,
    lowercase:true,
    validate:{
      validator: validator.isEmail, //function validator.isEmail()
      message: '{VALUE} is not a valid email'
    }
  },
  address:{
    type:String,
    trim:true,
    minlength:1,
    required:true
  },
  hobbies:{
    type:String,
    trim:true
  },
  password:{
    type:String,
    required:true,
    minlength:6
  },
  messageId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Message',
    required: true
  },
  tokens:[
    {
      token:{
        type:String,
        required:true
      }
    }
  ],
  friends:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' //refer to other user
    }
  ],
  friends_requests:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User' //refer to other user
    }
  ]
})

userSchema.methods.toJSON = function(){//overwrite the toJSON method of mongoose
  let user = this;

  return _.pick(user, ['avatar','name','email','dob','address','hobbies','friends','friends_requests']);
}

userSchema.methods.generateAuthToken = function () {
  let user = this;//should be an object instance of the document instance
  let token = jwt.sign({_id:user._id.toHexString()}, process.env.JWT_SECRET, { expiresIn: '1h' }).toString();

  user.tokens.push({token});

  return user.save().then(()=>{//return the promise with token
    return token;
  });

}

userSchema.methods.removeToken = function (token) {
  let user = this;

  return user.update({
    $pull:{
      tokens: {token}
    }
  });
}

userSchema.statics.findByToken = function (token) {
  let User = this;//an object instance of Model
  let decoded;

  try{
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  }catch (e) {
    return Promise.reject(); //return a rejected Promise if verification failed
  }

  return User.findOne({
    '_id': decoded._id,
    'tokens.token' : token
  })
}

userSchema.statics.findByCredentials = function (email, password) {
  let User = this;

  return User.findOne({email}).then(
    (user)=>{
      if(!user) return Promise.reject('User not found.');
      //if got user compare password with hash
      if(bcrypt.compareSync(password,user.password)) return user;
      else return Promise.reject('Password incorrect.');
    }
  )
}

userSchema.statics.findByEmailAndName = function (email, name) {
  let User = this;

  return User.findOne({email, name}).then(
    (user)=>{
      if(!user) return Promise.reject('User not found.');
      return user;
    }
  )
}

userSchema.pre('save', function(next){
  let user = this;

  if(user.isModified('password')){//check if the password key's value for the document is modified
    //if modified, change it into a hash
    user.password = bcrypt.hashSync(user.password,10);
  }
  next();
})

module.exports = mongoose.model('User',userSchema);
