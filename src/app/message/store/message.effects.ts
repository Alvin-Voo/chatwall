import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import * as MessageActions from './message.actions';
import { Message } from '../../models/message.model';

import { switchMap, catchError, map, concat, mergeMap, combineLatest } from 'rxjs/operators';
import { of, forkJoin} from 'rxjs';
import { SocketService } from '../../shared/socket.service';

const SERVER_PATH = environment.server;

@Injectable()
export class MessageEffects{

  @Effect()
  fetchAllMessages = this.actions$.ofType(MessageActions.FETCH_ALL_MESSAGES).pipe(
    switchMap(()=>{
      return this.httpClient.get(SERVER_PATH+'/message/getallmessages',
              {
                  observe:'body',
                  responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error getting messages ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        return of({type:MessageActions.GET_MESSAGES_FAIL, payload: resp['error']});
      }

      return of({type:MessageActions.STORE_ALL_MESSAGES, payload: resp['msgArray']});
    })
  );

  @Effect()
  readAllMessages = this.actions$.ofType(MessageActions.READ_ALL_MESSAGES).pipe(
    switchMap(()=>{
      return this.httpClient.get(SERVER_PATH+'/message/readallmessages',
              {
                  observe:'body',
                  responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error reading messages ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        return of({type:MessageActions.GET_MESSAGES_FAIL, payload: resp['error']});
      }

      return of({type:MessageActions.STORE_ALL_MESSAGES, payload: resp['msgArray']});
    })
  );

  @Effect()
  acceptFriend = this.actions$.ofType(MessageActions.ACCEPT_FRIEND).pipe(
    map((action: MessageActions.AcceptFriend)=>action.payload),
    // switchMap((friendData:{email:string, name:string})=>{
    //   return this.httpClient.patch(SERVER_PATH+'/message/acceptfriend',JSON.stringify(friendData),
    //           {
    //             headers:{'Content-Type':'application/json'},
    //             observe:'body',
    //             responseType:'json'
    //           }).pipe(
    //           catchError(err =>{
    //             console.log("error friend request",err);
    //             return of(err);
    //           })
    //         )
    // }),
    switchMap((friendData:{email:string, name:string})=>{
      return this.httpClient.patch(SERVER_PATH+'/message/acceptfriend',JSON.stringify(friendData),
              {
                headers:{'Content-Type':'application/json'},
                observe:'body',
                responseType:'json'
              }).pipe(
                map(resp=>{
                    return {resp, friendData};
                  }
                ),
                catchError(err =>{
                  console.log("error friend request",err);
                  return of(err);
                })
            )
    }),
    switchMap((pair)=>{
      const resp = pair.resp;
      if (resp instanceof HttpErrorResponse){
        return of({type:MessageActions.GET_MESSAGES_FAIL, payload: resp['error']});
      }else{
        this.socketService.friendAccepted(pair.friendData);
        return of({type:MessageActions.STORE_ALL_MESSAGES, payload: resp['msgArray']});
      }
    })
  );

  @Effect()
  rejectFriend = this.actions$.ofType(MessageActions.REJECT_FRIEND).pipe(
    map((action: MessageActions.RejectFriend)=>action.payload),
    switchMap((friendData:{email:string, name:string})=>{
      return this.httpClient.patch(SERVER_PATH+'/message/rejectfriend',JSON.stringify(friendData),
              {
                headers:{'Content-Type':'application/json'},
                observe:'body',
                responseType:'json'
              }).pipe(
                map(resp=>{
                    return {resp, friendData};
                  }
                ),
                catchError(err =>{
                  console.log("error friend request",err);
                  return of(err);
                })
            );
    }),
    switchMap((pair)=>{
      const resp = pair.resp;
      if (resp instanceof HttpErrorResponse){
        return of({type:MessageActions.GET_MESSAGES_FAIL, payload: resp['error']});
      }else{
        this.socketService.friendRejected(pair.friendData);
        return of({type:MessageActions.STORE_ALL_MESSAGES, payload: resp['msgArray']});
      }
    })
  );

  constructor(private actions$: Actions, private httpClient: HttpClient, private socketService: SocketService){}

}
