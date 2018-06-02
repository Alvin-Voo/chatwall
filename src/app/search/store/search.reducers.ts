import * as SearchActions from './search.actions';
import { User } from '../../models/user.model';

export interface State{
  usersList: User[];
  search_fail_message: string;
}

const initialState: State ={
  usersList: new Array<User>(),
  search_fail_message: null
}

export function searchReducer(state=initialState, action: SearchActions.SearchActions){
  switch(action.type){
    case(SearchActions.CLEAR_SEARCH):
      return{
        ...state,
        usersList: [],
        search_fail_message: null
      }
    case(SearchActions.UPDATE_USERS_LIST):
      return{
        ...state,
        usersList: [...action.payload],
        search_fail_message: null
      }
    case(SearchActions.UPDATE_USER):
      const updatedUsersList = [...state.usersList];
      const index = updatedUsersList.findIndex((user)=>{
        return user.email===action.payload.email && user.name===action.payload.name
      });
      if(index>-1)updatedUsersList[index] = action.payload;
      return{
        ...state,
        usersList: updatedUsersList
      }
    case(SearchActions.SEARCH_FAIL):
      return{
        ...state,
        search_fail_message: action.payload
      }
    default:
      return state;
  }
}
