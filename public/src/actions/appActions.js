import * as types from './actionTypes';

export function loginSuccess(view) {
  return { type: types.VIEW_CHANGE, view };
}

export function login(view) {
  return function(dispatch) {
      dispatch(loginSuccess(view));
  };
}
