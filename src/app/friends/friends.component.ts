import { Component, OnInit, OnDestroy, Renderer2, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';

import * as fromFriends from './store/friends.reducers';
import * as FriendsActions from './store/friends.actions';
import * as ChatsActions from './chats/store/chats.actions';

import { Observable, Subscription } from 'rxjs';
import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit, OnDestroy {

  friendsListState: Observable<User[]>;
  friendsErrorState: Observable<String>;
  private userSub: Subscription;

  prev_selected_matCard: ElementRef; //Assign with type ElementRef ok, but don't access the nativeElement

  constructor(private store: Store<fromFriends.FeatureState>, private socketService: SocketService, private renderer: Renderer2) { }

  ngOnInit() {
    this.store.dispatch(new FriendsActions.GetFriendsList());
    this.friendsListState = this.store.select('friends','friendsList');
    this.friendsErrorState = this.store.select('friends','friends_fail_message');

    //only need to listen to friend online status change here
    //since will get fresh friends list everytime friends component init again
    this.userSub = this.socketService.onFriendOnlineStatusChanged().subscribe(
      (friend: User)=>{
        console.log('friends online status',friend);
        this.store.dispatch(new FriendsActions.UpdateFriendOnlineStatus(friend));
        //friend list wont be updated if no such friend is found
        this.store.dispatch(new ChatsActions.UpdateSelectedFriendStatus({email:friend.email,name:friend.name,online:friend.online}));
      }
    )
  }

  convertToAge(date){
    const age = new Date(Date.now()).getFullYear() - new Date(date).getFullYear();
    return age;
  }

  checkOnline(online){
    if(online)return 'online';
    else return 'offline';
  }

  onFriendSelected(friend: User,event){
    // console.log('selected:',event,' ',event.target);
    const matCard = this.getToMatCardRootEle(event.target);
    if(matCard){
      if(this.prev_selected_matCard) this.renderer.removeStyle(this.prev_selected_matCard,'border');
      this.renderer.setStyle(matCard,'border','.2em inset blueviolet');
      this.prev_selected_matCard = matCard;
    }

    this.store.dispatch(new ChatsActions.SelectFriend({email:friend.email,name:friend.name,online:friend.online}));
    //---- need to update the status from NEW to READ
    if(friend.status==='NEW') this.store.dispatch(new FriendsActions.UpdateFriendChatStatus({email:friend.email,name:friend.name,status:'READ'}));
  }

  private getToMatCardRootEle(ele){
    let rootMatCard;
    let max_try = 0;//i dont want this to become infinite loop! its just aesthetic fix
    if(!ele) return;
    while(ele.tagName!=='MAT-CARD'&&max_try<=6){
      ele = this.renderer.parentNode(ele);
      max_try++;
    }
    if (ele.tagName==='MAT-CARD') return ele;
    else return;
  }

  ngOnDestroy(){
    if(this.userSub)this.userSub.unsubscribe();
  }

}
