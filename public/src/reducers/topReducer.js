import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function roomsReducer (state = initialState.currentRoom, action) {
  switch (action.type) {
    case types.CURRENT_ROOM_SUCCESS:
    return action.currentRoom;
    
    default: 
      return state;
  }
};
