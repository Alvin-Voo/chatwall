import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import * as SearchActions from './search.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const SERVER_PATH = environment.server;

@Injectable()
export class SearchEffects{
  @Effect()
  search = this.actions$.ofType(SearchActions.SEARCH).pipe(
    map((action: SearchActions.Search) => action.payload),//get the search string
    switchMap((searchStr : string) =>{
      return this.httpClient.get(SERVER_PATH+'/user/search/'+searchStr,
            {
                observe:'body',
                responseType:'json'
            }).pipe(
            catchError(err =>{
              console.log("error searching ",err);
              return of(err);
            })
          );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        console.log('search fail resp');
        return of({type:SearchActions.SEARCH_FAIL, payload: resp['error']});
      }

      return of({type:SearchActions.UPDATE_USERS_LIST, payload: resp['users']});
    })
  );

  @Effect()
  sendFriendRequest = this.actions$.ofType(SearchActions.SEND_FRIEND_REQUEST).pipe(
    map((action: SearchActions.SendFriendRequest) => action.payload),
    switchMap((friendData: {email, name})=>{
      return this.httpClient.post(SERVER_PATH+'/user/search/sendfriendrequest',JSON.stringify(friendData),
              {
                headers:{'Content-Type':'application/json'},
                observe:'body',
                responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error friend request",err);
                return of(err);
              })
            )
    }),
    switchMap((resp)=>{
      if(resp instanceof HttpErrorResponse){
        return of({type:SearchActions.SEARCH_FAIL, payload: resp['error']});
      }
      return of({type:SearchActions.UPDATE_USER, payload: resp['user']});
    })
  )

  constructor(private actions$: Actions, private httpClient: HttpClient){};
}
