import * as ChatsActions from './chats.actions';
import * as fromApp from '../../../store/app.reducers';
import { Chat } from '../../../models/chat.model';

export interface FeatureState extends fromApp.AppState{
  chats: State;
}

export interface State{
  friendSelected: {email: string, name: string, online:boolean},
  curChatList: Chat[],
  read_chat_fail: string
}

const initialState: State ={
  friendSelected: null,
  curChatList: new Array<Chat>(),
  read_chat_fail: null
}

export function chatsReducer(state=initialState, action: ChatsActions.ChatsActions){
  switch(action.type){
    case(ChatsActions.SELECT_FRIEND):
      return{
        ...state,
        friendSelected: action.payload
      }
    case(ChatsActions.STORE_CHAT_ARRAY):
      return{
        ...state,
        curChatList: action.payload,
        read_chat_fail: null
      }
    case(ChatsActions.UPDATE_CHAT_ARRAY):
      const newChatList = [...state.curChatList, action.payload];
      return{
        ...state,
        curChatList: newChatList
      }
    case(ChatsActions.READ_CHAT_FAIL):
      return{
        ...state,
        read_chat_fail: action.payload
      }
    default:
      return state;
  }
}
