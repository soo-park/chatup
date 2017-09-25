import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses
});

// course: courses // short hand property name in ES 6
// state.courses can be used if the property name is set course

export default rootReducer;
