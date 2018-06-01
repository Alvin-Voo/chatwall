import * as MessageActions from './message.actions';
import { Message } from '../../models/message.model';

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
    default:
      return state;
  }
}
