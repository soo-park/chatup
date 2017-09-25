import 'babel-polyfill';
import React from 'react';
import configureStore from '../store/configureStore.js';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './navigation/routes';
import Login from './Login.js';
import Body from './Body.js';
import { loadMessages } from '../actions/messagesActions.js';

const store = configureStore();
store.dispatch(loadMessages(0));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      userName: null,
      userId: null,
      messages: []
    }
    console.log("this.props in app.js: ", this.props);
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
