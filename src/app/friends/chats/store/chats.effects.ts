import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../../environments/environment';
import * as ChatsActions from './chats.actions';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

const SERVER_PATH = environment.server;

@Injectable()
export class ChatsEffects{
  @Effect()
  selectFriend = this.actions$.ofType(ChatsActions.SELECT_FRIEND).pipe(
    map((action: ChatsActions.SelectFriend)=>action.payload),
    switchMap((friend: {email:string, name:string, online:boolean})=>{
      return this.httpClient.get(SERVER_PATH+'/friends/readallchats/'+friend.email+'/'+friend.name,
            {
                observe:'body',
                responseType:'json'
            }).pipe(
            catchError(err =>{
              console.log("error reading chats ",err);
              return of(err);
            })
          );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        return of({type:ChatsActions.READ_CHAT_FAIL, payload: resp['error']});
      }
      return of({type:ChatsActions.STORE_CHAT_ARRAY, payload: resp['chat']});
    })
  )

  constructor(private actions$: Actions, private httpClient: HttpClient){}
}
