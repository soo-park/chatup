import 'babel-polyfill';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, browserHistory } from 'react-router';
import Login from './Login.js';
import Body from './Body.js';
import * as appActions from '../actions/appActions.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'login',
      userName: null,
      userId: null,
      messages: [],
      rooms: []
    }
  }
  
  handleViewChange(viewName, userName, userId) {
    this.setState({
      view: viewName,
      userName: userName,
      userId: userId,
      messages: [],
      rooms: []
    });
  }

  render () {
    return (
      <div>
        {this.state.view === 'login' ? <Login changeView={this.handleViewChange.bind(this)}/> : <Body status={this.state} />}
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    view: state.view
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
