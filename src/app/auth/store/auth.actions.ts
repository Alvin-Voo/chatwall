import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';

export class SignupFail implements Action{
  readonly type = SIGNUP_FAIL;

  constructor(public payload: string){};
}

export class SigninFail implements Action{
  readonly type = SIGNIN_FAIL;

  constructor(public payload: string){};
}

export class Signup implements Action{
  readonly type = SIGNUP;

  constructor(public payload:User){}
}
export class Signin implements Action{
  readonly type = SIGNIN;

  constructor(public payload:{email: string, password: string}){}
}
export class Logout implements Action{
  readonly type = LOGOUT;
}
export class SetToken implements Action{
  readonly type = SET_TOKEN;

  constructor(public payload: string){
  }
}

export type AuthActions = Signin | Signup | Logout | SetToken | SignupFail | SigninFail;
