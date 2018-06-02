import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user.model';

import * as fromApp from '../store/app.reducers';
import * as FriendsActions from './store/friends.actions';
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
  userSub: Subscription;

  constructor(private store: Store<fromApp.AppState>, private socketService: SocketService) { }

  ngOnInit() {
    this.store.dispatch(new FriendsActions.GetFriendsList());
    this.friendsListState = this.store.select('friends','friendsList');
    this.friendsErrorState = this.store.select('friends','friends_fail_message');

    //only need to listen to friend online status change here
    //since will get fresh friends list everytime friends component init again
    this.userSub = this.socketService.onFriendOnlineStatusChanged().subscribe(
      (friend: User)=>{
        console.log('friends online status',friend);
        this.store.dispatch(new FriendsActions.UpdateFriendsList(friend));
        //friend list wont be updated if no such friend is found
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

  ngOnDestroy(){
    if(this.userSub)this.userSub.unsubscribe();
  }

}
