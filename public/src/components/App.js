import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, props.allState);
    this.handleViewChange = this.handleViewChange.bind(this);
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
        {this.props.children}
      </div>
    )
  }
}

export default App;
