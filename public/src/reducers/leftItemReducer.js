import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function roomsReducer (state = initialState.menuItem, action) {
  switch (action.type) {
    case types.MENU_SELECT_SUCCESS:
    return action.menuItem;
    
    default: 
      return state;
  }
};
