import React from 'react'
import { Redirect } from 'react-router-dom'

class JoinChatroom extends React.Component {

    state ={
        user: this.props.user
    }

  clickHandler = () => {
    let user_id = this.props.user.user.id
    let chatroom_id = this.props.chatroom.id
    let newMembership = {user_id: user_id, chatroom_id: chatroom_id}
    console.log(newMembership)
    const token = localStorage.getItem('token')
    fetch('http://localhost:3000/memberships', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accepts: 'application/json',
      Authorization: `Bearer ${token}`
    },
      body: JSON.stringify(newMembership)
    })
    .then(response => response.json())
    .then(membership => {
      console.log('Post request is:', membership)
      let previous = this.state.clicked
      this.setState({
        clicked: !previous
      })
    }) 
  }

  
  


  render() {
    return (
      <>
      <button onClick={this.clickHandler} >Join {this.props.chatroom.title}</button>
      { this.state.clicked ? <Redirect to="/" /> : null}
      </>
    ) 
  }
}

export default JoinChatroom

