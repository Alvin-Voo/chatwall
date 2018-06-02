import { Action } from "@ngrx/store";
import { User } from "../../models/user.model";

export const GET_FRIENDS_LIST = 'GET_FRIENDS_LIST';
export const STORE_FRIENDS_LIST = 'STORE_FRIENDS_LIST';
export const GET_FRIENDS_FAIL = 'GET_FRIENDS_FAIL';
export const UPDATE_FRIENDS_LIST = 'UPDATE_FRIENDS_LIST';

export class GetFriendsList implements Action{
  readonly type = GET_FRIENDS_LIST;
}

export class StoreFriendsList implements Action{
  readonly type = STORE_FRIENDS_LIST;

  constructor(public payload: User[]){}
}

export class GetFriendsFail implements Action{
  readonly type = GET_FRIENDS_FAIL;

  constructor(public payload: String){}
}

export class UpdateFriendsList implements Action{
  readonly type = UPDATE_FRIENDS_LIST;

  constructor(public payload: User){}
}

export type FriendsActions = GetFriendsList | StoreFriendsList | GetFriendsFail | UpdateFriendsList;
