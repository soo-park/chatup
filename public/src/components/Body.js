import React from 'react';
import Left from './Left.js';
import Top from './Top.js';
import Messages from './Messages.js';
import Bottom from './Bottom.js';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: props.status.view,
      userName: props.status.userName,
      userId: props.status.userId,
      roomId: 0,
      messages: props.status.messages
    }
  }


  handleRoomChange(id) {
    this.setState({ roomId : id });
  }


  componentWillReceiveProps() {
    this.setState({ roomId : id });    
  }


  render () {
    return (
        <div>
          <Left userName={this.state.userName} roomId={this.state.roomId} handleRoomChange={this.handleRoomChange.bind(this)}/>
          <div className="viewPane">
            <Top userName={this.state.userName} roomId={this.state.roomId} />
            <Messages roomId={this.state.roomId} userId={this.state.userId} userName={this.state.userName}/>
            <Bottom />          
          </div>
        </div>

    )
  }
}

export default Body;


