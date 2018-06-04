import * as ChatsActions from './chats.actions';
import * as fromApp from '../../../store/app.reducers';
import { Chat } from '../../../models/chat.model';

export interface FeatureState extends fromApp.AppState{
  chats: State;
}

export interface State{
  friendSelected: {email: string, name: string, online:boolean},
  curChatList: Chat[]
}

const initialState: State ={
  friendSelected: null,
  curChatList: new Array<Chat>()
}

export function chatsReducer(state=initialState, action: ChatsActions.ChatsActions){
  switch(action.type){
    case(ChatsActions.SELECT_FRIEND):
      return{
        ...state,
        friendSelected: action.payload
      }
    case(ChatsActions.UPDATE_CUR_CHAT_ARRAY):
      const newChatList = [...state.curChatList, action.payload];
      return{
        ...state,
        curChatList: newChatList
      }
    default:
      return state;
  }
}
