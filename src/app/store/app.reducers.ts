import { ActionReducerMap } from '@ngrx/store';
import * as fromAuth from '../auth/store/auth.reducers';
import * as fromSearch from '../search/store/search.reducers';

export interface AppState{
  auth: fromAuth.State,
  search: fromSearch.State
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  search: fromSearch.searchReducer
}
