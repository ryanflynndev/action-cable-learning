import React from 'react'
import { Avatar, Card, CardContent, Typography } from '@material-ui/core';

class Message extends React.Component {

    render() {
        console.log("triggered")
        return (
            <Card style={card} elevation={3}>
                <CardContent style={userMess}>
                    <Avatar  alt={this.props.message.username} src={this.props.message.user_avatar} />
                    <Typography style={type} variant="h6">{this.props.message.username}</Typography>
                    <div style={wrapper}>
                    <Typography variant='h8'>{this.props.message.body}</Typography>
                    </div>
                
                </CardContent>
            </Card>
        )
        
    }
}

export default Message

const card = {
    margin: "20px",
    flexDirection: 'row',
    overflow: 'auto'
}

const userMess = {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap'
}

const wrapper = {
    float: 'left',
    width: '80vw',
    marginLeft: '5vw',
    marginTop: '1vh',
    marginBottom: '.25vh'
}

const type = {
 marginLeft: '1vw'   
}

