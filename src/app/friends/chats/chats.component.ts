import { Component, OnInit, OnDestroy, ViewChild, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromChats from './store/chats.reducers';
import * as ChatsActions from './store/chats.actions';
import * as FriendsActions from '../store/friends.actions';
import { Subscription, Observable } from 'rxjs';
import { skipWhile, take } from 'rxjs/operators';
import { NgForm } from '@angular/forms';
import { SocketService } from '../../shared/socket.service';
import { Chat } from '../../models/chat.model';
import { MatListItem, MatList } from '@angular/material';

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

  friendSelected: {email:string, name:string, online:boolean};
  private friendSelectedSub: Subscription;
  private socketSub: Subscription;

  // getting a reference to the overall list, which is the parent container of the list items
  @ViewChild('chatmessages' ,{read: ElementRef}) chatList: ElementRef;

  // getting a reference to the items/messages within the list
  // @ViewChildren(MatListItem, { read: ElementRef }) chatListItems: QueryList<MatListItem>;

  constructor(private store: Store<fromChats.FeatureState>, private socketService: SocketService, private renderer: Renderer2) {}

  ngOnInit() {
    this.store.select('auth','name').pipe(
      take(1)
    ).subscribe((name)=>this.userName=name);

    this.curChatList = this.store.select('chats','curChatList');

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
        this.scrollToBottom();
      }
    );

    this.socketSub = this.socketService.onNewChatMessageReceived().subscribe(
      (chatItem)=>{
        console.log('chat received ',chatItem);
        //if a friend is selected and there's message from the selected friend, update the chat array
        if(this.friendSelected&&this.friendSelected.email===chatItem.email&&this.friendSelected.name===chatItem.name){
          this.store.dispatch(new ChatsActions.UpdateChatArray(chatItem));
          this.scrollToBottom();
        }else
          this.store.dispatch(new FriendsActions.UpdateFriendChatStatus({email:chatItem.email, name:chatItem.name, status: 'NEW'}));
        //else update the 'new chat status' for this friend
      }
    )
  }

  // ngAfterViewInit(){
  //   this.chatListItems.changes.subscribe(
  //     (ele) => {
  //       const parent = this.renderer.parentNode(ele.first.nativeElement);
  //       console.log('ele parent ',parent);
  //     }
  //   )
  // }

  private scrollToBottom(){
    //needs some delay in getting the real scroll height value
    setTimeout(()=>{
      const divEle : HTMLDivElement = this.chatList.nativeElement//this may crap in SSR
      console.log('chatlist change  ', divEle.scrollHeight, ' : ', divEle.scrollWidth );
      // this.getMatList.setScrollTop(realscr);
      this.renderer.setProperty(divEle,'scrollTop',divEle.scrollHeight);
    },200);
  }

  onSendChatMessage(myForm: NgForm){
   let chat: string = myForm.value.chatMessage;

   const newChatItem = {content:chat,created:new Date(Date.now()),direction:'TO'};
   //push this chat to cur chat state
   this.store.dispatch(new ChatsActions.UpdateChatArray(newChatItem));

   if(this.friendSelected.online)
    this.socketService.sendChatMessageTo({email:this.friendSelected.email,name:this.friendSelected.name},newChatItem);

   myForm.reset();
   this.scrollToBottom();
  }

  ngOnDestroy(){
    if(this.friendSelectedSub) this.friendSelectedSub.unsubscribe();
    if(this.socketSub) this.socketSub.unsubscribe();
  }

}
