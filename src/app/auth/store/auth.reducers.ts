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
      console.log("reducer after logout");
      return{
        ...state,
        token: null,
        email: null,
        name: null,
        authenticated : false
      };
    case AuthActions.SET_TOKEN:
      const jwt_payload = action.payload.split('.')[1];
      const obj_payload = JSON.parse(atob(jwt_payload));
      console.log("set token reducer called",obj_payload);
      return{
        ...state,
        token: action.payload,
        email: obj_payload['email'],
        name: obj_payload['name'],
        authenticated: true
      };
    default:
      return state;
  }
}
