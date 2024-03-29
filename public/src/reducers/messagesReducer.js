import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function messagesReducer (state = initialState.messages, action) {
  switch (action.type) {
    case types.LOAD_MESSAGES_SUCCESS:
      return action.messages;

    case types.POST_MESSAGE_SUCCESS:
      return action.messages;
  
    default: 
      return state;
  }
};
