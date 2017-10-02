import * as types from './actionTypes';

export function setViewSuccess(view) {
  return { type: types.VIEW_CHANGE, view };
}

export function setView(view) {
  return function(dispatch) {
    return dispatch(setViewSuccess(view));
 };
}
