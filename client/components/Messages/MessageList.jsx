import React from 'react';
import Message from './Message.jsx';

// MessageList is a stateless functional based component that renders all of the messages
const MessageList = ({ messages }) => (
  <div className='row col-md-7' style={{ float: 'right', marginRight: 80 }}>
    { messages.map(({ message, username }, idx) => <Message key={ idx } message={ message } username={ username } />) }
  </div>
);

export default MessageList;
