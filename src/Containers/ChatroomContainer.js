import React from 'react'
import ChatroomList from '../Components/ChatroomList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../Components/Login'

class ChatroomContainer extends React.Component {

  state = {
    user: this.props.user,
    chatrooms: []
  }

  componentDidMount() {
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/chatrooms', {
      headers: {
        Authorization: `Bearer ${token}`
    }})
      
    .then(response => response.json())
    .then(chatrooms => {
      console.log("In Mount: ", chatrooms)
      this.setState({
        chatrooms: chatrooms
      })
    })
  }
  
  renderChatrooms = () => {
    if (this.state.user.user.chatrooms.length > 0) {
      return this.state.user.user.chatrooms.map(chatroom => { return <ChatroomList key={chatroom.id} chatroom={chatroom} user={this.state.user.user} /> })
    }
  }
  
  render() {
    console.log(this.state.user.user.chatrooms)
    
    return (

    <div>
      {this.renderChatrooms()}
    </div>
    
 
    )
  }
}

export default ChatroomContainer