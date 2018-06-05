import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChats from './store/chats.reducers';
import * as ChatsActions from './store/chats.actions';
import { Subscription, Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { SocketService } from '../../shared/socket.service';
import { Chat } from '../../models/chat.model';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit, OnDestroy {

  messageToUser='Select an available friend to start chatting!';
  friendAvailable = false;
  curChatList: Observable<Chat[]>;
  userName: string;

  private friendSelected: {email:string, name:string, online:boolean};
  private friendSelectedSub: Subscription;

  constructor(private store: Store<fromChats.FeatureState>, private socketService: SocketService) {}

  ngOnInit() {
    this.friendSelectedSub= this.store.select('chats','friendSelected').subscribe(
      (friendSelected)=>{
        if(!friendSelected) return;
        this.friendSelected = friendSelected;
        if(friendSelected.online){
          this.messageToUser = `You are chatting with ${friendSelected.name}.`;
          this.friendAvailable = true;
        }else{
          this.messageToUser = `${friendSelected.name} is currently offline.`
          this.friendAvailable = false;
        }
      }
    );

    this.curChatList = this.store.select('chats','curChatList');
    this.store.select('auth','name').pipe(
      take(1)
    ).subscribe((name)=>this.userName=name);
  }

  onSendChatMessage(myForm: NgForm){
   let chat: string = myForm.value.chatMessage;

   const newChatItem = {content:chat,created:new Date(Date.now()),direction:'TO'};
   //push this chat to cur chat state
   this.store.dispatch(new ChatsActions.UpdateChatArray(newChatItem));

   if(this.friendSelected.online)
    this.socketService.sendChatMessageTo({email:this.friendSelected.email,name:this.friendSelected.name},newChatItem);
  }

  ngOnDestroy(){
    if(this.friendSelectedSub) this.friendSelectedSub.unsubscribe();
  }

}
