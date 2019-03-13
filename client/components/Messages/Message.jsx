import React from 'react';

// Message is a stateless functional component that renders a single message
const Message = ({ username, message }) => (
  <div className='well'>
    <strong style={{ paddingRight: 15, display: 'inline' }}>{ username }</strong>
    <p style={{ display: 'inline' }}>{ message }</p>
  </div>
);

export default Message;
