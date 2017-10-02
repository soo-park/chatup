import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/appContainer.js';
import { Provider } from 'react-redux';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import configureStore from './store/configureStore.js';
import { loadMessages } from './actions/messagesActions.js';
import { loadRooms } from './actions/roomsActions.js';
import { currentRoom } from './actions/currentRoomActions.js';
import { login } from './actions/loginActions.js';

const store = configureStore();
store.dispatch(loadMessages(0));
store.dispatch(loadRooms());
store.dispatch(currentRoom(0));
store.dispatch(login('annonymous'));

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}>
      <AppContainer store={store}/>
    </Router>
  </Provider>
    
), document.getElementById('app'));