import React from 'react'
import JoinChatroom from '../Components/JoinChatroom'

class ChatroomIndex extends React.Component {

    state = {
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

    renderAllChatrooms = () => {
        return this.filterUserChatrooms().map(chatroom => {
            return <JoinChatroom key={chatroom.id} chatroom={chatroom} user={this.props.user}/>
        })
    }

    filterUserChatrooms = () => {


        return this.state.chatrooms.filter(chat => { 
            return !chat.users.some(user => {
              return this.props.user.user.username === user.username
            })
        })
      
    }

    render() {
        return (
            <>
            <h1>Chatrooms Index</h1>
            {this.renderAllChatrooms()}
            </>
        )
    }

}

export default ChatroomIndex