import React from 'react';
import Message from './Message.jsx';

// MessageList is a stateless functional based component that renders all of the messages
const MessageList = ({ messages }) => (
  <div className='row col-md-8' style={{ float: 'right' }}>
    { messages.map(({ message, username }, idx) => <Message key={ idx } message={ message } username={ username } />) }
  </div>
);

export default MessageList;
