import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as roomsActions from '../actions/roomsActions.js';
import Left from '../components/Left.js';

Left.propTypes = {
  rooms: React.PropTypes.array.isRequired,
  userName: React.PropTypes.string.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    rooms: state.rooms,
    userName: state.userName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(roomsActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Left);
