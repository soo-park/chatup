// import * as types from './actionTypes';
// const api = "localhost:8080";

// // action creator for chats
// export function loadChatsSuccess(chats) {
//   return { type: types.LOAD_CHATS_SUCCESS, chats };
// }

// export function createChatSuccess(chat) {
//   return { type: types.CREATE_CHAT_SUCCESS, chat };
// }

// export function updateChatSuccess(chat) {
//   return { type: types.UPDATE_CHAT_SUCCESS, chat };
// }

// // Tunk for loading chats
// export function loadChats() {
//   return function(dispatch) {
//     return api.getAllChats().then(chats => {
//       dispatch(loadChatsSuccess(chats));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }

// export function saveChat(chat) {
//   return function (dispatch, getState) {
//     return api.saveChat(chat).then(savedChat => {
//       chat.id ? dispatch(updateChatSuccess(savedChat)) :
//         dispatch(createChatSuccess(savedChat));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
