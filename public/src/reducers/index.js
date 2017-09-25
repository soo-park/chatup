import { combineReducers } from 'redux';
import app from './appReducer.js';
import messages from './messagesReducer.js';

const rootReducer = combineReducers({
  app,
  messages
});

export default rootReducer;
