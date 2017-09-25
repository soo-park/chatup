// import * as types from './actionTypes';
// const api = "localhost:8080";

// // action creator for chats
// export function loadChatsSuccess(chats) {
//   return { type: types.LOAD_CHATS_SUCCESS, chats };
// }

// // Thunk for loading chats
// export function loadChats() {
//   return function(dispatch) {
//     return api.getAllChats().then(chats => {
//       dispatch(loadChatsSuccess(chats));
//     }).catch(error => {
//       throw(error);
//     });
//   };
// }
