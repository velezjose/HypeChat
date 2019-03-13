import React, { Component } from 'react';

import UserCreator from './Users/UserCreator.jsx';
import UserList from './Users/UserList.jsx';
import MessageForm from './Messages/MessageForm.jsx';
import MessageList from './Messages/MessageList.jsx';

const socket = io('http://localhost:3030/');

class App extends Component {
  constructor(props) {
    super(props);

    // App only needs users [], messages [] and a loggedIn flag to operate
    this.state = {
      users: [],
      messages: [],
      loggedIn: false,
    };

    // When the ws connection gets users, update the state's users array
    socket.on('get users', users => this.setState({ users }));

    // When the ws connection gets a new message, update and add the message
    // to the front of the state's messages array
    socket.on('new message', ({ message, username }) => {
      let newMessages = this.state.messages.slice();
      newMessages.unshift({ message, username });
      this.setState({ messages: newMessages });
    });

    this.submitUser = this.submitUser.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  // Handle the emission of a new user from the App class and not the UserCreator
  submitUser(username) {
    socket.emit('new user', username, data => {
      if (data) {
        this.setState({ loggedIn: true });
      }
    });
  }

  // Send message handler
  sendMessage(message) {
    socket.emit('send message', message);
  }


  render() {
    const { loggedIn, users, messages } = this.state;

    if (loggedIn === false) {
      return <UserCreator submitUser={ this.submitUser }/>;
    }

    return (
      <div style={{ marginTop: 20 }}>
        <UserList users={ users } />
        <MessageForm sendMessage={ this.sendMessage } socket={ socket } />
        <MessageList messages={ messages } />
      </div>
    );
  }

}

export default App;
