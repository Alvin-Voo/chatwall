import * as ChatsActions from './chats.actions';
import * as fromFriends from '../../store/friends.reducers';
import { Chat } from '../../../models/chat.model';

export interface FeatureState extends fromFriends.FeatureState{
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
    case(ChatsActions.UPDATE_SELECTED_FRIEND_STATUS)://only update status if this is the selected friend
      if(!state.friendSelected||state.friendSelected.email!==action.payload.email||state.friendSelected.name!==action.payload.name)
        return state;
      else{
        return{
          ...state,
          friendSelected: action.payload
        }
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
    case(ChatsActions.CLEAR_STORE):
      return{
        ...state,
        ...initialState
      }
    default:
      return state;
  }
}
