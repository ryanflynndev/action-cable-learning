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
    return this.state.chatrooms.map(el => {return <ChatroomList key={el.id} chatroom={el} />})
  }
  render() {
    return (

    <div>
      {this.renderChatrooms()}
    </div>
    
 
    )
  }
}

export default ChatroomContainer