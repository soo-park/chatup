import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

App.propTypes = {
  allState: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    allState: state
  };
}

export default connect(mapStateToProps)(App);
// export default App;