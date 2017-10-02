import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as currentRoomActions from '../actions/currentRoomActions.js';
import Top from '../components/Top.js';

Top.propTypes = {
  currentRoom: React.PropTypes.object.isRequired,
  userName: React.PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    currentRoom: state.currentRoom,
    userName: state.userName
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(currentRoomActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Top);
