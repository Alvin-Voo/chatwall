import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import * as socketIo from 'socket.io-client';
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducers';
import { take } from "rxjs/operators";
import { Message } from "../models/message.model";
import { User } from "../models/user.model";
import { Chat } from "../models/chat.model";

const SERVER_URL = environment.server;

@Injectable()
export class SocketService{
  private socket;
  constructor(private store: Store<fromApp.AppState>){}

  public initSocket(){
    let token = '';
    this.store.select('auth').pipe(
      take(1)
    ).subscribe(
      (auth)=>{
        if(!auth.authenticated) return console.log('Not authenticated. Socket not initialized. Please sign in!');
        token = auth.token;
      }
    )

    this.socket = socketIo(SERVER_URL);

    this.socket.on('connect', (function(){
      if(!token) return;

      this.socket
        .emit('authenticate', {token}) //send the jwt
        .on('authenticated', function () {
          console.log('socket authenticated');
        })
        .on('unauthorized', function(msg) {
          console.log("unauthorized: " + JSON.stringify(msg.data));
          throw new Error(msg.data.type);
        })

    }).bind(this));// this keyword for global scope is not within the scope of a local callback
  }

  public friendAccepted(friend: {email:string, name:string}){
    this.socket.emit('friendAccepted',friend);
  }

  public friendRejected(friend: {email:string, name:string}){
    this.socket.emit('friendRejected',friend);
  }

  public friendRequestSent(friend: {email:string, name: string}){
    this.socket.emit('friendRequestSent',friend);
  }

  public onNewMessage(): Observable<Message[]>{
    return new Observable<Message[]>(
      observer =>{
        this.socket.on('newMessage',(data: Message[])=> observer.next(data));
      }
    )
  }

  public onFriendOnlineStatusChanged(): Observable<User>{
    return new Observable<User>(
      observer => {
        this.socket.on('friendOnlineStatus',(data: User)=> observer.next(data));
      }
    )
  }

  public onNewChatMessageReceived(): Observable<Chat>{
    return new Observable<Chat>(
      observer=>{
        this.socket.on('newChatMessageReceived',(data: Chat)=> observer.next(data));
      }
    )
  }

  public sendChatMessageTo(friend: {email:string, name:string}, chatItem){
    this.socket.emit('sendChatMessageTo',friend,chatItem);
  }

  public disconnect(){
    this.socket.disconnect();
  }

}
