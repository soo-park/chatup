import * as types from './actionTypes';
import chatApi from '../api/mockChatApi';

export function loadChatsSuccess(chats) {
  return { type: types.LOAD_CHAT_SUCCESS, chats };
}

export function loadChats() {
  return function(dispatch) {
    return chatApi.getAllChats().then(chats => {
      // dispatchEvent(loadChatsSuccess(chats));
      dispatch(loadChatsSuccess(chats));
    }).catch(error => {
      throw(error);
    });
  };
}
