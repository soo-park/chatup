import * as types from './actionTypes';
import axios from 'axios';

export function loadMessagesSuccess(messages) {
  return { type: types.LOAD_MESSAGES_SUCCESS, messages };
}

export function postMessageSuccess(messages) {
  return { type: types.POST_MESSAGE_SUCCESS, messages };
}

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

function postMessage(action, id, message) {
  return function (dispatch) {
    axios.post(`http://localhost:8080/api/rooms/${id}/messages`, props)
    .then(response => response.json())
    .then(json => {
      return dispatch(postMessageSuccess(json));
    })
    .catch(error => error)
  };
}
