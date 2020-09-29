import React from 'react'
import ChatroomList from '../Components/ChatroomList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../Components/Login'
import { Grid } from '@material-ui/core'

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
    fetch('http://localhost:3000/api/v1/profile', {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}`},
      }).then(response => response.json())
      .then(theUser => {
        this.setState({
          user: theUser
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

      <div style={chatlist}>
        <h1>Chatrooms</h1>
      {this.renderChatrooms()}
    </div>
    
 
    )
  }
}

export default ChatroomContainer

const chatlist = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  marginLeft: '2vw',
  marginTop: '2vh',
  border: '1px solid yellow',
  borderRadius: '8px',
  // float: 'left'
  // width: '10vw'
}