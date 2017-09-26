import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function roomsReducer (state = initialState.rooms, action) {
  switch (action.type) {
    case types.LOAD_ROOMS_SUCCESS:
    return action.rooms;
    
    default: 
      // console.log("in LOAD ROOMS SUCCESS reducer", console.log(action.type));
      return state;
  }
};
