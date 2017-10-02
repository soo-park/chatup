import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messagesActions from '../actions/messagesActions.js';
import { browserHistory } from 'react-router';
import Messages from '../components/Messages.js';

Messages.propTypes = {
  messages: React.PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(messagesActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Messages);
