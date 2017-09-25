import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function messagesReducer (state = initialState.view, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS:
      return action.view;
    
    default: 
      return state;
  }
};

// default 가
// view: 'login',
// userName: null,
// userId: null,
// roomId: null
// messages: []
// reaction: null
// 인 object 가 state
