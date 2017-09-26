import * as types from './actionTypes';

export function loadRoomsSuccess(rooms) {
  return { type: types.LOAD_ROOMS_SUCCESS, rooms };
}

export function loadRooms() {
  return function(dispatch) {
    return fetch(`http://localhost:8080/api/rooms`)
    .then(response => response.json())
    .then(json => {
      console.log("rooms in roomsActions", json)
      return dispatch(loadRoomsSuccess(json));
    })
    .catch(error => error)
  };
}
