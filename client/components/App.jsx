import React, { Component } from 'react';

// import UserCreator from './Users/UserCreator.jsx';
// import UserList from './Users/UserList.jsx';
// import MessageForm from './Messages/MessageForm.jsx';
// import MessageList from './Messages/MessageList.jsx';

/*
    <style>
      body {
        margin-top: 30px;
      }

      #messageArea {
        display: none;
      }
    </style>
*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
      messages: [],
      loggedIn: false,
    };

    this.onLogin = this.onLogin.bind(this);
  }


  onLogin() {
    this.setState({
      loggedIn: true,
    });
  }
  
  render() {
    return (
      <div class='container'>

      {/* {
        loggedIn === false ? (
          <UserCreator onLogin={ this.onLogin }/> 
        ) : (
          <>
            <UserList users={ users } />
            <MessageForm />
            <MessageList messages={ messages } />
          </>
        )
      } */}
      TEST
      </div>
    );
  }
}

export default App;
