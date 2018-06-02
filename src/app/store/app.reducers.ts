import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromSearch from '../search/store/search.reducers';
import * as fromMessage from '../message/store/message.reducers';
import * as fromFriends from '../friends/store/friends.reducers';

export interface AppState{
  auth: fromAuth.State,
  search: fromSearch.State,
  message: fromMessage.State,
  friends: fromFriends.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  search: fromSearch.searchReducer,
  message: fromMessage.messageReducer,
  friends: fromFriends.friendsReducer
}
