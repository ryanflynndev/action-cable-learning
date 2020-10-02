import React from 'react'
import Chatroom from './Chatroom'
import { Accordion, AccordionSummary, Typography, AccordionDetails, Avatar } from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import IconButton from '@material-ui/core/Button'

class ChatroomList extends React.Component {

    state = {
        clicked: false,
        user: this.props.user,
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

    submitHandler = () => {
        let membership = this.props.user.memberships.find(membership => {return membership.chatroom_id === this.props.chatroom.id})
        console.log(membership.id)
        console.log(membership)
        this.props.deleteMembership(membership)
    }
    

    render() {
        return (
            <Accordion style={accMain} >
                <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    onClick={this.clickHandler}
                >
                    <Typography style={heading} variant='h5'>{this.props.chatroom.title}</Typography>
                    <Avatar style={avatar} alt={this.props.chatroom.img_url} src={this.props.chatroom.img_url} />
                </AccordionSummary>
                    <AccordionDetails>
                    <Typography style={subHeading} variant='p'>{this.props.chatroom.description}</Typography>
                    { this.loadChatroom()}
                    </AccordionDetails>
                    <IconButton  variant="contained" style={leaveBtn} color="#f50057" onClick={this.submitHandler} startIcon={<ExitToAppIcon />}>
                 Leave Room
            </IconButton>
                        
                        

            <div className='chatroomList' style={joinchat}>
            <p ></p>
            
            </div>
                
            </Accordion>
        )
    }
}

export default ChatroomList

const joinchat = {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: '2vh',
    borderRadius: '8px'
}
  
const leaveBtn = {
    backgroundColor: '#e53935',
    color: 'white',
    float: 'right',
    marginBottom: '2vh',
    marginRight: '2vw',
    width: '15vw'
}

const chatImg = {
    display: 'flex',
    height: '20px',
    width: 'auto'
}

const heading = {
    fontSize: 'theme.typography.pxToRem(15)',
    flexShrink: 0,
}
  
const subHeading = {
    // fontSize: 'theme.typography.pxToRem(15)',
    alignContent: 'left',
    width: '20vw'
}

const accMain = {
    marginRight: '5vw',
    marginLeft: '5vw',
    marginBottom: '.5vh',
}

const avatar = {
    marginLeft: '1vw'
}