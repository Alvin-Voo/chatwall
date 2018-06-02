import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import * as FriendsActions from './friends.actions';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const SERVER_PATH = environment.server;

@Injectable()
export class FriendsEffects{
  @Effect()
  fetchFriendsList = this.actions$.ofType(FriendsActions.GET_FRIENDS_LIST).pipe(
    switchMap(()=>{
      return this.httpClient.get(SERVER_PATH+'/friends/getallfriends',
              {
                  observe:'body',
                  responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error getting friends ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        return of({type:FriendsActions.GET_FRIENDS_FAIL, payload: resp['error']});
      }
      return of({type:FriendsActions.STORE_FRIENDS_LIST, payload: resp['friends']});
    })
  );


  constructor(private actions$: Actions, private httpClient: HttpClient){}
}
