import React from 'react'
import { Redirect } from 'react-router-dom'
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core'

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
    console.log("joinchat: ", this.props.chatroom.img_url)
    return (
      <Card style={chatName} onClick={this.clickHandler} >{ this.state.clicked ? <Redirect to="/" /> : null}
        <CardActionArea>
          <CardMedia 
          style={chatImage}
          image={this.props.chatroom.img_url}
          title={this.props.chatroom.title}
          />
        <CardContent>
          <Typography
            variant="h5"
            component="h2">
          {this.props.chatroom.title}
          </Typography>
            <Typography variant="body" component="p">
              {this.props.chatroom.description}
            </Typography>
            <br />
            <Typography variant="body2" compoinent='p'>
      Users:{this.props.chatroom.users.length}
            </Typography>

      

        </CardContent>
        </CardActionArea>
      </Card>
    ) 
  }
}

export default JoinChatroom

const chatName = {
  display: 'flex',
  margin: '10px',
  width: '28vw',
  justifyContent: 'center'
}

const chatImage = {
  height: 0,
  paddingTop: '56.25%',
  marginTop:'30'
}