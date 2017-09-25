import * as types from '../actions/actionTypes';

export default function chatReducer(state = [], action) {
  switch (action.type) {
  case types.LOAD_CHAT_SUCCESS:
    return action.chats;
    
  default:
    return state;
  }
}