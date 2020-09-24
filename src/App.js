import React from 'react';
import './App.css';
import CreateMessage from './Components/CreateMessage'
// import RoomWebSocket from './Components/RoomWebSocket'
import { ActionCableConsumer } from 'react-actioncable-provider';
import MessageContainer from './Containers/MessageContainer'

class App extends React.Component {

  state = {
    messages: []
  }

  getMessages = () => {
    fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then(messages => {
      console.log(messages)
      this.setState({
        messages: messages
      })
    })
  }

  createMessage = (message) => {
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
      body: JSON.stringify(message)
    }).then(response => response.json())
    .then(newMessage => {
      if(newMessage.id){
        let newArray = [newMessage, ...this.state.messages]
        this.setState({
          messages: newArray
        })
      }

    })
  }

  render() {

    return (
      <div>
        <CreateMessage submitHandler={this.createMessage}/>
        <ActionCableConsumer channel={{ channel: 'ChatChannel' }} onRecieved={this.getMessages}>
        </ActionCableConsumer>
        <MessageContainer messages={this.state.messages}/>
      </div>
    );
  }

}

export default App;
