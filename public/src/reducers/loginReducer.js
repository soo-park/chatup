import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function appReducer (state = initialState.userName, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.userName;
    
    default: 
      return state;
  }
};
