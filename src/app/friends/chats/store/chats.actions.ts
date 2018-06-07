import { Action } from "@ngrx/store";
import { Chat } from "../../../models/chat.model";

export const SELECT_FRIEND = 'SELECT_FRIEND';;
export const UPDATE_SELECTED_FRIEND_STATUS = 'UPDATE_SELECTED_FRIEND_STATUS';
export const STORE_CHAT_ARRAY = 'STORE_CHAT_ARRAY';
export const UPDATE_CHAT_ARRAY = 'UPDATE_CHAT_ARRAY';
export const READ_CHAT_FAIL = 'READ_CHAT_FAIL';
export const CLEAR_STORE = 'CLEAR_STORE';

export class SelectFriend implements Action{
  readonly type = SELECT_FRIEND

  constructor(public payload: {email:string, name:string, online:boolean}){}
}

export class UpdateSelectedFriendStatus implements Action{
  readonly type = UPDATE_SELECTED_FRIEND_STATUS;

  constructor(public payload: {email:string, name:string, online:boolean}){}
}

export class StoreChatArray implements Action{
  readonly type = STORE_CHAT_ARRAY

  constructor(public payload: Chat[]){}
}

export class UpdateChatArray implements Action{
  readonly type = 'UPDATE_CHAT_ARRAY'

  constructor(public payload: Chat){}
}

export class ReadChatFail implements Action{
  readonly type = READ_CHAT_FAIL

  constructor(public payload: string){}
}

export class ClearStore implements Action{
  readonly type = CLEAR_STORE;

}

export type ChatsActions = SelectFriend | UpdateSelectedFriendStatus| StoreChatArray | UpdateChatArray | ReadChatFail | ClearStore;
