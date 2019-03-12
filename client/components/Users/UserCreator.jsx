import React, { Component } from 'react';

class UserCreator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
    };

    this.onTextboxInput = this.onTextboxInput.bind(this);
  }

  render() {
    let { username } = this.state;

    return (
      <div id='userFormArea' class='row'>
        <div class='col-md-12'>
            <form id='userForm'>
              <div class='form-group'>
                <label>Enter Username:</label>
                <textarea class='form-control' id='username' value={ username }></textarea>
                <br />
                <button onClick={ () => props.onLogin(username) } class='btn btn-primary'></button>
              </div>
            </form>
        </div>
      </div>
    );
  }
}

export default UserCreator;
