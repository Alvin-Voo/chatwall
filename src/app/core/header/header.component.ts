import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as AuthActions from '../../auth/store/auth.actions';
import * as FriendsActions from '../../friends/store/friends.actions';
import * as ChatsActions from '../../friends/chats/store/chats.actions';
import * as SearchActions from '../../search/store/search.actions';
import * as MessageActions from '../../message/store/message.actions';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { skipWhile, take } from 'rxjs/operators';
import { SocketService } from '../../shared/socket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticatedState: Observable<boolean>;
  usernameState: Observable<string>;
  constructor(private store: Store<fromApp.AppState>, private router: Router, private socketService: SocketService) { }

  ngOnInit() {
    this.authenticatedState = this.store.select('auth','authenticated');
    this.usernameState = this.store.select('auth','name');
  }

  onLogout(){
    this.store.dispatch(new AuthActions.Logout());
    this.store.select('auth','authenticated').pipe(
      skipWhile((authenticated:boolean)=>authenticated===true),
      take(1)
    ).subscribe(
      (authenticated)=>{
        this.socketService.disconnect();
        this.router.navigateByUrl('/auth/signin');
      }
    );

    //clear all the stores
    this.store.dispatch(new FriendsActions.ClearStore());
    this.store.dispatch(new ChatsActions.ClearStore());
    this.store.dispatch(new SearchActions.ClearStore());
    this.store.dispatch(new MessageActions.ClearStore());
  }

}
