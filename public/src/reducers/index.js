import { combineReducers } from 'redux';
import view from './appReducer.js';
import messages from './messagesReducer.js';
import rooms from './roomsReducer.js';
// import userName from './loginReducer.js';
import currentRoom from './topReducer.js';


const rootReducer = combineReducers({
  view,
  messages,
  rooms,
  // userName,
  currentRoom
});

export default rootReducer;
