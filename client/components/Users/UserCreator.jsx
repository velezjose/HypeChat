import React, { Component } from 'react';

/*
 * UserCreator is a stateful class component that keeps a single state variable
 * username to keep track of a new user signing in. 
 */
class UserCreator extends Component {
  constructor(props) {
    super(props);
    
    this.state = { username: '' };

    this.onTextboxInput = this.onTextboxInput.bind(this);
    this.onUsernameSubmit = this.onUsernameSubmit.bind(this);
  }
  
  // If the user presses Enter but not together with Shift, AND if there is an
  // actual string as the username, then submit that username and pass it to
  // the App class to be handled.
  onTextboxInput(e) {
    if (e.key === 'Enter' && !e.shiftKey && this.state.username !== '') {
      return this.onUsernameSubmit(e);
    }
    
    this.setState({ username: e.target.value });
  }
  
  // Handle submission / login of a new user
  onUsernameSubmit(e) {
    e.preventDefault();
    this.props.submitUser(this.state.username);
  }


  render() {
    let { username } = this.state;

    return (
      <div className='row col-md-12'>

        <form className='form-group' style={{ width: 220, height: 15, fontSize: 15 }}>

          <textarea className='form-control' value={ username } placeholder="Username"
            onChange={ this.onTextboxInput } onKeyPress={ this.onTextboxInput } 
            style={{ height: 40, fontSize: 20 }}>
          </textarea>

          <br />

          <button onClick={ this.onUsernameSubmit } className='btn btn-primary'>Enter username</button>

        </form>

      </div>
    );
  }
}

export default UserCreator;
