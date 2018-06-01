
class User{

  constructor(socketId, userId, name, email, room){
    this._socketId = socketId;
    this._userId = userId;
    this._name = name;
    this._email = email;
    this._room = room;
  };

  getUserId(){
    return this._userId;
  }

  getSocketId(){
    return this._socketId;
  }

  getEmail(){
    return this._email;
  }

  getName(){
    return this._name;
  }

  getRoom(){
    return this._room;
  }
}
//class to hold online users details in socket
class Users{

  constructor(){
    this.users = [];
  }

  addUser(user){
    this.users.push(user);
    return user;
  }

  getUser(socketId){
    return this.users.find((user)=>user.getSocketId()===socketId);
  }

  getUserByEmailAndName(email, name){
    return this.users.find((user)=>user.getEmail()===email&&user.getName()===name);
  }

  removeUser(socketId){
    const ind_userTobeDel = this.users.findIndex((user)=>user.getSocketId()===socketId);

    if (ind_userTobeDel == -1) return null;

    return this.users.splice(ind_userTobeDel,1)[0];
  }

  toString(){
    return this.users;
  }
}

module.exports = {Users, User};
