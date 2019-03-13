import React from 'react';
import User from './User.jsx';

// UserList is a stateless functional component that renders a list of currently connected users
const UserList = ({ users }) => (
  <div className='col-md-4 well'>

    <h3>Online Users</h3>

    <ul className='list-group'>
      { users.map((username, idx) => <User key={ idx } username={ username } />) }
    </ul>

  </div>
);

export default UserList;
