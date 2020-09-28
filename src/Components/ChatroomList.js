import React from 'react'
import Chatroom from './Chatroom'


class ChatroomList extends React.Component {

    state = {
        clicked: false,
        user: this.props.user
    }

    clickHandler = () => {
        let previous = this.state.clicked
        this.setState({
            clicked: !previous
        })
    }

    loadChatroom = () => {
        if (this.state.clicked) {
            return <Chatroom key={this.props.chatroom.id} chatroom={this.props.chatroom} user={this.props.user}/>
        } else {
            return null
        }

    }

    render() {
        return (
            <div>
            <p onClick={this.clickHandler}>{this.props.chatroom.title}</p>
            { this.loadChatroom()}
            
            </div>
        )
    }
}

export default ChatroomList