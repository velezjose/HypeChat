import React, { Component } from 'react';

/*
 * MessageForm is a stateful class component that keeps track of the message
 * a user has input in its textarea form. 
 */
class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = { message: '' };

    this.onTextboxInput = this.onTextboxInput.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  // If the input is Enter AND not together with shift AND if the state's 
  // message string contains something other than an empty string (i.e. there
  // is a message), then send that message to the sendMessage handler in the
  // App class.
  onTextboxInput(e) {
    if (e.key === 'Enter' && !e.shiftKey && this.state.message !== '') {
      return this.sendMessage(e);
    }

    this.setState({ message: e.target.value });
  }

  // Sends message to the App class to be handled and emitted via sockets
  sendMessage(e) {
    e.preventDefault();

    this.props.sendMessage(this.state.message);
    this.setState({ message: '' })
  }

  render() {
    return (
      <div className='col-md-8'>

        <form>

          <div className='form-group'>
          
            <label>Enter message:</label>

            <textarea 
              className='form-control' 
              value={ this.state.message }
              onChange={ this.onTextboxInput }
              onKeyPress={ this.onTextboxInput }>
            </textarea>

            <br />

            <button 
              type='submit' 
              className='btn btn-primary' 
              value='Send Message'
              onClick={ this.sendMessage }>Enter message
            </button>

          </div>

        </form>

      </div>
    );
  }
};

export default MessageForm;
