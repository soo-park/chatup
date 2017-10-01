import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Router, browserHistory } from 'react-router';
import Left from './Left.js';
import Top from './Top.js';
import Messages from './Messages.js';
import Bottom from './Bottom.js';
import * as appActions from '../actions/appActions.js';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRoomChange(id) {
    this.setState({ roomId : id });
  }

  componentWillReceiveProps() {
    console.log(this.props);
    // if (this.props.currentRoom.id != nextProps.currentRoom.id) {      
    this.setState({ roomId : id });    
  }

  render () {
    return (
        <div>
          <Left userName={this.props.userName} roomId={this.props.roomId} handleRoomChange={this.handleRoomChange.bind(this)}/>
          <div className="viewPane">
            <Top userName={this.props.userName} roomId={this.props.roomId} />
            <Messages roomId={this.props.roomId} userId={this.props.userId} userName={this.props.userName}/>
            <Bottom />          
          </div>
        </div>

    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    view: state.view
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(appActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Body);