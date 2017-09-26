import * as types from './actionTypes';

export function currentRoomSuccess(room) {
  return { type: types.CURRENT_ROOM_SUCCESS, room };
}

export function currentRoom(id) {
  return function(dispatch) {
    return fetch('http://localhost:8080/api/rooms/' + id)
    .then(response => response.json())
    .then(json => {
      console.log("currentRoom in currentRoomActions", json)
      return dispatch(currentRoomSuccess(json));
    })
    .catch(error => error)
  };
}
