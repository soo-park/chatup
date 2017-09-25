import {combineReducers} from 'redux';
import chats from './chatReducer';

const rootReducer = combineReducers({
  chats
});

// chat: chats // short hand property name in ES 6
// state.chats can be used if the property name is set chat

export default rootReducer;
