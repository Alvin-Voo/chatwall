import { Action } from "@ngrx/store";
import { Chat } from "../../../models/chat.model";

export const SELECT_FRIEND = 'SELECT_FRIEND';
export const STORE_CHAT_ARRAY = 'STORE_CHAT_ARRAY';
export const UPDATE_CHAT_ARRAY = 'UPDATE_CHAT_ARRAY';
export const READ_CHAT_FAIL = 'READ_CHAT_FAIL';

export class SelectFriend implements Action{
  readonly type = SELECT_FRIEND

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

export type ChatsActions = SelectFriend | StoreChatArray | UpdateChatArray | ReadChatFail;
