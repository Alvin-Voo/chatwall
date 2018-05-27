import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNIN_FAIL = 'SIGNIN_FAIL';
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const AFTER_LOGOUT = 'AFTER_LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_MY_PROFILE = 'SET_MY_PROFILE';

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
export class AfterLogout implements Action{
  readonly type = AFTER_LOGOUT;
}

export class SetToken implements Action{
  readonly type = SET_TOKEN;

  constructor(public payload: string){}
}

export class SetMyProfile implements Action{
  readonly type = SET_MY_PROFILE;

  constructor(public payload: {email: string, name: string}){}
}

export type AuthActions = Signin | Signup | Logout | AfterLogout | SetToken | SetMyProfile | SignupFail | SigninFail;
