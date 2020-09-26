import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider';
import CreateMessage from './CreateMessage'
import MessageContainer from '../Containers/MessageContainer'

const RoomContext = React.createContext(null)

class OldChatRoom extends React.Component {
  
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
        console.log(newMessage)
    })
  }

  handleReceived = (message) => {
    console.log("In handle recieved: ", message)
    let newArray = [...this.state.messages, message]
    this.setState({
      messages: newArray
    })
  }
  
  render() {
    console.log("in Render: ", this.state)
    return (
      // <RoomContext.Provider value={this.state.messages}>
        <div>
        <CreateMessage submitHandler={this.createMessage}/>
        <ActionCableConsumer
          channel={{ channel: 'MessagesChannel' }}
          onReceived={this.handleReceived}
          onDisconnected={() => console.log("disconnected")} >
          <h1>{this.getMessages}</h1>
            <MessageContainer key={'MessagesChannel'} messages={this.state.messages}/>
        </ActionCableConsumer>
      </div>
      // </RoomContext.Provider> 
    )
  }
}

export default ChatRoom