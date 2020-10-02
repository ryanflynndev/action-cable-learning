import React from 'react'
import ChatroomList from '../Components/ChatroomList'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Login from '../Components/Login'
import { Typography } from '@material-ui/core'

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
  
  deleteMembership = (membershipObj) => {
    const token = localStorage.getItem('token');
    fetch(`http://localhost:3000/memberships/${membershipObj.id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        accepts: 'application/json'
      },
    })
    .then(() => {
      this.componentDidMount()
    })
  }
  
  renderChatrooms = () => {
    if (this.state.user.user.chatrooms.length > 0) {
      return this.state.user.user.chatrooms.map(chatroom => { return <ChatroomList key={chatroom.id} chatroom={chatroom} user={this.state.user.user} deleteMembership={this.deleteMembership} /> })
    }
  }
  
  render() {
    console.log(this.state.user.user.chatrooms)
    
    return (

      <div className="chatroomContainer" style={chatlist}>
        <Typography style={title} variant="h4">My Chatrooms</Typography>
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
  // border: '1px solid yellow',
  borderRadius: '8px',

}

const title = {
  marginBottom: '4vh'
}