import * as MessageActions from './message.actions';
import * as fromApp from '../../store/app.reducers';
import { Message } from '../../models/message.model';

export interface FeatureState extends fromApp.AppState{
  message: State;
}

export interface State{
  messages: Message[];
  getMessagesFailure: String;
}

const initialState: State = {
  messages: new Array<Message>(),
  getMessagesFailure: null
}

export function messageReducer(state=initialState, action: MessageActions.MessageActions){
  switch(action.type){
    case MessageActions.STORE_ALL_MESSAGES:
      return{
        ...state,
        messages: [...action.payload],
        getMessagesFailure: null
      }
    case MessageActions.PUSH_NEW_MESSAGES:
      const newMessages = [...state.messages].concat([...action.payload]);
      return{
        ...state,
        messages: [...newMessages]
      }
    case MessageActions.GET_MESSAGES_FAIL:
      return{
        ...state,
        getMessagesFailure: action.payload
      }
    case MessageActions.CLEAR_STORE:
      return{
        ...state,
        ...initialState
      }
    default:
      return state;
  }
}
