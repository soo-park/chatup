import * as types from './actionTypes';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

// Tunk for loading courses
export function loadMessages(id) {
  return function(dispatch) {
    return fetch(`http://localhost:8080/api/rooms/${id}/messages`)
    .then(response => response.json())
    .then(json => {
      return dispatch(loadMessagesSuccess(json));
    })
    .catch(error => error)
  };
}
