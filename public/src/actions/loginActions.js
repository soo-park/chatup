import * as types from './actionTypes';

export function loginSuccess(userName) {
  return { type: types.LOGIN_SUCCESS, userName };
}

export function login(userName) {
  return function(dispatch) {
    return dispatch(loginSuccess(userName));
 };
}
