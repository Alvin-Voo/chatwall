import * as AuthActions from './auth.actions';

export interface State{
    token : string;
    email: string;
    name: string;
    authenticated : boolean;
    signup_fail_message: string;
    signin_fail_message: string;
}

const initialState: State ={
  token : null,
  email: null,
  name: null,
  authenticated : false,
  signup_fail_message: null,
  signin_fail_message: null
}

export function authReducer(state=initialState, action: AuthActions.AuthActions){
  switch(action.type){
    case AuthActions.SIGNUP_FAIL:
      console.log("sign up failed reducer called");
      return {
        ...state,
        signup_fail_message: action.payload
      }
    case AuthActions.SIGNIN_FAIL:
      console.log("sign in failed reducer called");
      return {
        ...state,
        signin_fail_message: action.payload
      }
    case AuthActions.SIGNUP:
      console.log("sign up reducer called");
    case AuthActions.SIGNIN:
      return{
        ...state,
        signup_fail_message: null,
        signin_fail_message: null
      };
    case AuthActions.AFTER_LOGOUT:
      console.log("reducer logout");
      return{
        ...state,
        token: null,
        email: null,
        name: null,
        authenticated : false
      };
    case AuthActions.SET_TOKEN:
      console.log("set token reducer called");
      return{
        ...state,
        token: action.payload,
        authenticated: true
      };
    case AuthActions.SET_MY_PROFILE:
      console.log("set my profile reducer called");
      return{
        ...state,
        email: action.payload.email,
        name: action.payload.name,
      }
    default:
      return state;
  }
}
