import React from 'react'
import ChatroomList from '../Components/ChatroomList'

class ChatroomContainer extends React.Component {
  renderChatrooms = () => {
    return this.props.chatrooms.map(el => {return <ChatroomList key={el.id} chatroom={el} />})
  }
  render() {
    return (
      <>
        {this.renderChatrooms()}
      </>
    )
  }
}

export default ChatroomContainer