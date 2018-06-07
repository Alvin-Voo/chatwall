import * as FriendsActions from './friends.actions';
import { User } from '../../models/user.model';

export interface State{
  friendsList: User[];
  friends_fail_message: String;
}

const initialState: State ={
  friendsList: new Array<User>(),
  friends_fail_message: null
}

export function friendsReducer(state=initialState, action: FriendsActions.FriendsActions){
  switch(action.type){
    case(FriendsActions.STORE_FRIENDS_LIST):
      return{
        ...state,
        friendsList: [...action.payload],
        friends_fail_message: null
      }
    case(FriendsActions.GET_FRIENDS_FAIL):
      return{
        ...state,
        friends_fail_message: action.payload
      }
    case(FriendsActions.UPDATE_FRIEND_ONLINE_STATUS):
      const oldList = [...state.friendsList];
      const oldFriendInd = oldList.findIndex((friend)=>friend.email===action.payload.email&&friend.name===action.payload.name);
      if(oldFriendInd>-1)oldList[oldFriendInd].online = action.payload.online;
      return{
        ...state,
        friendsList: [...oldList]
      }
    case(FriendsActions.UPDATE_FRIEND_CHAT_STATUS):
      const statusList = [...state.friendsList];
      const oldInd = statusList.findIndex((friend)=>friend.email===action.payload.email&&friend.name===action.payload.name);
      if(oldInd>-1)statusList[oldInd].status = action.payload.status;
      return{
        ...state,
        friendsList: [...statusList]
      }
    default:
      return state;
  }
}
