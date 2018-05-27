import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import * as SearchActions from '../store/search.actions';
import { take } from 'rxjs/operators';
import { User } from '../../models/user.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-search-detail',
  templateUrl: './search-detail.component.html',
  styleUrls: ['./search-detail.component.css']
})
export class SearchDetailComponent implements OnInit, OnDestroy {

  userInfo: User;
  routeSubs: Subscription;

  friendRequestStr = 'Send friend\'s request';
  friendRequestToggle = false;

  constructor(private route: ActivatedRoute, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.routeSubs = this.route.params.subscribe(
      (params: Params) => {
        let index = Number(params['index']);

        this.friendRequestStr = 'Send friend\'s request';
        this.friendRequestToggle = false;

        this.store.select('search','usersList').pipe(
          take(1)
        ).subscribe(
          (usersList : User[])=>{
            if(usersList.length>0&&usersList[index]){
              this.userInfo = usersList[index];

              this.store.select('auth','email').pipe(
                take(1)
              ).subscribe(
                (myemail: string)=>{

                  if(this.userInfo.email===myemail) return this.disableFriendRequest('Eh?? Si moi!');

                  const reqUserSent = this.userInfo.friends_requests.filter((user)=>{
                    return user.email===myemail;
                  })
                  if(reqUserSent.length>0) this.disableFriendRequest('Friend\'s request sent');
                }
              );
            }
          }
        )
      }
    );
  }

  convertToDateString(unix:number){
    let newDob = new Date();
    newDob.setTime(unix);
    return newDob.toDateString();
  }

  sendFriendRequest(){
    this.store.dispatch(new SearchActions.SendFriendRequest({email: this.userInfo.email, name: this.userInfo.name}));

    this.disableFriendRequest('Friend\'s request sent');
  }

  disableFriendRequest(buttonStr: string){
    this.friendRequestStr = buttonStr;
    this.friendRequestToggle = true;
  }

  ngOnDestroy(){
    if(this.routeSubs)this.routeSubs.unsubscribe();
  }

}
