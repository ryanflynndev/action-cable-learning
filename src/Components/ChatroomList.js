import React from 'react'
import Chatroom from './Chatroom'
import { Grid } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/Button'
import { color } from '@material-ui/system';

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

    submitHandler = (e) => {
        let membership = this.props.user.memberships.find(membership => {return membership.chatroom_id === this.props.chatroom.id})
        console.log(membership.id)
        console.log(membership)
        this.props.deleteMembership(membership)
    }
    

    render() {
        return (
            <div className='chatroomList' style={joinchat}>
            <p onClick={this.clickHandler}>{this.props.chatroom.title}</p>
            <IconButton  variant="contained" style={leaveBtn} color="#f50057" onClick={this.submitHandler}>
                <ExitToAppIcon /> Leave Room
            </IconButton>
                    { this.loadChatroom()}
            </div>
        )
    }
}

export default ChatroomList

const joinchat = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // marginLeft: '2vw',
    marginTop: '2vh',
    // border: '1px solid red',
    borderRadius: '8px'
}
  
const leaveBtn = {
    backgroundColor: '#e53935',
    color: 'white'
}