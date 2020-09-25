import React from 'react';
import './App.css';
import CreateMessage from './Components/CreateMessage'
// import RoomWebSocket from './Components/RoomWebSocket'
import { ActionCableConsumer } from 'react-actioncable-provider';
import MessageContainer from './Containers/MessageContainer'
// import ActionCable from 'actioncable'

// const WS_URL = 'ws://localhost:3000/cable'
class App extends React.Component {

  state = {
    messages: []
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/messages')
    .then(response => response.json())
    .then(messages => {
      console.log("In Mount: ", messages)
      this.setState({
        messages: messages
      })
    })
  }

  // componentDidUpdate = () => {
  //   const cable = ActionCable.createConsumer(WS_URL)

  //   cable.subscriptions.create({
  //     channel: 'ChatChannel'
  //   }, {
  //     received: response => this.createMessage(response)
  //   })
  // }
    

  
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
      console.log("In Fetch: ", newMessage)
      if(newMessage.id){
        let newArray = [newMessage, ...this.state.messages]
        this.setState({
          messages: newArray
        })

      }

    })
  }

  handleReceived = (message) => {
    console.log("HandleReceived: ", message)
  }

  render() {
    console.log("In Render: ", this.state.messages)
    return (
      <div>
        <CreateMessage submitHandler={this.createMessage}/>
        <ActionCableConsumer
          channel={{ channel: 'MessagesChannel' }}
          onReceived={this.handleReceived}
          onDisconnected={() => console.log("disconnected")} >
          <h1>{this.getMessages}</h1>
          <MessageContainer messages={this.state.messages}/>
        </ActionCableConsumer>
      </div>
    );
  }

}

export default App;
