import React from 'react';
import LeftContainer from '../containers/leftContainer.js';
import TopContainer from '../containers/topContainer.js';
import MessagesContainer from '../containers/messagesContainer.js';
import Bottom from './Bottom.js';

class Body extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div>
          <LeftContainer userName={this.props.userName} roomId={this.props.roomId} />
          <div className="viewPane">
            <TopContainer userName={this.props.userName} roomId={this.props.roomId} />
            <MessagesContainer roomId={this.props.roomId} userId={this.props.userId} userName={this.props.userName}/>
            <Bottom />          
          </div>
        </div>

    )
  }
}

export default Body;