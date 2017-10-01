import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentRoomActions from '../actions/currentRoomActions.js';


class Top extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <header className="top bounding">
        <div className="top-name"> {this.props.currentRoom ? this.props.currentRoom.name : ""} </div>
        <div>
          <span className="red-text">{this.props.userName}</span>
          <span>{this.props.currentRoom ? this.props.currentRoom.users.map(user => ", " + user): ""}</span>
        </div>
      </header>
    )
  }
}

Top.propTypes = {
  currentRoom: React.PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currentRoom: state.currentRoom
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(currentRoomActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Top);
