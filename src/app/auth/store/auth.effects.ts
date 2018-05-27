import { Injectable } from '@angular/core';
import {Effect, Actions} from '@ngrx/effects'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import * as AuthActions from './auth.actions';
import { User } from '../../models/user.model';

import { Observable, of, pipe, from } from 'rxjs'; //from is what used to be 'fromPromise'
import { map, tap, switchMap, catchError } from 'rxjs/operators'; //tap is what-used-to be 'do'

const SERVER_PATH = environment.server;

@Injectable()
export class AuthEffects{
  @Effect({ dispatch: false })
  logActions$ = this.actions$.pipe(
    tap(action => {
      console.log(action);
    })
  );

  @Effect()
  authSignup = this.actions$.ofType(AuthActions.SIGNUP).pipe(
    map((action: AuthActions.Signup) =>{
      console.log("auth actions try signup");
      return action.payload;
      //return Observable<payload:User>
    }),
    switchMap((authData: User)=>{
      return this.httpClient.post(SERVER_PATH+'/user',JSON.stringify(authData),
              {
                headers:{'Content-Type':'application/json'},
                observe:'body',
                responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error sign up ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        console.log('signup error resp');
        return of({type:AuthActions.SIGNUP_FAIL, payload: resp['error']})
        //the last return is going to be handled by effects
      }
      //else its going to be an object with the token
      return of({type:AuthActions.SET_TOKEN, payload: resp['token']});
    })
  );

  @Effect()
  authSignin = this.actions$.ofType(AuthActions.SIGNIN).pipe(
    map((action: AuthActions.Signin) => action.payload),
    switchMap((authData: {email:string, password:string})=>{
      return this.httpClient.post(SERVER_PATH+'/user/login',JSON.stringify(authData),
              {
                headers:{'Content-Type':'application/json'},
                observe:'body',
                responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error sign in ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        console.log('signin error resp');
        return of({type:AuthActions.SIGNIN_FAIL, payload: resp['error']})
        //the last return is going to be handled by effects
      }
      //else its going to be an object with the token
      return of({type:AuthActions.SET_TOKEN, payload: resp['token']});
    })
  )

  @Effect()
  setToken = this.actions$.ofType(AuthActions.SET_TOKEN).pipe(
    switchMap(()=>{
      return this.httpClient.get(SERVER_PATH+'/user/me',
              {
                  observe:'body',
                  responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error setting token ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        console.log('setting profile error', resp.error);
      }
      return of({type:AuthActions.SET_MY_PROFILE, payload: {email: resp.user.email, name: resp.user.name}});
    })
  )

  @Effect()
  logout = this.actions$.ofType(AuthActions.LOGOUT).pipe(
    switchMap(()=>{
      return this.httpClient.delete(SERVER_PATH+'/user/me/token',
              {
                observe:'body',
                responseType:'json'
              }).pipe(
              catchError(err =>{
                console.log("error logging out ",err);
                return of(err);
              })
            );
    }),
    switchMap((resp)=>{
      if (resp instanceof HttpErrorResponse){
        console.log('log out error', resp.error);
      }
      return of({type:AuthActions.AFTER_LOGOUT});//clean up
    })
  )

  constructor(private actions$: Actions, private httpClient: HttpClient){}
}
