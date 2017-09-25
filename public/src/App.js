import React from 'react';
import Login from './components/Login.js';
import Body from './components/Body.js';

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
      <div>
        {this.state.view === 'login' ? <Login changeView={this.handleViewChange.bind(this)}/> : <Body status={this.state} />}
      </div>
    )
  }
}


export default App;
