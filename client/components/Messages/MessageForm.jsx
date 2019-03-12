import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
    };

    this.onTextboxInput = this.onTextboxInput.bind(this);
  }

  onTextboxInput(e) {
    
  }

  render() {
    return (
      <div class='col-md-8'>
        <form id='messageForm'>
          <div class='form-group'>
            <label>Enter message:</label>
            <textarea class='form-control' id='message'></textarea>
            <br />
            <input type='submit' class='btn btn-primary' value='Send Message' />
          </div>
        </form>
      </div>
    );
  }
};

export default MessageForm;
