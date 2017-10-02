import React from 'react';
import Message from './Message.js';

const Messages = (props) => {
  return (
    <div className="message-box">
      {props.messages.length !== 0 ? props.messages.map(item => <Message item={item} key={item.id} userId={props.userId}/>): ""}
    </div>
  )
};

export default Messages;
