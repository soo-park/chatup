import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import LeftItem from '../components/leftItem.js';
import * as currentRoomActions from '../actions/currentRoomActions.js'

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
)(LeftItem);
