import { Action } from "@ngrx/store";
import { Message } from "../../models/message.model";

export const FETCH_ALL_MESSAGES = 'FETCH_ALL_MESSAGES';
export const READ_ALL_MESSAGES = 'READ_ALL_MESSAGES';
export const STORE_ALL_MESSAGES = 'STORE_ALL_MESSAGES';
export const PUSH_NEW_MESSAGES = 'PUSH_NEW_MESSAGES';
export const GET_MESSAGES_FAIL = 'GET_MESSAGES_FAIL';
export const ACCEPT_FRIEND = 'ACCEPT_FRIEND';
export const REJECT_FRIEND = 'REJECT_FRIEND';

export class FetchAllMessages implements Action{
  readonly type = FETCH_ALL_MESSAGES;
}

export class ReadAllMessages implements Action{
  readonly type = READ_ALL_MESSAGES;
}

export class StoreAllMessages implements Action{
  readonly type = STORE_ALL_MESSAGES;

  constructor(public payload: Message[]){}
}

export class PushNewMessages implements Action{
  readonly type = PUSH_NEW_MESSAGES;

  constructor(public payload: Message[]){}
}

export class GetMessagesFail implements Action{
  readonly type = GET_MESSAGES_FAIL;

  constructor(public payload: String){}
}

export class AcceptFriend implements Action{
  readonly type = ACCEPT_FRIEND;

  constructor(public payload: {email:string, name:string}){}
}

export class RejectFriend implements Action{
  readonly type = REJECT_FRIEND;

  constructor(public payload: {email:string, name:string}){}
}

export type MessageActions = FetchAllMessages | ReadAllMessages | StoreAllMessages | PushNewMessages | GetMessagesFail | AcceptFriend | RejectFriend;
