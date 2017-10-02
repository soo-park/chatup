import { combineReducers } from 'redux';
import userName from './loginReducer.js';
import messages from './messagesReducer.js';
import rooms from './roomsReducer.js';
import currentRoom from './topReducer.js';
import view from './viewReducer.js';

const rootReducer = combineReducers({
  view,
  messages,
  rooms,
  userName,
  currentRoom
});

export default rootReducer;
