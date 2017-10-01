import * as types from './actionTypes';

export function currentRoomSuccess(currentRoom) {
  return { type: types.CURRENT_ROOM_SUCCESS, currentRoom };
}

export function currentRoom(id) {
  return function(dispatch) {
    return fetch('http://localhost:8080/api/rooms/' + id)
    .then(response => response.json())
    .then(json => {
      return dispatch(currentRoomSuccess(json));
    })
    .catch(error => error)
  };
}
