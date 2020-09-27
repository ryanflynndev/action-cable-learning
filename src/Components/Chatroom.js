import React from 'react'
import MessageContainer from '../Containers/MessageContainer'
import { ActionCableConsumer } from 'react-actioncable-provider'
import CreateMessage from './CreateMessage'

class Chatroom extends React.Component {

  state = {
    messages: []
  }

    componentDidMount(){
      const token = localStorage.getItem('token')
      fetch('http://localhost:3000/chatrooms', {
        headers: {
          Authorization: `Bearer ${token}`
      }}) 
      .then(response => response.json())
      .then(chatrooms => {
        let found = chatrooms.find(chatroom => chatroom.id === this.props.chatroom.id)
        console.log(found)
        this.setState({
          messages: found.messages
        })
      })
    }
  
  submitHandler = (messageObj) => {
    const token = localStorage.getItem("token")
    fetch('http://localhost:3000/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accepts: 'application/json',
        Authorization: `Bearer ${token}`
      },
        body: JSON.stringify(messageObj)
      })
      .then(response => response.json())
      .then(message => {
        console.log('Post request is:', message)})
      
  }

  handleReceived = (data) => {
    console.log("In handle recieved: ", data)
    let newArray = [...this.state.messages, data.message]
    console.log(newArray)
    this.setState({
      messages: newArray
    })
  }


  render() {
      return (
        
          <div>
          <ActionCableConsumer
            channel={{ channel: 'ChatroomChannel', id: this.props.chatroom.id }}
            onReceived={this.handleReceived}
            // onDisconnected={() => console.log("disconnected")}
          >
              <MessageContainer key={"ChatroomChannel"} messages={this.state.messages}/>
            </ActionCableConsumer>
            
            <CreateMessage submitHandler={this.submitHandler} chatroomId={this.props.chatroom.id}/>
            
          </div>
      )
    }
}


export default Chatroom