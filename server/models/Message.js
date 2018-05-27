const mongoose = require('mongoose');

let messageSchema = mongoose.Schema({
  userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', //refer to other user,
        unique: true,
        required: true
      },
  msgArray:[
    {
      content:{
        type:String,
        trim:true
      },
      type:{
        type:String,
        trim:true,
        default:'MSG',
        match:/MSG|REQ/,
        uppercase:true
      },
      value:{
        type:Boolean,
        default:false
      }
    }
  ]
});



module.exports = mongoose.model('Message',messageSchema);
