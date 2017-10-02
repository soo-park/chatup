import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as leftItemActions from '../actions/leftItemActions.js';
import LeftItem from '../components/leftItem.js';

LeftItem.propTypes = {
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
)(LeftItem);
