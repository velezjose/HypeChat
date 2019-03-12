import React from 'react';
import Message from './Message.jsx';

const MessageList = props => {
  return (
    <div id='messageArea' class='row'>
      <div class='chat' id='chat'></div>

      <Message />
    </div>
  );
};

export default MessageList;
