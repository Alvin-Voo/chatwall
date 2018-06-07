import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const CLEAR_SEARCH = 'CLEAR_SEARCH';
export const SEARCH = 'SEARCH';
export const UPDATE_USERS_LIST = 'UPDATE_USERS_LIST';
export const SEARCH_FAIL = 'SEARCH_FAIL';
export const SEND_FRIEND_REQUEST = 'SEND_FRIEND_REQUEST';
export const UPDATE_USER = 'UPDATE_USER';
export const CLEAR_STORE = 'CLEAR_STORE';

export class ClearSearch implements Action{
  readonly type = CLEAR_SEARCH;

}

export class Search implements Action{
  readonly type = SEARCH;

  constructor(public payload: string){}
}

export class UpdateUsersList implements Action{
  readonly type = UPDATE_USERS_LIST;

  constructor(public payload: User[]) {}
}

export class UpdateUser implements Action{
  readonly type = UPDATE_USER;

  constructor(public payload: User){}
}

export class SearchFail implements Action{
  readonly type = SEARCH_FAIL;

  constructor(public payload: string){}
}

export class SendFriendRequest implements Action{
  readonly type = SEND_FRIEND_REQUEST;

  constructor(public payload: {email, name}) {}
}

export class ClearStore implements Action{
  readonly type = CLEAR_STORE;

}

export type SearchActions = ClearSearch | Search | UpdateUsersList | UpdateUser | SearchFail | SendFriendRequest | ClearStore;
