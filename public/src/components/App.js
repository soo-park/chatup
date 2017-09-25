import React from 'react';
import Login from './Login.js';
import Body from './Body.js';

import 'babel-polyfill';
import { Router, browserHistory } from 'react-router';
import routes from '../common/routes';

import configureStore from '../store/configureStore.js';
import { Provider } from 'react-redux';
// import { loadChats } from './actions/messagesActions.js';

const store = configureStore();
// store.dispatch(loadChats());

// FIXME: implement redux for better state management
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      userName: null,
      userId: null,
      messages: []
    }
  }
  
  handleViewChange(viewName, userName, userId) {
    this.setState({
      view: viewName,
      userName: userName,
      userId: userId
    });
  }

  render () {
    return (
      <Provider store={store}>            
        <div>
          {this.state.view === 'login' ? <Login changeView={this.handleViewChange.bind(this)}/> : <Body status={this.state} />}
        </div>
      </Provider>
    )
  }
}


export default App;
