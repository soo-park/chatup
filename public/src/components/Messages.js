import React from 'react';
import Message from './Message.js';

const Messages = ({messages, userId}) => {
  return (
    <div className="message-box">
      {messages.length !== 0 ? messages.map(item => <Message item={item} key={item.id} userId={userId}/>): ""}
    </div>
  )
};

export default Messages;
