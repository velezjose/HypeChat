import React from 'react';
import User from './User';

const UserList = props => {
  return (
    <div class='col-md-4'>
      <div class='well'>
        <h3>Online Users</h3>
        <ul class='list-group' id='users'>
          { props.users.map(user => <User user={ user } />) }
        </ul>
      </div>
    </div>
  );
};

export default UserList;
