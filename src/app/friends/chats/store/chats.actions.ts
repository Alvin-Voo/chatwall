import { Action } from "@ngrx/store";
import { Chat } from "../../../models/chat.model";

export const SELECT_FRIEND = 'SELECT_FRIEND';
export const STORE_CHAT_LIST = 'STORE_CHAT_LIST';
export const UPDATE_CUR_CHAT_ARRAY = 'UPDATE_CUR_CHAT_ARRAY';

export class SelectFriend implements Action{
  readonly type = SELECT_FRIEND

  constructor(public payload: {email:string, name:string, online:boolean}){}
}

export class StoreChatList implements Action{
  readonly type = STORE_CHAT_LIST

  constructor(public paylod: Chat[]){}
}

export class UpdateCurChatArray implements Action{
  readonly type = 'UPDATE_CUR_CHAT_ARRAY'

  constructor(public payload: {content:string, created:Date, direction:string}){}
}

export type ChatsActions = SelectFriend | StoreChatList | UpdateCurChatArray;
