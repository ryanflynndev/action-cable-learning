import React from 'react'
import Chatroom from './Chatroom'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'


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
            <div style={joinchat}>
            <p onClick={this.clickHandler}>{this.props.chatroom.title}</p>
                    { this.loadChatroom()}
            </div>
        )
    }
}

export default ChatroomList

const joinchat = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // marginLeft: '2vw',
    marginTop: '2vh',
    border: '1px solid red',
    borderRadius: '8px'
  }