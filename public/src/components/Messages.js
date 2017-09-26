import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as messagesActions from '../actions/messagesActions.js';
import Message from './Message.js';
import { browserHistory } from 'react-router';


class Messages extends React.Component {
  constructor(props, context) {
    super(props, context);
  }
  
  componentWillReceiveProps(newProps) {
    // this.handleMessage(newProps.roomId);
  }

  render () {
    console.log("messages props", this.props)
    return (
      <div className="message-box">
        {this.props.messages.length !== 0 ? this.props.messages.map(item => <Message item={item} key={item.id} userId={this.props.userId}/>): ""}
      </div>
    )
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
