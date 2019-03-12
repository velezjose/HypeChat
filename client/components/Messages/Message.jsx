import React from 'react';

const Message = ({ username, message }) => {
  return (
    <div class='well'>
      <strong>${ username }</strong>: 
      ${ message }
    </div>
  );
};

export default Message;
