import * as types from '../actions/actionTypes';
import initialState from './initialState';


export default function appReducer (state = initialState.view, action) {
  switch (action.type) {
    case types.VIEW_CHANGE:
      return action.view;
    
    default: 
      return state;
  }
};
